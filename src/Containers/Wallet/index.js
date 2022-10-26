import React from 'react'
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Tab,
  Text,
  Button,
} from '@ui-kitten/components'
import { Icon } from 'react-native-eva-icons'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AtomindText } from '@/Components'

const CreateWalletView = props => {
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
      }}
    >
      <Button
        onPress={() => {
          props.navigator.navigate('CreateWalletScreen')
        }}
        status="primary"
        size="medium"
        style={{ alignSelf: 'center' }}
      >
        Create Your Wallet
      </Button>


      <Button
        appearance="outline"
        onPress={() => {
          props.navigator.navigate('RestoreWallet')
        }}
        status="primary"
        size="medium"
        textStyle={{
fontFamily: 'DMSans-Regular',
          fontWeight: '300',

        }}
        style={{
          alignSelf: 'center',
          marginTop: 10,
          // fontFamily: 'DMSans-Regular',
          // fontWeight: '300',
        }}
      >{""}
           <AtomindText style={{ fontSize: 16, fontWeight: '300' }}>John Doe</AtomindText>

       
      </Button>
    </View>
  )
}

const WalletScreen = props => {
  const [isWalletCreated, setWalletCreated] = useState(false)
  return (
    <Layout style={{ height: '100%', width: '100%' }}>
      {isWalletCreated ? null : (
        <CreateWalletView navigator={props.navigator} />
      )}
    </Layout>
  )
}

export default WalletScreen
