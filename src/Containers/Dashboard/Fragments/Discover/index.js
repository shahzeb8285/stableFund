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

const DiscoverScreen = () => {
  return (
    <Layout style={{ height: '100%' }}>

<LottieView
        source={require('../../../../Assets/Lottie/comingSoon.json')}
      
        autoPlay
        loop
      />
     
    </Layout>
  )
}

export default DiscoverScreen
