import React from 'react'

import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Tab,
  Button,
  useTheme,
  Spinner,
} from '@ui-kitten/components'

import { CreateNewWallet } from '@/Utils/Crypto'

import { Icon } from 'react-native-eva-icons'
import { View, Image, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AtomindButton, AtomindText, BackButton, BaseScreen } from '@/Components'
import { useCallback } from 'react'
import { useEffect } from 'react'

const CreateWalletScreen = props => {
  const theme = useTheme()
  const [isLoading, setLoading] = useState(true)
  const [wallet, setWallet] = useState(null)

  const LoadingIndicator = props => (
    <View
      style={[props.style, { justifyContent: 'center', alignItems: 'center' }]}
    >
      <Spinner size="small" status="info" />
    </View>
  )

  useEffect(() => {
    createWallet()
  }, [])
  const createWallet = useCallback(async () => {
    setLoading(true)
    const _wallet = await CreateNewWallet()
    setLoading(false)

    setWallet(_wallet)
  }, [])

  return (
    <BaseScreen isWhiteBg>
    
      <View
        style={{
          textAlign: 'center',
          alignContent: 'center',
          alignItems: 'center',

          marginHorizontal: 25,
          flex: 1,
          height: '100%',
        }}
      >
        <Image
          resizeMethod="resize"
          resizeMode="contain"
          style={{
            height: 250,
            width: 250,
          }}
          source={require('../../../Assets/Images/create-wallet.png')}
        />

        {isLoading ? (
          <AtomindText
            style={{ color: '#000', fontWeight: '500', fontSize: 26 }}
          >
            Please Wait...
          </AtomindText>
        ) : (
          <>
           

            <AtomindText
              style={{
                color: '#000',

                fontWeight: '500',
                fontSize: 26,
              }}
            >
              Add your wallet
            </AtomindText>

            <AtomindText
              style={{
                textAlign: 'center',
                fontFamily: 'DMSans-Regular',
                marginTop: 15,
                color: '#00000099',
              }}
            >
              Don't risk losing your funds. Protect your{'\n'} wallet by saving your
              Seed phrase in{'\n'} a place you trust.{'\n\n'}It's the only way to
              recover your wallet if you{'\n'} get locked out of the app or{'\n'}get a new
              device.
            </AtomindText>

            <View
              style={{
                width: '100%',
                alignSelf: 'baseline',
                flex: 1,
                justifyContent: 'flex-end',
              }}
            >
              <AtomindButton
              text="Continue"
                accessoryLeft={isLoading ? LoadingIndicator : null}
                onPress={async () => {
                  props.navigation.navigate('ShowSecretPhrasesScreen', {
                    wallet: JSON.stringify(wallet),
                  })
                }}
              />
               
            </View>
          </>
        )}
      </View>
    </BaseScreen>
  )
}

export default CreateWalletScreen
