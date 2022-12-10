import React from 'react'
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Spinner,
  Tab,
  Text,
} from '@ui-kitten/components'
import { Icon } from 'react-native-eva-icons'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../Components/Header'
import { AtomindText, SearchBox } from '@/Components'
import { useState } from 'react'
import { getSearchResults } from '@/Utils/Coingecko'
import { useEffect } from 'react'
import OneTokenSearchRow from '@/Components/OneTokenSearchRow'
import { ScrollView } from 'react-native-gesture-handler'
import WalletCard from '../../Components/WalletCard'
import { useSelector } from 'react-redux'
import AtomindShimmer from '@/Components/AtomindShimmer'

const WalletFragment = ({ navigation }) => {
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(false)
  const coins = useSelector(state => state.coins.data)
  const [currency,setCurrency] =useState([])
  const isLoadingCoinData = useSelector(state => state.coins.isLoading)
  const user = useSelector(state=>state.user.data)
useEffect(()=>{
  if(currency){
    const ids = []
    for(let ff of currency){
      ids.push(ff.coingeckoId)
    }
  }
},[currency])
  useEffect(()=>{
    let allTokens = []
    if(coins){
      for(let coin of coins){
        const obj = {
          ...coin,
          isCoin:true
        }
        allTokens.push(obj)
      }
    }


    if(user && user.portfolio){

      for(let chain of Object.values(user.portfolio)){
          allTokens = [...allTokens, ...chain.tokenBalances]
      }
          
    }

    setCurrency(allTokens)
  },[user,coins])


  // const makeSearch = async query => {
  //   if (query === '') {
  //     setLoading(false)
  //     setSearchResults([])
  //     return
  //   }
  //   setLoading(true)

  //   const { coins } = await getSearchResults(query)
  //   const finalResult = []

  //   for (let coin of coins) {
  //     // {
  //     //   id: 'bitcoin',
  //     //   symbol: 'btc',
  //     //   name: 'Bitcoin',
  //     //   image:
  //     //     'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
  //     //   supported: false,
  //     // },
  //     const obj = {
  //       id: coin.id,
  //       name: coin.name,
  //       symbol: coin.symbol,
  //       image: coin.large,
  //     }

  //     finalResult.push(obj)
  //   }
  //   setSearchResults(finalResult)
  //   setLoading(false)
  // }


  const goToMarketScreen = (coin) => {
    navigation.navigate("Market",coin)
  }
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      <View
        style={
          {
            // backgroundColor: theme['color-primary-500'],
            // marginTop: 25,
            // padding: 15,
            // minHeight: 50,
          }
        }
      >
        <View
          style={{
            // backgroundColor: theme['color-primary-500'],
            // marginTop: 25,
            marginTop: 30,
            padding: 15,
            flex: 1,
          }}
        >
          <AtomindText
            style={{ fontSize: 20, textAlign: 'center', fontWeight: '500' }}
          >
            Wallet
          </AtomindText>

          <WalletCard navigation={navigation} hideAvatar />
        </View>

        <View style={{ paddingHorizontal: 25 }}>
          {loading ? (
            <View
              style={{
                marginTop: 25,
              }}
            >
              <Spinner size="giant" />
            </View>
          ) : (
            <View>
              <AtomindText style={{ fontSize: 20, fontWeight: '500' }}>
               Your Portfolio
              </AtomindText>

              <AtomindShimmer
                style={{
                  
                  flex: 1,
                  width: '100%',
                }}
                visible={!isLoadingCoinData}
              >
                <ScrollView>
                  {currency.map(coin => {
                    return (
                      <OneTokenSearchRow
                        coin={coin}
                        key={coin.coingeckoId}
                        onClick={() => {
                          goToMarketScreen(coin)
                        }}
                      />
                    )
                  })}
                </ScrollView>
              </AtomindShimmer>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  )
}

export default WalletFragment
