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
import LottieView from 'lottie-react-native';
import { AtomindText } from '@/Components'

const NFTFragment = () => {
  return (
    <Layout style={{ height: '100%' }}>
       <AtomindText>
        NFTS
       </AtomindText>

     
    </Layout>
  )
}

export default NFTFragment
