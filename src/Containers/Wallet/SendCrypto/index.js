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
import { AtomindButton, AtomindText, BackButton, SearchBox } from '@/Components'
import { useState } from 'react'
import { getSearchResults } from '@/Utils/Coingecko'
import { useEffect } from 'react'
import OneTokenSearchRow from '@/Components/OneTokenSearchRow'
import { ScrollView, TextInput } from 'react-native-gesture-handler'

import LinearGradient from 'react-native-linear-gradient'
import { Select, SelectItem } from '@ui-kitten/components'
import Dropdown from '@/Components/Dropdown'
import CurrencyInput from './CurrencyInput'
import AddressInput from './AddressInput'
import QRScanner from '@/Containers/QRScanner'


const ExchangeFragment = ({ route, navigation }) => {
  const [scannerVisible, setScannerVisible] = useState(false)
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
          {route ? (
            <View>
              <BackButton
                onPress={() => {
                  if (navigation) {
                    navigation.goBack()
                  }
                }}
              />
            </View>
          ) : null}
          <AtomindText
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: '500',
              flex: 1,
              justifyContent: 'center',
              alignSelf: 'center',
              padding: 15,
              // flex:1
            }}
            category="h5"
          >
            Send
          </AtomindText>

          {route ? <View style={{ flex: 1 }} /> : null}
        </View>

        <View
          style={{
            // flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 30,
            marginBottom: 10,
          }}
        >
          <AtomindText
            style={{
              fontWeight: '400',
              marginBottom: 5,
              fontSize: 16,
              color: '#717171',
            }}
          >
            Receiver Address
          </AtomindText>
          <AddressInput onQRClick={() => { 

            setScannerVisible(true)
          }} />
        </View>

        <View>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <AtomindText
                style={{
                  fontWeight: '400',
                  marginBottom: 5,
                  fontSize: 16,
                  color: '#717171',
                }}
              >
                Your Balance 0.04 BNB
              </AtomindText>
            </View>
            <CurrencyInput />
          </View>
        </View>

        {/* {scannerVisible?<QRScanner modalVisible={true} setModalVisible={(p) => {
          setScannerVisible(p)
        }}  />:null } */}
        <AtomindButton text="Send" />
      </View>
    </View>
  )
}

export default ExchangeFragment
