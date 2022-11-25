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
import { Icon } from 'react-native-eva-icons'
import { View, Image, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AtomindButton, AtomindText, BackButton, BaseScreen, SeedPhraseViewer } from '@/Components'
import { useEffect } from 'react'

const ShowSecretPhrasesScreen = ({ route, navigation }) => {
  const theme = useTheme()

  const [wallet, setWallet] = useState()

  useEffect(() => {
    setWallet(JSON.parse(route.params.wallet))
  }, [route.params])

  const renderSeeds = () => {
    return <SeedPhraseViewer words={wallet.mnemonic} navigation={navigation} />
  }

  return (
    <BaseScreen>
      {/* <BackButton
        style={{}}
        onPress={() => {
          navigation.goBack()
        }}
      /> */}

      <View
        style={{
          // backgroundColor: 'red',
          // alignSelf:"flex-start",
          textAlign: 'center',
          alignContent: 'center',
          alignItems: 'center',
          marginTop:20,
          // justifyContent: 'center',
          // backgroundColor: 'blue',
          marginHorizontal: 25,
          flex: 1,
          height: '100%',
        }}
      >
        <AtomindText
          style={{
            color: theme['color-primary-700'],
            marginBottom: 10,
            fontWeight: '700',
            fontSize:28
          }}
        >
          Seed Phrase
        </AtomindText>

        <AtomindText
          style={{
            alignSelf:"flex-start",
            textAlign:"left",
            color: '#606060',
            fontSize:16,
            fontWeight:'400',
            marginVertical: 15,
            
          }}
        >
          Protect your wallet with your seed phrasecarefully write these 12 words down or copy them.
        </AtomindText>

        {wallet && wallet.mnemonic ? renderSeeds() : null}

       

        <View
          style={{
            width: '100%',
            alignSelf: 'baseline',
            flex: 1,
            justifyContent: 'flex-end',
          }}
        >
          <AtomindButton
            onPress={() => {
              navigation.navigate('VerifySecretPharases', {
                wallet: JSON.stringify(wallet),
              })
            }}
            text="Continue"
          />
          
        </View>
      </View>
    </BaseScreen>
  )
}

export default ShowSecretPhrasesScreen
