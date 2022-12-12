import React from 'react'
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Tab,
  Text,
  ViewPager,
  useTheme,
} from '@ui-kitten/components'
import { Icon } from 'react-native-eva-icons'
import { View, Image, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './Header'
import LinearGradient from 'react-native-linear-gradient'
import GradientImg from '@/Assets/Images/gradient.png'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useState } from 'react'
import { AtomindButton, AtomindText } from '@/Components'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import SettingIcon from "@/Assets/SVG/SettingIcon"
import HistoryIcon from "@/Assets/SVG/HistoryIcon"
import { navigate } from '@/Navigators/utils'



const PortfolioReporter = ({ }) => {

  const user = useSelector(state => state.user.data);
  const [percentChange, setPercentChange] = useState(0)
  const [amountChange, setAmountChange] = useState(0)

  useEffect(() => {
    try {
      if (user && user.portfolio) {


        // const netProfitOnNative =  Object.values(user.portfolio)
        // .map(item => {
        //   const prePrice = (item.nativeBalance.value.price * 100)/(100+item.nativeBalance.value.pricePercentChange1d)
        //  console.log("dsdsdssds",item.nativeBalance.name, {
        //   currentValue:item.nativeBalance.balance*item.nativeBalance.value.price ,
        //   lastValue:item.nativeBalance.balance*prePrice ,
        //   percentChange:item.nativeBalance.value.pricePercentChange1h,
        //   prePrice

        // })
        //   return {
        //     currentValue:item.nativeBalance.balance*item.nativeBalance.value.price ,
        //     lastValue:item.nativeBalance.balance*prePrice ,

        //   }
        // })

        // .reduce((prev, next) => prev + next) / Object.values(user.portfolio).length;

        const nativeChangePercent = Object.values(user.portfolio)
          .map(item => {
            return item.nativeBalance.value.pricePercentChange1d
          }).reduce((prev, next) => prev + next) / Object.values(user.portfolio).length;

        let allTokens = [];

        for (let chain of Object.values(user.portfolio)) {
          allTokens = [...allTokens, ...chain.tokenBalances]
        }

        let tokenChangePercent = 0;

        for (let token of allTokens) {
          tokenChangePercent += token.value.pricePercentChange1d
        }

        tokenChangePercent = tokenChangePercent / allTokens.length
        const totalChange = (tokenChangePercent + nativeChangePercent) / 2

        setPercentChange(totalChange)
        const totalValue = Object.values(user.portfolio).map(item => item.value.marketValue).reduce((prev, next) => prev + next);
        setAmountChange(totalValue * totalChange / 100)


      }

    } catch (err) {

    }

  }, [user])




  if (isNaN(amountChange)) {
    return null
  }


  return (


    <View
      style={{
        alignSelf: 'baseline',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: percentChange < 0 ? 'red' : 'green',
        padding: 5,
        marginVertical: 10,
        paddingHorizontal: 15,
      }}
    >
      <AtomindText style={{
        fontSize: 16, fontWeight: '500',
        color: percentChange < 0 ? 'red' : 'green'
      }}>
        ${amountChange.toFixed(2)} ({percentChange.toFixed(2)})%
      </AtomindText>
    </View>
  )
}

const MyBalance = ({ hideAvatar }) => {
  const theme = useTheme()
  const [hideBalance, setBalanceHide] = useState(true)
  const [balance, setBalance] = useState(0)
  const navigation = useNavigation()
  const user = useSelector(state => state.user.data);


  useEffect(() => {
    try {
      if (user && user.portfolio) {
        const totalValue = Object.values(user.portfolio).map(item => item.value.marketValue).reduce((prev, next) => prev + next);
        setBalance(totalValue)
      }
    } catch (err) { }
  }, [user])
  return (
    <ImageBackground
      resizeMode="stretch"
      source={GradientImg}
      style={{
        marginTop: 25,
        padding: 30,
        borderRadius: 30,
        minHeight: 50,
      }}
    >
      {hideAvatar ? null : <Header />}

      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View
          style={{
            marginLeft: 10,
            flex: 1,
            marginTop: 8,
            justifyContent: 'center',
          }}
        >
          <AtomindText
            style={{
              fontWeight: '600',
              fontSize: 25,
              color: '#000',
            }}
          >
            Total Assets
          </AtomindText>
          <AtomindText
            style={{
              fontWeight: '700',
              fontSize: 28,
              // color: '#FFFFFF',
              color: theme['color-primary-500'],
            }}
          >
            ${balance.toFixed(4)}
          </AtomindText>

          <PortfolioReporter />
        </View>


        <View>

          <TouchableOpacity

            onPress={() => {
              navigate('WalletHistory')

            }}
            style={{
              borderWidth: 1,
              borderColor: "#fff",
              borderRadius: 15,
              alignItems: 'center',
              textAlign: "center",
              justifyContent: 'center',
              flex: 1,

              marginTop:10,
              height: 50,
              width: 50,

            }}
          >
            <HistoryIcon fill="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flex: 1, marginLeft: 5 }}>
          <AtomindButton text="Send" onPress={() => {
            navigation.navigate('SendCrypto')
          }} />
        </View>

        <View style={{ flex: 1, marginLeft: 5 }}>
          <AtomindButton
            text="Receive"
            onPress={() => {
              navigation.navigate('ReceiveCrypto')
            }}
          />
        </View>
      </View>
    </ImageBackground>
  )
}

export default MyBalance
