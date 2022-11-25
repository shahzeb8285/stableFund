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



const SwapPopup = () => {
  return <View style={{
    backgroundColor: "white",
    borderRadius: 10, padding: 10,
    alignContent: "center",
    alignItems:"center",
    textAlign:"center"
  }}>
    <AtomindText style={{ color:"#717171"}}>
      Bridge Fee: 0.002 ETH = $30

    </AtomindText>

    <AtomindText style={{ color:"#717171"}}>
    Source Price Impact: 0%
      
    </AtomindText >


    <AtomindText  style={{ color:"#717171"}}>
      Destination Price Impact: 0 %
      
    </AtomindText>
  </View>
}
const ExchangeFragment = ({route,navigation}) => {
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [balance, setBalance] = useState(0)

  const [selected, setSelected] = useState(undefined)
  const data = [
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
    { label: 'Four', value: '4' },
    { label: 'Five', value: '5' },
  ]

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
            Exchange
          </AtomindText>

        {route?  <View style={{ flex: 1 }} />:null}
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 30,
            marginBottom: 10,
          }}
        >
          <AtomindText style={{ fontWeight: '400' }}>Amount</AtomindText>

          <AtomindText style={{ fontWeight: '400' }}>
            Balance: {balance} BNB
          </AtomindText>
        </View>

        <View>
          <ExchangeInput />


          <AtomindText style={{
            textAlign: "center",
            fontSize: 25,
            marginVertical:10,
            fontWeight:"700"
          }}>
            To
          </AtomindText>

          <ExchangeInput />


          <View style={{
            flexDirection: "row", justifyContent: "center",
            marginTop:10,
            alignItems: "center"
          }}>
            <View style={{ backgroundColor:"#E2E2E2",height:2,flex:1}} />
            <AtomindText style={{marginHorizontal:10,color:"gray"}}>Summary</AtomindText>
            <View style={{ backgroundColor:"#E2E2E2",height:2,flex:1}} />


        </View>
        
         
          
          <SwapPopup/>

  
          <AtomindButton text="Swap" />
  
    
          
      
      
        </View>
      </View>
    </View>
  )
}

export default ExchangeFragment
