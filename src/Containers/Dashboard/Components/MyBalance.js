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

const PortfolioReporter = ({}) => {
  return (
    <View
      style={{
        alignSelf: 'baseline',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'green',
        padding: 5,
        marginVertical: 10,
        paddingHorizontal: 15,
      }}
    >
      <AtomindText style={{ fontSize: 16, fontWeight: '500', color: 'green' }}>
        $54990,00 (3,18)%
      </AtomindText>
    </View>
  )
}

const MyBalance = ({ hideAvatar }) => {
  const theme = useTheme()
  const [hideBalance, setBalanceHide] = useState(true)
  const [balance, setBalance] = useState(100)
  const navigation = useNavigation()

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
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flex: 1, marginLeft: 5 }}>
          <AtomindButton text="Send"    onPress={() => {
              navigation.navigate('SendCrypto')
            }}/>
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
