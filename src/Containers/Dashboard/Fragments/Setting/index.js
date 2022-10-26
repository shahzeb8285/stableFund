import React from 'react'
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Tab,
  Text,
} from '@ui-kitten/components'
import { Icon } from 'react-native-eva-icons'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AtomindText, MenuItem } from '@/Components'
import SecurityIcon from '@/Assets/SVG/SecurityIcon'
import LanguageIcon from '@/Assets/SVG/LanguageIcon'
import CurrencyIcon from '@/Assets/SVG/CurrencyIcon'
import FAQIcon from '@/Assets/SVG/FaqIcon'
import LogoutIcon from '@/Assets/SVG/LogoutIcon'


const SettingScreen = () => {
  return (
    <SafeAreaView style={{ paddingHorizontal: 25 }}>
      <AtomindText
        style={{
          marginTop: 20,
          fontWeight: '700',
          // textAlign: 'center',
          color: '#000',

          fontSize: 28,
        }}
      >
        Settings
      </AtomindText>

      <AtomindText
        style={{
          marginTop: 20,
          fontWeight: '500',
          // textAlign: 'center',
          color: '#666666',

          fontSize: 16,
        }}
      >
        General
      </AtomindText>

      <MenuItem text={'Security'} leftIcon={<SecurityIcon fill="#474ca8" />} />

      <MenuItem
        text={'Language'}
        leftIcon={<LanguageIcon fill="#474ca8" />}
        rightIcon={
          <AtomindText style={{ fontWeight: '500', fontSize: 16 }}>
            ENG
          </AtomindText>
        }
      />

      <MenuItem
        text={'Currency'}
        leftIcon={<CurrencyIcon fill="#474ca8" />}
        rightIcon={
          <AtomindText style={{ fontWeight: '500', fontSize: 16 }}>
            USD
          </AtomindText>
        }
      />

      <MenuItem text={'FAQ & Support'} leftIcon={<FAQIcon fill="#474ca8" />} />

      <MenuItem text={'Log Out'} leftIcon={<LogoutIcon fill="#474ca8" />} />
    </SafeAreaView>
  )
}

export default SettingScreen
