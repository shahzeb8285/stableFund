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
  AtomindButton,
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
import { useSelector } from 'react-redux'

const ReceiveCrypto = ({ route, navigation }) => {
  const theme = useTheme()
  const [enteredSeeds, setEnteredSeeds] = useState([])
  const [account, setAccount] = useState()
  const user = useSelector(state=>state.user.data)

  useEffect(()=>{
    if(user){
      setAccount(user.wallet.address)
    }
  },[user])


  const copyToClipboard = (address) => {
    Clipboard.setString(address);
    Toast.show({
      type: 'success',
      text1: 'Sucess',
      text2: "Address Copied",
    })
  };
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
      <BackButton
              onPress={() => {
                if (navigation) {
                  navigation.goBack()
                }
              }}
            />

<AtomindText
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: '500',
              justifyContent: 'center',
              alignSelf: 'center',
              // flex:1
            }}
            category="h5"
          >
            Receive
          </AtomindText>
      </View>



<View style={{alignContent:"center",alignItems:"center",marginTop:20}}>
{account?<QRCode
      value={account}
      logoSize={50}
      size={200}
      logoBackgroundColor='transparent'
    />:null}

    <AtomindText style={{fontSize:18,fontWeight:"700",marginTop:10,marginHorizontal:10
    ,textAlign:"center"}}>
      {account}
    </AtomindText>

    <AtomindButton
              text="Copy Address"
                onPress={async () => {
                  copyToClipboard(account)
                }}
              /></View>

    </View>
  </View>

  )
}

export default ReceiveCrypto
