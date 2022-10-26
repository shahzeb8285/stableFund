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
import { View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { TouchableOpacity } from 'react-native-gesture-handler'
import { useState } from 'react'
import { AtomindText } from '@/Components'

const PortfolioReporter = props => {
  return (
    <View
      style={{
        alignSelf: 'baseline',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#D6F188',
        padding: 5,
        marginVertical: 10,
        paddingHorizontal: 15,
      }}
    >
      <AtomindText style={{ fontSize: 16, fontWeight: '500', color: '#D6F188' }}>
        $54990,00 (3,18)%
      </AtomindText>
    </View>
  )
}

const MyBalance = props => {
  const theme = useTheme()
  const [hideBalance, setBalanceHide] = useState(true)
  const [balance, setBalance] = useState(100)

  const getHiddenBalance = () => {
    let hiddenBalance = ''
    for (let i = 0; i < balance.toFixed(4).length; i++) {
      hiddenBalance += '*'
    }
    return hiddenBalance
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: theme['color-primary-500'],
        marginTop: 25,
        padding: 25,
        borderRadius: 20,
        minHeight: 50,
      }}
    >
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ marginLeft: 10, flex: 1, justifyContent: 'center' }}>
          <AtomindText
            style={{
              fontWeight: '400',
              fontSize: 16,
              color: '#FFFFFF99',
            }}
          >
            My Balance
          </AtomindText>
          <AtomindText
            style={{
              fontWeight: '700',
              fontSize: 26,
              color: '#FFFFFF',
            }}
          >
            {hideBalance ? getHiddenBalance() : `$${balance.toFixed(4)}`}
          </AtomindText>

          <PortfolioReporter />
        </View>

        <TouchableOpacity
          onPress={() => {
            setBalanceHide(!hideBalance)
          }}
          style={{
            // height:50,
            // width:50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#FFFFFF99',
            padding: 10,
            // height: 28,
            padding: 10,
          }}
        >
          <Image
            style={{
              height: 28,

              opacity: 0.7,
              alignContent: 'center',
              alignSelf: 'center',
              width: 28,
              borderRadius: 100,
            }}
            resizeMode="contain"
            source={require('../../../Assets/Icons/hide-eye.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MyBalance
