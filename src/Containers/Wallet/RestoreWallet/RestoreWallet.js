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
import Tags from 'react-native-tags'
import { Icon } from 'react-native-eva-icons'
import { View, Image, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { AtomindText, BackButton, BaseScreen, SeedPhraseViewer } from '@/Components'
import { useEffect } from 'react'
import { CreateNewWallet, RestoreWallet } from '@/Utils/Crypto'

function shuffleSeeds(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

const VerifySecretPharases = ({ route, navigation }) => {
  const theme = useTheme()
  const [enteredSeeds, setEnteredSeeds] = useState([])

  const [wallet, setWallet] = useState()

  const [error, setError] = useState('')

  const handleSubmit = async () => {
    setError('')

    try {
      const seeds = enteredSeeds.join(" ")
      const obj = await RestoreWallet(seeds)
    } catch (err) {
    }
    // if (enteredSeeds.length != wallet.mnemonic.length) {
    //   setError('Please Enter all seeds')
    //   return
    // }

    // const matchError = validateMatches()

    // if (!matchError) {
    //   navigation.navigate('UnderstandTheRisk', {
    //     wallet: JSON.stringify(wallet),
    //   })
    // }
  }

  //   useEffect(() => {
  //     setWallet(JSON.parse(route.params.wallet))
  //     setSeed(shuffleSeeds(JSON.parse(route.params.wallet).mnemonic))
  //   }, [route.params])

  return (
    <BaseScreen>
      <BackButton
        style={{}}
        onPress={() => {
          navigation.goBack()
        }}
      />

      <ScrollView
        style={{
          height: '100%',

          //  backgroundColor:"red"
        }}
      >
        <View
          style={{
            textAlign: 'center',
            alignContent: 'center',
            alignItems: 'center',

            marginHorizontal: 25,
            // flex: 1,
            height: '100%',
          }}
        >
          <AtomindText
            category="h6"
            style={{
              color: theme['color-primary-700'],
              marginBottom: 10,
              fontWeight: '600',
            }}
          >
            Restore Your Wallet 
          </AtomindText>

          <AtomindText
            appearance="hint"
            style={{
              alignSelf: 'center',
              textAlign: 'center',
              //   fontFamily: '',
              color: '#000',
              fontWeight: '200',

              marginTop: 15,
            }}
          >
            Please Enter the Seed pharase you copied while creating the wallet
          </AtomindText>

          <AtomindText
            appearance="hint"
            style={{
              alignSelf: 'center',
              textAlign: 'center',
              color: theme['color-info-500'],
              fontWeight: '400',
              fontSize: 14,
              marginTop: 15,
            }}
          >
            (Press Space after entering a word)
          </AtomindText>

          <Tags
            textInputProps={{
              placeholder: 'Enter a Word',
            }}
            // initialTags={['dog', 'cat', 'chicken']}
            onChangeTags={tags => {
              setEnteredSeeds(tags)
            }}
            
            containerStyle={{
              justifyContent: 'center',
              padding: 10,
              borderWidth: 2,
              marginTop: 10,
              borderRadius: 10,
              height: 400,
              borderColor: theme['color-info-900'],
            }}
            inputStyle={{ fontSize: 15, fontWeight: '500' }}
            inputContainerStyle={{
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderRadius: 15,
              width: '50%',
              margin: 5,
              fontSize: 25,
              backgroundColor: theme['color-info-100'],
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 0.8,
              borderStyle: 'dashed',
              borderColor: theme['color-info-500'],
            }}
            renderTag={({
              tag,
              index,
              onPress,
              deleteTagOnPress,
              readonly,
            }) => (
              <TouchableOpacity
                key={`${tag}-${index}`}
                onPress={onPress}
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  borderRadius: 15,
                  margin: 5,
                  backgroundColor: theme['color-primary-100'],
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 0.8,
                  borderStyle: 'dashed',
                  borderColor: theme['color-primary-500'],
                }}
              >
                <AtomindText>{tag}</AtomindText>
              </TouchableOpacity>
            )}
          />

          <View
            style={{
              width: '100%',
              alignSelf: 'baseline',
              flex: 1,
              alignContent: 'flex-end',
              // alignItems:"baseline",
              alignSelf: 'baseline',
              // justifyContent: 'flex-end',
            }}
          >
            <AtomindText
              style={{
                fontWeight: '700',
                textAlign: 'center',
                marginTop: 10,
                marginBottom: 10,
                color: theme['color-danger-600'],
              }}
              status="danger"
            >
              {error}
            </AtomindText>
            <Button
              onPress={() => {
                handleSubmit()
              }}
            >
              Restore Wallet
            </Button>

            <Button
            appearance='outline'
            style={{marginTop:10}}
              onPress={() => {
                handleSubmit()
              }}
            >
            Scan With QR
            </Button>
          </View>
        </View>
      </ScrollView>
    </BaseScreen>

    // dove secter identify storng wrestl stem rigid detect exclude hill pharase letf
  )
}

export default VerifySecretPharases
