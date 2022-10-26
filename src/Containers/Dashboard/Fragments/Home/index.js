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
import { AtomindText } from '@/Components'
import { OneTokenRow } from '@/Components'
import { useSelector, useDispatch } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'

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
const NavigationBar = ({ activeTab, onTabClick }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
      }}
    >
      <View style={{ flex: 1 }}>
        <Tab
          text="Cryptos"
          isActive={activeTab == 0}
          onClick={() => {
            onTabClick(0)
          }}
        />
      </View>

      <View style={{ flex: 1 }}>
        <Tab
          text="NFT's"
          isActive={activeTab == 1}
          onClick={() => {
            onTabClick(1)
          }}
        />
      </View>

      <View style={{ flex: 1 }}>
        <Tab
          text="Alternatives"
          isActive={activeTab == 2}
          onClick={() => {
            onTabClick(2)
          }}
        />
      </View>
    </View>
  )
}
const HomeFragment = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const shouldLoadComponent = index => index === selectedIndex
  const theme = useTheme()
  const [isWallet, setWallet] = useState(true)
  const coins = useSelector(state => state.coins.data)

  const renderItem = ({ item }) => <OneTokenRow coin={item} />

  const renderFragment = () => {
    let fragment = null
    if (selectedIndex == 0) {
      fragment = <CryptosFragment />
    } else if (selectedIndex == 1) {
      fragment = <NFTFragment />
    } else if (selectedIndex == 2) {
      fragment = <AlternativesFragment />
    }

    return fragment
  }
  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          // backgroundColor: theme['color-primary-500'],
          // marginTop: 25,
          padding: 15,

          minHeight: 50,
        }}
      >
        <View style={{ marginTop: 50 }}>
          <Header />
        </View>
        {isWallet ? (
          <MyBalance />
        ) : (
          <NoWallet
            onPress={() => {
              navigation.navigate('CreateWalletScreen')
            }}
          />
        )}
      </View>

      <View style={{ opacity: isWallet ? 1 : 0.2 }}>
        <View style={{ marginHorizontal: 15 }}>
          <NavigationBar
            activeTab={selectedIndex}
            onTabClick={index => {
              setSelectedIndex(index)
            }}
          />
        </View>

        <View
          style={{
          
            marginTop: 15,
            paddingHorizontal: 15,
          }}
        >
          <ViewPager
            selectedIndex={selectedIndex}
            shouldLoadComponent={shouldLoadComponent}
          >
            <CryptosFragment />

            <NFTFragment />
            <AlternativesFragment />
          </ViewPager>


          

        </View>
      </View>
    </ScrollView>
  )
}

export default HomeFragment
