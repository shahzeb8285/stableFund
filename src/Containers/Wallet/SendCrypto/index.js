
import React from 'react'
import { isAddress } from '@ethersproject/address'

import {
  BottomNavigation,
  BottomNavigationTab,
  Divider,
  Layout,
  Spinner,
  Tab,
  Text,
} from '@ui-kitten/components'
import { Icon } from 'react-native-eva-icons'
import { TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AtomindButton, AtomindText, BackButton, SearchBox } from '@/Components'
import { useState } from 'react'
import { getSearchResults } from '@/Utils/Coingecko'
import { useEffect } from 'react'
import OneTokenSearchRow from '@/Components/OneTokenSearchRow'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import Toast from 'react-native-toast-message'

import LinearGradient from 'react-native-linear-gradient'
import { Select, SelectItem } from '@ui-kitten/components'
import Dropdown from '@/Components/Dropdown'
import CurrencyInput from './CurrencyInput'
import AddressInput from './AddressInput'
import QRScanner from '@/Containers/QRScanner'
import { useSelector } from 'react-redux'
import { getERC20Contract } from '@/Utils/Crypto/Transactions'
import { BigNumber } from '@ethersproject/bignumber'
import { VasernDB } from '../../../DB'

const ExchangeFragment = ({ route, navigation }) => {
  const [scannerVisible, setScannerVisible] = useState(false)
  const [selectedCurrency, setSelectedCurrency] = useState()
  const [currencyList, setCurrencyList] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [inputAmount, setInputAmount] = useState("")
  const [receiverAddress, setReceiverAddress] = useState("")
  const user = useSelector(state => state.user.data)



  useEffect(() => {

    const _currencyList = []

    
    if(user.portfolio){
      for (let chainId of Object.keys(user.portfolio)) {
        const chain = user.portfolio[chainId]
        for (let token of chain.tokenBalances) {
          _currencyList.push({
            ...token,
            chainId,
          })
        }
  
  
        _currencyList.push({
          ...chain.nativeBalance,
          chainId,
          isCoin: true
        })
      }
  
  
      setCurrencyList(_currencyList)
      setSelectedCurrency(_currencyList[0])
    }
  }, [user])


  const handleSubmit = async () => {
    if (!receiverAddress || !isAddress(receiverAddress)) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: "Please Enter Valid Receiver Address",
      })
      return
    }

    if (!inputAmount) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: "Please Enter Valid Amount",
      })
      return
    }

    if (Number(inputAmount) > Number(selectedCurrency.balance)) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: `Don't Have Enough ${selectedCurrency.symbol.toUpperCase()} Balance`,
      })
      return
    }

    setLoading(true)

    let func;

    if (selectedCurrency.isCoin) {
      func = async () => { }
    } else {
      func = sendERC20
    }

    try {
      await func()
    } catch (err) {
      console.error(err)
    }
    setLoading(false)
  }


  const sendERC20 = async () => {
    const { contract, signer, provider } = await getERC20Contract(selectedCurrency.chainId.toString(), user.wallet.privateKey, selectedCurrency.address)

    const finAmount = Number(inputAmount) *( 10** selectedCurrency.decimals)

    const functionGasFees = await contract.estimateGas.transfer(receiverAddress, finAmount.toString());
   
    const gasPrice = await provider.getGasPrice();
    const finalGasPrice = gasPrice.mul( functionGasFees);
    const myBalance = await signer.getBalance()
    if (myBalance.lt(finalGasPrice)) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: "Insuffient Balance To Pay Gas Fee",
      })
      return
    }
    const tx = await contract.transfer(receiverAddress, finAmount.toString());
  
    const txnPayload = {
      hash: tx.hash,
      timestamp: Date.now(),
      actionName: "Transfer Coins",
      chainId: selectedCurrency.chainId
  }
  try {
      const { Transaction } = VasernDB

      await Transaction.insert(txnPayload, save = true)

  } catch (err) {
      console.error(err)
  }
  
  
  }


  return (
    <View
      style={{
        backgroundColor: '#F5F5F5',
        flex: 1,
      }}
    >
      <View
        style={{
          padding: 15,
          paddingHorizontal: 25,
          flex: 1,
          marginTop: 20,
        }}
      >



        <View style={{ flexDirection: 'row' }}>
          {route ? (
            <View>
              <BackButton
                onPress={() => {
                  if (navigation) {
                    navigation.goBack()
                  }
                }}
              />
            </View>
          ) : null}
          <AtomindText
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: '500',
              flex: 1,
              justifyContent: 'center',
              alignSelf: 'center',
              padding: 15,
              // flex:1
            }}
            category="h5"
          >
            Send
          </AtomindText>

          {route ? <View style={{ flex: 1 }} /> : null}
        </View>

        <View
          style={{
            // flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 30,
            marginBottom: 10,
          }}
        >
          <AtomindText

            style={{
              fontWeight: '400',
              marginBottom: 5,
              fontSize: 16,
              color: '#717171',
            }}
          >
            Receiver Address
          </AtomindText>
          <AddressInput
            onChange={(t) => {
              setReceiverAddress(t)
            }}
            onQRClick={() => {

              setScannerVisible(true)
            }} />
        </View>

        <View>
          <View>
            <View style={{ flexDirection: 'row' }}>
              {selectedCurrency ? <AtomindText
                style={{
                  fontWeight: '400',
                  marginBottom: 5,
                  fontSize: 16,
                  color: '#717171',
                }}
              >
                Your Balance {selectedCurrency.balance} {selectedCurrency.symbol}
              </AtomindText> : null}

            </View>
            <CurrencyInput

              inputAmount={inputAmount}
              onInputAmountChange={(b) => {
                setInputAmount(b)
              }}

              data={currencyList}
              onSelectCurrency={(curr) => {
                setSelectedCurrency(curr)
              }}
              selectedCurrency={selectedCurrency} />
          </View>
        </View>

        {/* {scannerVisible?<QRScanner modalVisible={true} setModalVisible={(p) => {
          setScannerVisible(p)
        }}  />:null } */}

        <AtomindButton
          isLoading={isLoading}
          onPress={async () => {
            await handleSubmit()
          }}
          text={`Send ${inputAmount ? inputAmount : ""} ${selectedCurrency ? selectedCurrency.symbol.toUpperCase() : ""}`} />
      </View>
    </View>
  )
}

export default ExchangeFragment
