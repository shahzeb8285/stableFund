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
import PlusIcon from '@/Assets/SVG/PlusIcon'
import { AtomindText } from '@/Components'

const NoWallet = ({onPress}) => {
  const theme = useTheme()


  return (
    <TouchableOpacity
     onPress={onPress}
      style={{
        backgroundColor: '#E8EEF2',
        marginTop: 25,
        padding: 25,
        borderRadius: 20,
        minHeight: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <PlusIcon style={{ marginVertical: 10 }} />
      <AtomindText
        style={{
          fontWeight: '400',
          fontSize: 16,
          color: theme['color-primary-600'],
        }}
      >
        No Wallet Added.
      </AtomindText>
      <AtomindText
        style={{
          fontWeight: '400',
          fontSize: 16,
          color: theme['color-primary-600'],
        }}
      >
        Presss "+" to add a wallet.
      </AtomindText>
    </TouchableOpacity>
  )
}

export default NoWallet
