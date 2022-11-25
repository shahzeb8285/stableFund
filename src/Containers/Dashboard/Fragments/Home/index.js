import React from 'react'
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  useTheme,
  Text,
  ViewPager,
} from '@ui-kitten/components'
import { Icon } from 'react-native-eva-icons'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LottieView from 'lottie-react-native'
import Header from '../../Components/Header'
import MyBalance from '../../Components/MyBalance'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import CryptosFragment from './Fragment/TokensFragment'
import { useEffect } from 'react'
import { useState } from 'react'
import NFTFragment from './Fragment/NFTs'
import AlternativesFragment from './Fragment/Alternatives'
import NoWallet from '../../Components/NoWallet'
import { AtomindText,CopyReferralLink } from '@/Components'
import { OneTokenRow } from '@/Components'
import { useSelector, useDispatch } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'
import CarouselCards from './HomeCarousel'
import WalletCard from '../../Components/WalletCard'

const Tab = ({ text, isActive, onClick }) => {
  const theme = useTheme()

  return (
    <TouchableOpacity
      style={{
        padding: 10,
        borderColor: theme['color-primary-500'],
        width: '100%',
        alignSelf: 'center',
        alignContent: 'center',
        // alignSelf:'baseline'
        // marginHorizontal: 25,
      }}
      onPress={() => {
        onClick()
      }}
    >
      <AtomindText
        style={{
          fontWeight: '500',
          textAlign: 'center',
          color: isActive ? theme['color-primary-500'] : '#00000099',
          fontSize: 16,
        }}
      >
        {text}
      </AtomindText>

      <View
        style={{
          height: 5,
          alignContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: 5,
          width: 5,
          borderRadius: 100,
          opacity: isActive ? 1 : 0,
          backgroundColor: theme['color-primary-500'],
        }}
      />
    </TouchableOpacity>
  )
}

const HomeFragment = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const theme = useTheme()
  const [isWallet, setWallet] = useState(true)
  const coins = useSelector(state => state.coins.data)


  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      <View
        style={{
          // backgroundColor: theme['color-primary-500'],
          // marginTop: 25,
          padding: 15,
          flex:1,

        }}
      >
      <WalletCard navigation={navigation}/>
      </View>

      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <AtomindText style={{ fontSize: 25, fontWeight: '700' }}>
            My Wallet
          </AtomindText>

          <TouchableOpacity>
            <AtomindText
              style={{ fontSize: 15, fontWeight: '200', color: '#717171' }}
            >
              See All
            </AtomindText>
          </TouchableOpacity>
        </View>

        <View style={{paddingVertical:10}}>
        <CarouselCards/>

        <CopyReferralLink/>
       </View>
      </View>
    </ScrollView>
  )
}

export default HomeFragment
