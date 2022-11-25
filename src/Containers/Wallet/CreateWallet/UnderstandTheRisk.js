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
  List, ListItem
} from '@ui-kitten/components'
import { Icon } from 'react-native-eva-icons'
import { View, Image, ImageBackground, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { AtomindText, BackButton, BaseScreen, SeedPhraseViewer } from '@/Components'
import { useEffect } from 'react'

const UnderstandTheRisk = ({ route, navigation }) => {
  const theme = useTheme()

  const [isChecked, setChecked] = useState(false)
  const [wallet, setWallet] = useState()

  
  useEffect(() => {
    setWallet(JSON.parse(route.params.wallet))
  }, [route.params])

  const handleSubmit = async()=>{

    navigation.navigate("SuccessWallet")
  }

  const renderItem = ({ item, index }) => (
    <ListItem
      key={item.key}
      accessibilityIgnoresInvertColors
      style={{fontWeight:"200"}}
      title={item.key}
      accessoryLeft={<AtomindText>{`${'\u2B24'}`}</AtomindText>}
    />
  );

  return (
    <BaseScreen isWhiteBg>
      <BackButton
        style={{}}
        onPress={() => {
          navigation.goBack()
        }}
      />

      <View
        style={{
          // textAlign: 'center',

          // backgroundColor:"red",
          marginHorizontal: 25,
          flex: 1,
          height: '100%',
        }}
      >
       

     

<List
style={{
  maxHeight: "50%",
  backgroundColor:"#fff"

}}
      data={[
        {
          key: 'The recovery phrase is the master key to your funds. Never share it with anyone else.',
        },
        {
          key: 'Accredited Wallet will never ask your to share your recovery phrase.',
        },
        {
          key: 'If you lose your recovery phrase, not even Accredited Wallet can recover your funds.',
        },
        {
          key: 'Uninstalling the app will require you to input your recovery phrase again upon reinstallation.',
        },
      ]}
      renderItem={renderItem}
    />

    
        <CheckBox
          checked={isChecked}
          style={{marginStart:20}}
          onChange={nextChecked => setChecked(nextChecked)}
        >
          I understand the Risks
        </CheckBox>
      </View>
      <Button
        disabled={!isChecked}
        style={{
          marginHorizontal: 25,
        }}
        onPress={() => {
          handleSubmit()
        }}
      >
        Let's Start
      </Button>
    </BaseScreen>
  )
}

export default UnderstandTheRisk
