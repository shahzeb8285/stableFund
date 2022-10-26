import React from 'react'
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Tab,
  Text,
  List,
} from '@ui-kitten/components'
import { Icon } from 'react-native-eva-icons'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LottieView from 'lottie-react-native'
import { OneTokenRow } from '@/Components'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const TokensFragment = () => {
  const coins = useSelector(state => state.coins.data)
  const isCoinLoading = useSelector(state => state.coins.isLoading)
  const supportedCryptos = coins.filter((coin) => coin.supported)

 

  const renderItem = ({ item }) => <OneTokenRow coin={item} key={item.id}  isCoinLoading={isCoinLoading}/>

  return (
    <View style={{marginHorizontal:15}}>
    

        {supportedCryptos.map(coin => {
          return renderItem({ item: coin })
        })}
    </View>
  )
}

export default TokensFragment
