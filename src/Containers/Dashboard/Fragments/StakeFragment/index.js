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
import { TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../Components/Header'
import { AtomindButton, AtomindText, SearchBox } from '@/Components'
import { useState } from 'react'
import { getSearchResults } from '@/Utils/Coingecko'
import { useEffect } from 'react'
import OneTokenSearchRow from '@/Components/OneTokenSearchRow'
import { ScrollView, TextInput } from 'react-native-gesture-handler'

import LinearGradient from 'react-native-linear-gradient'
import { Select, SelectItem } from '@ui-kitten/components'
import Dropdown from '@/Components/Dropdown'
import StakingInput from './StakingInput'

const StakeFragment = () => {
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
        <AtomindText
          style={{
            textAlign: 'center',
            fontSize: 18,
            fontWeight: '500',
            alignSelf: 'center',
            padding: 15,
            // flex:1
          }}
          category="h5"
        >
          Stake
        </AtomindText>

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
          <StakingInput />

          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              marginHorizontal: 30,
              justifyContent: 'space-between',
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                borderRadius: 8,
                padding: 8,
              }}
            >
              <AtomindText style={{ fontSize: 16, color: '#000' }}>
                25%
              </AtomindText>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                borderRadius: 8,
                padding: 8,
              }}
            >
              <AtomindText style={{ fontSize: 16, color: '#000' }}>
                50%
              </AtomindText>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                borderRadius: 8,
                padding: 8,
              }}
            >
              <AtomindText style={{ fontSize: 16, color: '#000' }}>
                75%
              </AtomindText>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                borderRadius: 8,
                padding: 8,
              }}
            >
              <AtomindText style={{ fontSize: 16, color: '#000' }}>
                100%
              </AtomindText>
            </TouchableOpacity>
          </View>

          <AtomindText style={{ textAlign: 'center', marginTop: 25 }}>
            Powered By state of The Art AI Trading Bot
          </AtomindText>

          

          <AtomindText style={{
            fontSize: 25,
            fontWeight:"800",
            textAlign: 'center',
            marginTop: 10
          }}>
           1.5% Daily return
          </AtomindText>
          <AtomindButton text="Deposit" />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <View
              style={{
                // backgroundColor: '#fff',
                // padding: 5,
                flexDirection: 'row',
                flex: 1,
                borderRadius: 10,
              }}
            >
              <View style={{ flex: 1, margin: 5 }}>
                <AtomindButton text="Withdraw" />
              </View>
              <View style={{ flex: 1, margin: 5 }}>
                <AtomindButton text="Harvest Reward" />
              </View>
            </View>
          </View>
    
          
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                backgroundColor: '#fff', padding: 8,
                margin:2,
                borderRadius: 10,
                flex: 1
              }}
            >
              <AtomindText style={{ fontWeight: '600', fontSize: 20 ,color:"#717171"}}>
              Total Invested
              </AtomindText>

              <AtomindText style={{ fontWeight: '500', fontSize: 15 }}>
                0 BNB
              </AtomindText>
            </View>

            <View
              style={{
                margin:2,

                backgroundColor: '#fff', padding: 8,
                borderRadius: 10, flex: 1
              }}
            >
              <AtomindText style={{ fontWeight: '600', fontSize: 20,color:"#717171" }}>
              Referral Reward
              </AtomindText>

              <AtomindText style={{ fontWeight: '500', fontSize: 15 }}>
                10
              </AtomindText>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                backgroundColor: '#fff', padding: 8,
                margin:2,
                borderRadius: 10,
                flex: 1
              }}
            >
              <AtomindText style={{ fontWeight: '600', fontSize: 20 ,}}>
                Pending Reward
              </AtomindText>

              <AtomindText style={{ fontWeight: '500', fontSize: 15 }}>
                0 BNB
              </AtomindText>
            </View>

            <View
              style={{
                margin:2,

                backgroundColor: '#fff', padding: 8,
                borderRadius: 10, flex: 1
              }}
            >
              <AtomindText style={{ fontWeight: '600', fontSize: 20 }}>
                Total Referrers 
              </AtomindText>

              <AtomindText style={{ fontWeight: '500', fontSize: 15 }}>
                10
              </AtomindText>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default StakeFragment
