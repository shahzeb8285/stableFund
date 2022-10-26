import React from 'react'
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Tab,
  Text,
  Button,
  useTheme,
} from '@ui-kitten/components'

import Clipboard from '@react-native-clipboard/clipboard'

import Tags from 'react-native-tags'
import { Icon } from 'react-native-eva-icons'
import { View, Image, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import Toast from 'react-native-toast-message'

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import {
  AtomindText,
  BackButton,
  BaseScreen,
  SeedPhraseViewer,
} from '@/Components'
import { useEffect } from 'react'
import { CreateNewWallet, RestoreWallet } from '@/Utils/Crypto'
import QRCode from 'react-native-qrcode-svg'
import Logo from '@/Assets/Images/logo.png'
import LinearGradient from 'react-native-linear-gradient'

const ReceiveCrypto = ({ route, navigation }) => {
  const theme = useTheme()
  const [enteredSeeds, setEnteredSeeds] = useState([])
  let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..'
  const [account, setAccount] = useState(
    '0x2b3a6c089311b478bf629c29d790a7a6db3fc1b9',
  )
  const copyToClipboard = () => {
    console.log('Saasa')
    Clipboard.setString(account)
    Toast.show({
      type: 'success',
      text1: 'Copied',
      text2: 'Wallet Address Copied',
    })
  }
  useEffect(() => {
    // const obj = CreateNewWallet()
    // {"address": "0x575ED829B43802B3298E2b3565Ce5C762f4F7715", "mnemonic": ["bitter", "fatal", "omit", "food", "fox", "swift", "action", "autumn", "scatter", "able", "proof", "deal"], "privateKey": "0xb00dfce6c39304c32c166147fb9d7a8dd926cb51abb7fa438928cdf019dfd0e7"}
    // bitter fatal omit food fox swift action autumn scatter able proof deal
  }, [])

  return (
    <BaseScreen>
      <View style={{ flexDirection: 'row' }}>
        <BackButton
          style={{}}
          onPress={() => {
            navigation.goBack()
          }}
        />

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
          Receive
        </AtomindText>

        <View style={{ flex: 1 }} />
      </View>

      <View
        style={{
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 25,
        }}
      >
        <QRCode
          size={200}
          value={account}
          logo={Logo}
          // logoSize={80}
          style={{ height: 500, width: 800 }}
          logoBackgroundColor="transparent"
        />

        <AtomindText
          style={{
            marginTop: 50,
            fontWeight: '500',
          }}
        >
          {account}
        </AtomindText>

        <TouchableOpacity style={{ marginTop: 10 }} onPress={copyToClipboard}>
          <LinearGradient
            colors={['#6B56DF', '#BA4BFB']}
            style={{
              padding: 10,
              borderRadius: 10,
              paddingVertical: 10,
            }}
          >
            <AtomindText
              style={{ fontSize: 15, fontWeight: '500', color: '#fff' }}
            >
              Copy Address
            </AtomindText>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </BaseScreen>

    // dove secter identify storng wrestl stem rigid detect exclude hill pharase letf
  )
}

export default ReceiveCrypto
