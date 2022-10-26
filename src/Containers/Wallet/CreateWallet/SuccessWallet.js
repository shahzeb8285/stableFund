import React from 'react'
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Tab,
  Text,
  Button,
  CheckBox,
  useTheme,
  List,
  ListItem,
} from '@ui-kitten/components'
import { Icon } from 'react-native-eva-icons'
import { View, Image, ImageBackground, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import {
  AtomindButton,
  AtomindText,
  BackButton,
  BaseScreen,
  SeedPhraseViewer,
} from '@/Components'
import { useEffect } from 'react'
import LottieView from 'lottie-react-native'

const SuccessWallet = ({ route, navigation }) => {
  const theme = useTheme()

  return (
    <BaseScreen isWhiteBg>
      <View
        style={{
          // textAlign: 'center',

          // backgroundColor:"red",
          marginHorizontal: 25,

          height: '100%',
        }}
      >
        <Image
        resizeMode="contain"
        style={{
          height: 250,
          alignContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}
         source={require("../../../Assets/Images/success.png")}/>
        {/* <LottieView
          resizeMode="cover"
          style={{
            height: 250,
            alignContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}
          source={require('../../../Assets/Lottie/wallet.json')}
          autoPlay
          loop
        /> */}

        <AtomindText
          category="h2"
          style={{
            color: theme['color-primary-700'],
            marginBottom: 10,
            textAlign: 'center',
            fontWeight: '500',
            fontSize: 26,
          }}
        >
          Success!
        </AtomindText>

        <AtomindText
          appearance="hint"
          style={{
            color: '#00000099',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '400',
          }}
        >
          You've successfully protected your wallet. Remember to keep your seed
          phrase safe, it's your responsibility!
        </AtomindText>

        <AtomindText
          appearance="hint"
          style={{
            color: '#00000099',
            fontSize: 16,
            fontWeight: '400',
            textAlign: 'center',
          }}
        >
          Accredited cannot recover your wallet should you lose it.
        </AtomindText>

        <AtomindButton
        text="Continue"
          style={{
            marginTop: 20,
            marginHorizontal: 25,
          }}
          onPress={() => {
            navigation.navigate('Dashboard')
          }}
       />
        
      </View>
    </BaseScreen>
  )
}

export default SuccessWallet
