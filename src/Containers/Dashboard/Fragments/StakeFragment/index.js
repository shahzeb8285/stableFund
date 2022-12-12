import React from 'react'
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Spinner,
  Tab,
  Text,
} from '@ui-kitten/components'
import Toast from 'react-native-toast-message'

import StakingCarousel from "./StakingCarousel"
import { Icon } from 'react-native-eva-icons'
import { TouchableOpacity, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../Components/Header'
import { AtomindButton, AtomindText, SearchBox } from '@/Components'
import { useState } from 'react'
import { getSearchResults } from '@/Utils/Coingecko'
import { useEffect } from 'react'
import OneTokenSearchRow from '@/Components/OneTokenSearchRow'
import { ScrollView, TextInput } from 'react-native-gesture-handler'

import LinearGradient from 'react-native-linear-gradient'
import { Select, SelectItem } from '@ui-kitten/components'
import Dropdown from '@/Components/Dropdown'
import StakingInput from './StakingInput'
import ModalDropdown from 'react-native-modal-dropdown'
import { useRef } from 'react'

import Web3Chains from '@/Chains/Web3'
import { useSelector } from 'react-redux'
import { Card } from '@ui-kitten/components';
import MyInvestments from "./MyInvestments"
import { getStakingContract } from '@/Utils/Crypto/Transactions'
import { BigNumber } from '@ethersproject/bignumber'
import { Config } from '@/Config'
// import { RealmContext } from '@/DB'

// const { useRealm, useQuery, useObject } = RealmContext;


const StakingSelector = ({ onCoinSelected }) => {
  const dropRef = useRef()
  const [selectedChain, setSelectedChain] = useState()
  const stakingCoins = useSelector(state => state.staking.data)

  useEffect(() => {
    setSelectedChain(stakingCoins[0])
    onCoinSelected(stakingCoins[0].id)
  }, [])

  useEffect(() => {
  }, [selectedChain])


  const renderButtonText = rowData => {
    const { name, age } = rowData
    return `${name} - ${age}`
  }

  const _dropdown_2_renderRow = rowData => {
    return (
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => {
          setSelectedChain(rowData)
          dropRef.current.hide()
        }}>
        <View style={[{
          flexDirection: 'row',
          // height: 40,
          alignItems: 'center',
        }]}>
          <Image
            style={{
              marginLeft: 5,
              //   marginRight:5,
              width: 30,
              borderRadius: 50,
              height: 30,
            }}
            mode="stretch"
            source={rowData.logo}
          />

          <AtomindText
            style={{ fontWeight: '600', marginHorizontal: 5 }}
          >{`${rowData.name}`}</AtomindText>
        </View>
      </TouchableOpacity>
    )
  }

  function _dropdown_4_onSelect(idx, value) {
    // BUG: alert in a modal will auto dismiss and causes crash after reload and touch. @sohobloo 2016-12-1
    //alert(`idx=${idx}, value='${value}'`);
  }
  function _dropdown_2_renderSeparator(rowID) {
    if (rowID == Web3Chains.length) return null
    let key = `spr_${rowID}`
    return <View style={{
      height: 0.2,
      backgroundColor: 'gray',
    }} key={key} />
  }

  if (!selectedChain) {
    return <></>
  }

  return <ModalDropdown
    ref={dropRef}
    defaultValue={''}
    textStyle={{
      // marginVertical: 10,
      // marginHorizontal: 6,
      fontSize: 18,
      color: 'white',
      textAlign: 'center',
      textAlignVertical: 'center',
    }}
    options={stakingCoins}
    onSelect={(idx, value) => _dropdown_4_onSelect(idx, value)}
    renderButtonText={rowData => renderButtonText(rowData)}
    renderRow={_dropdown_2_renderRow.bind(this)}
    renderSeparator={(sectionID, rowID, adjacentRowHighlighted) =>
      _dropdown_2_renderSeparator(
        sectionID,
        rowID,
        adjacentRowHighlighted,
      )
    }
  >
    <TouchableOpacity
      style={{
        backgroundColor: "#fff",
        alignContent: "center", alignItems: "center"
      }}
      onPress={() => {
        dropRef.current.show()
      }}
    >

      <AtomindText
        style={{
          textAlign: 'center',
          fontSize: 17,
          fontWeight: '900',
          alignSelf: 'center',
          // flex:1
        }}
        category="h5"
      >
        Select Coin
      </AtomindText>
      <View style={[{
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
      }]}>
        <Image
          style={{
            marginLeft: 5,
            //   marginRight:5,
            width: 30,
            borderRadius: 50,
            height: 30,
          }}
          mode="stretch"
          source={selectedChain.stakingToken.image}
        />

        <AtomindText
          style={{ fontWeight: '600', marginHorizontal: 5 }}
        >{`${selectedChain.stakingToken.name}`}</AtomindText>


      </View>
    </TouchableOpacity>
  </ModalDropdown>

}



const StakeFragment = () => {
  const [loading, setLoading] = useState(false)
  const [selectedCoinId, setSelectedCoinId] = useState()
  const stakingCoins = useSelector(state => state.staking.data)
  const user = useSelector(state => state.user.data)
  const [inputAmount, setInputAmount] = useState(0)
  const [investments, setInvestments] = useState([])
  const [selectedCoin, setSelectedCoin] = useState();

  useEffect(() => {
    if (Array.isArray(stakingCoins) && selectedCoinId) {
      const item = stakingCoins.find((coin) => coin.id === selectedCoinId)
      setSelectedCoin(item)
      if (item && item.userData) {
        setInvestments(item.userData.investments)
      }
    }
  }, [selectedCoinId, stakingCoins])



  // const realm = useRealm();
  // const handleAddTransaction = useCallback(
  //   (data) => {

  //     realm.write(() => {
  //       realm.create('Transaction', data);
  //     });
  //   },
  //   [realm],
  // );


  const handleDeposit = async () => {
    if (Number(inputAmount) == 0 || Number(inputAmount) < 0) {

      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: "Please Enter A Valid Amount",
      })
      return
    }


    if (Number(inputAmount) > Number(selectedCoin.stakingToken.balance)) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: "Insufficient Balance",
      })
      return
    }

    setLoading(true)

    try {
      // const { contract, signer, provider } = await getStakingContract(selectedCoin, user.wallet.privateKey)
      // const referrerAddress = user.referrerAddress?user.referrerAddress:Config.DEFAULT_REFERRER
      // const finAmount = Number(inputAmount) * (10 ** selectedCoin.stakingToken.decimals)
      // const options = { value: finAmount.toString() }
      // const functionGasFees = await contract.estimateGas.deposit(referrerAddress,options);
      // const gasPrice = await provider.getGasPrice();
      // const finalGasPrice = (gasPrice.mul(functionGasFees)).add(BigNumber.from(finAmount.toString()));
      // const myBalance = await signer.getBalance()
      // if (myBalance.lt(finalGasPrice)) {
      //   Toast.show({
      //     type: 'error',
      //     text1: 'Error',
      //     text2: "Insuffient Balance To Pay Gas Fee",
      //   })
      //   return
      // }
      // const tx = await contract.deposit(referrerAddress, options);


      const txnPayload = {
        hash: "tx.transactionHash",
        timestamp: Date.now(),
        title: "Stake",
        chainId: selectedCoin.chainID
      }
      // await addData("Transaction",txnPayload);
      // await handleAddTransaction(txnPayload)
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: "Transaction Submitted To Blockchain",
      })

      setInputAmount(0)


    } catch (err) {
      console.log({ err })
    }
    setLoading(false)
  }


  const handleApprove = async () => {
    setLoading(true)
    try {

    } catch (err) { }
    setLoading(false)

  }


  const requiresApproval = () => {
    if (selectedCoin.stakingToken.address === "0x0000000000000000000000000000000000000000") {
      return false
    } else if (selectedCoin.stakingToken.allowance > 0) {
      return false

    }
    return true
  }

  const handleOnClick = async () => {
    if (requiresApproval()) {
      await handleApprove()
    } else {
      await handleDeposit()
    }
  }




  return (
    <View
      style={{
        backgroundColor: '#F5F5F5',
        flex: 1,
      }}
    >

      <AtomindText
        style={{
          textAlign: 'center',
          fontSize: 18,
          fontWeight: '500',
          alignSelf: 'center',
          padding: 15,
          // flex:1
        }}
        category="h5"
      >
        Stake
      </AtomindText>

      <View style={{

        // paddingHorizontal: 25,
        marginHorizontal: 10,
        // flex: 1,
        borderRadius: 20,

      }}>
        <View>


          <ScrollView>


            <Card style={{

              paddingVertical: 25,
              marginHorizontal: 10,
              // flex: 1,
              borderRadius: 20,

            }}>
              <StakingSelector onCoinSelected={(id) => {
                setSelectedCoinId(id)
              }} />

              {selectedCoin ? <View>


                <View>



                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <AtomindText style={{ fontWeight: '400' }}>Amount</AtomindText>

                    <AtomindText style={{ fontWeight: '400' }}>
                      Balance: {selectedCoin.stakingToken.balance}  {selectedCoin.stakingToken.name}
                    </AtomindText>
                  </View>

                  <View style={{ padding: 2 }}>
                    <StakingInput
                      value={inputAmount}
                      setInputAmount={(t) => { setInputAmount(t) }} />
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 10,
                      marginHorizontal: 30,
                      justifyContent: 'space-between',
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        const calculatedAmount = (selectedCoin.stakingToken.balance) * 25 / 100
                        setInputAmount(calculatedAmount.toString())
                      }}
                      style={{
                        backgroundColor: '#F5F5F5',
                        borderRadius: 8,
                        padding: 8,
                      }}
                    >
                      <AtomindText style={{ fontSize: 16, color: '#000' }}>
                        25%
                      </AtomindText>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                      const calculatedAmount = (selectedCoin.stakingToken.balance) * 50 / 100
                      setInputAmount(calculatedAmount.toString())
                    }}
                      style={{
                        backgroundColor: '#F5F5F5',
                        borderRadius: 8,
                        padding: 8,
                      }}
                    >
                      <AtomindText style={{ fontSize: 16, color: '#000' }}>
                        50%
                      </AtomindText>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => {
                        const calculatedAmount = (selectedCoin.stakingToken.balance) * 75 / 100
                        setInputAmount(calculatedAmount.toString())
                      }}
                      style={{
                        backgroundColor: '#F5F5F5',
                        borderRadius: 8,
                        padding: 8,
                      }}
                    >
                      <AtomindText style={{ fontSize: 16, color: '#000' }}>
                        75%
                      </AtomindText>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => {
                        const calculatedAmount = selectedCoin.stakingToken.balance
                        setInputAmount(calculatedAmount.toString())
                      }}
                      style={{
                        backgroundColor: '#F5F5F5',
                        borderRadius: 8,
                        padding: 8,
                      }}
                    >
                      <AtomindText style={{ fontSize: 16, color: '#000' }}>
                        100%
                      </AtomindText>
                    </TouchableOpacity>
                  </View>


                  <View
                    style={{
                      // backgroundColor: '#fff',
                      // padding: 5,
                      marginTop: 10,
                      flexDirection: 'row',
                      flex: 1,
                      borderRadius: 10,
                    }}
                  >
                    <View style={{ flex: 1, margin: 2 }}>
                      <AtomindButton text={requiresApproval() ? "Approve Contract" : "Deposit"} isLoading={loading} onPress={() => {
                        handleOnClick()
                      }} />
                    </View>
                    {/* <View style={{ flex: 1, margin: 2 }}>
                      <AtomindButton text="Withdraw" />
                    </View> */}



                  </View>



                  <AtomindText style={{
                    fontSize: 25,
                    fontWeight: "800",
                    textAlign: 'center',
                  }}>
                    1.5% Daily return
                  </AtomindText>



                  <StakingCarousel />
                  {/* <AtomindButton text="Deposit" /> */}


                  <View style={{ marginBottom: 10, padding: 8, borderRadius: 10, backgroundColor: "#F4EFFF", flexDirection: "row", paddingHorizontal: 15, marginTop: 10, justifyContent: "space-between" }}>

                    <View
                      style={{
                        // flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}
                    >
                      <View
                        style={{

                        }}
                      >
                        <AtomindText style={{
                          fontWeight: '700',
                          fontSize: 12, color: "#000"
                        }}>
                          Total Invested
                        </AtomindText>

                        <AtomindText style={{ fontWeight: '500', fontSize: 15 }}>
                          {selectedCoin.tvl} {selectedCoin.stakingToken.name}
                        </AtomindText>
                      </View>

                      <View
                        style={{


                        }}
                      >
                        <AtomindText style={{
                          fontWeight: '700',
                          fontSize: 12, color: "#000"
                        }}>
                          Instant Referral Comission
                        </AtomindText>

                        <AtomindText style={{ fontWeight: '500', fontSize: 15 }}>
                          {selectedCoin.userData.totalJoiningComissionEarnt} {selectedCoin.stakingToken.name}
                        </AtomindText>
                      </View>
                    </View>
                    <View
                      style={{
                        // flexDirection: 'row',

                        justifyContent: 'space-between',
                      }}
                    >
                      <View
                        style={{

                        }}
                      >
                        <AtomindText style={{
                          fontWeight: '700',
                          fontSize: 12, color: "#000"
                        }}>
                          Pending Reward
                        </AtomindText>

                        <AtomindText style={{ fontWeight: '500', fontSize: 15 }}>
                          0 {selectedCoin.stakingToken.name}
                        </AtomindText>
                      </View>

                      <View
                        style={{



                        }}
                      >
                        <AtomindText style={{
                          fontWeight: '700',
                          fontSize: 12, color: "#000"
                        }}>
                          Total Referrers
                        </AtomindText>

                        <AtomindText style={{ fontWeight: '500', fontSize: 15 }}>
                          {selectedCoin.userData.totalReferrers}
                        </AtomindText>
                      </View>
                    </View>
                  </View>



                </View>


                <MyInvestments investments={investments} selectedCoin={selectedCoin} />

              </View> : null}
            </Card>



          </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default StakeFragment
