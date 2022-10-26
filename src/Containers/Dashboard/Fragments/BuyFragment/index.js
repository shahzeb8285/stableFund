import React from 'react'
import {
  BottomNavigation,
  BottomNavigationTab,
  Divider,
  Layout,
  Spinner,
  Tab,
  Text,
} from '@ui-kitten/components'
import { Icon } from 'react-native-eva-icons'
import { TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../Components/Header'
import { AtomindButton, AtomindText, BackButton, SearchBox } from '@/Components'
import { useState } from 'react'
import { getSearchResults } from '@/Utils/Coingecko'
import { useEffect } from 'react'
import OneTokenSearchRow from '@/Components/OneTokenSearchRow'
import { ScrollView, TextInput } from 'react-native-gesture-handler'

import LinearGradient from 'react-native-linear-gradient'
import { Select, SelectItem } from '@ui-kitten/components'
import Dropdown from '@/Components/Dropdown'
import ExchangeInput from './ExchangeInput'

const BuySummery = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <View>
        <AtomindText style={{ color: '#000', fontWeight: '500' }}>
          You are paying
        </AtomindText>

        <AtomindText style={{ color: '#717171' }}>102 USD</AtomindText>
      </View>

      <View>
        <AtomindText style={{ color: '#000', fontWeight: '500' }}>
          You will receive
        </AtomindText>

        <AtomindText style={{ color: '#717171' }}>10 BNB</AtomindText>
      </View>
    </View>
  )
}
const BuyFragment = ({ route,navigation }) => {
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [balance, setBalance] = useState(0)

  const [selected, setSelected] = useState(undefined)

  const data = route

  return (
    <View
      style={{
        backgroundColor: '#F5F5F5',
        flex: 1,
      }}
    >
      <View
        style={{
          padding: 15,
          paddingHorizontal: 25,
          flex: 1,
          marginTop: 20,
        }}
      >
        <View style={{ flexDirection: 'row' }}>
         {route? <View>
            <BackButton onPress={() => {
              if (navigation) {
                navigation.goBack()
              }
            }} />
          </View>:null}
          <AtomindText
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: '500',
              flex: 1,
              justifyContent:"center",
              alignSelf: 'center',
              padding: 15,
              // flex:1
            }}
            category="h5"
          >
            Buy
          </AtomindText>

        {route?  <View style={{ flex: 1 }} />:null}
        </View>

        <View
          style={{
            // flexDirection: 'row',
            // justifyContent: 'space-between',
            marginTop: 30,
            marginBottom: 10,
          }}
        >
          <AtomindText style={{ fontWeight: '600' }}>
            Select Currency
          </AtomindText>
          <ExchangeInput />
        </View>

        <View
          style={{
            // flexDirection: 'row',
            // justifyContent: 'space-between',
            marginTop: 0,
            marginBottom: 10,
          }}
        >
          <AtomindText style={{ fontWeight: '600' }}>Select Coin</AtomindText>
          <ExchangeInput />
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 10,
              alignItems: 'center',
            }}
          >
            <View style={{ backgroundColor: '#E2E2E2', height: 2, flex: 1 }} />
            <AtomindText style={{ marginHorizontal: 10, color: 'gray' }}>
              Summary
            </AtomindText>
            <View style={{ backgroundColor: '#E2E2E2', height: 2, flex: 1 }} />
          </View>

          <BuySummery />

          <AtomindButton text="Buy" />
        </View>
      </View>
    </View>
  )
}

export default BuyFragment
