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
import { SearchBox } from '@/Components'
import { useState } from 'react'
import { getSearchResults } from '@/Utils/Coingecko'
import { useEffect } from 'react'
import OneTokenSearchRow from '@/Components/OneTokenSearchRow'
import { ScrollView } from 'react-native-gesture-handler'

const AssetTracker = () => {
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(false)
  // const coins
  useEffect(() => {}, [])
  const makeSearch = async query => {
    if (query === '') {
      setLoading(false)
      setSearchResults([])
      return
    }
    setLoading(true)

    const { coins } = await getSearchResults(query)
    const finalResult = []

    for (let coin of coins) {
      // {
      //   id: 'bitcoin',
      //   symbol: 'btc',
      //   name: 'Bitcoin',
      //   image:
      //     'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
      //   supported: false,
      // },
      const obj = {
        id: coin.id,
        name: coin.name,
        symbol: coin.symbol,
        image: coin.large,
      }

      finalResult.push(obj)
    }
    setSearchResults(finalResult)
    setLoading(false)
  }

  return (
    <View>
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

        <SearchBox
          onSearchQuery={query => {
            makeSearch(query)
          }}
        />

        <View style={loading ? { alignItems: 'center' } : {}}>
          {loading ? (
            <View
              style={{
                marginTop: 25,
              }}
            >
              <Spinner size="giant" />
            </View>
          ) : (
            <ScrollView>
              {searchResults.map(coin => {
                return (
                  <OneTokenSearchRow
                    coin={coin}
                    key={coin.id}
                    onChecked={(isChecked, id) => {}}
                  />
                )
              })}
            </ScrollView>
          )}
        </View>
      </View>
    </View>
  )
}

export default AssetTracker
