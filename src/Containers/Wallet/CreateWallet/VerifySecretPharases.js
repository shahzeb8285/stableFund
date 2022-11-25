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
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import {
  AtomindButton,
  AtomindText,
  BackButton,
  BaseScreen,
  SeedPhraseViewer,
} from '@/Components'
import { useEffect } from 'react'
import Header from '@/Components/Header'

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
  const [seeds, setSeed] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    validateMatches()
  }, [seeds])
  const handleSubmit = () => {
    setError('')
    if (enteredSeeds.length != wallet.mnemonic.length) {
      setError('Please Enter all seeds')
      return
    }

    const matchError = validateMatches()

    if (!matchError) {
      navigation.navigate('UnderstandTheRisk', {
        wallet: JSON.stringify(wallet),
      })
    }
  }

  const validateMatches = () => {
    setError('')
    let doesMatches = true
    for (let i = 0; i < enteredSeeds.length; i++) {
      if (wallet.mnemonic[i] !== enteredSeeds[i]) {
        doesMatches = false
        break
      }
    }

    if (!doesMatches) {
      setError("Seed Pharases don't match")
      return true
    }

    return false
  }

  useEffect(() => {
    setWallet(JSON.parse(route.params.wallet))
    setSeed(shuffleSeeds(JSON.parse(route.params.wallet).mnemonic))
  }, [route.params])

  const renderSeeds = () => {
    return (
      <SeedPhraseViewer
        showBorder={false}
        onWordClick={word => {
          setEnteredSeeds([...enteredSeeds, word])
          setSeed(seeds.filter(e => e !== word))
        }}
        showIndex={false}
        words={seeds}
        navigation={navigation}
      />
    )
  }

  return (
    <BaseScreen>
    

      <ScrollView
        style={{
          height: '100%',

          //  backgroundColor:"red"
        }}
      >

<Header text="Confirm Seed Phrase" onBack={() => {
          navigation.goBack()
     }} />
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
            appearance="hint"
            style={{
              alignSelf: 'center',
              textAlign: 'center',
              //   fontFamily: '',
              color: '#000',
              fontWeight: '200',

              marginVertical: 15,
            }}
          >
            Select each word in the order it was presented to you.
          </AtomindText>

          <SeedPhraseViewer
            showBorder={true}
            showIndex={false}
            words={enteredSeeds}
            navigation={navigation}
            onWordClick={word => {
              setSeed([...seeds, word])
              setEnteredSeeds(enteredSeeds.filter(e => e !== word))
            }}
          />
          {wallet && wallet.mnemonic ? renderSeeds() : null}

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
            <AtomindButton
              text="Continue"
              onPress={() => {
                handleSubmit()

                
              }}
            >
              Submit
            </AtomindButton>


            <AtomindButton
            isSecondary
              text="Verify Later"
              onPress={() => {
                // handleSubmit()

                navigation.navigate('SuccessWallet', {
                  wallet: JSON.stringify(wallet),
                })
              }}
            >
              Submit
            </AtomindButton>
          </View>
        </View>
      </ScrollView>
    </BaseScreen>

    // dove secter identify storng wrestl stem rigid detect exclude hill pharase letf
  )
}

export default VerifySecretPharases
