import React, { useRef } from 'react'
import { StyleSheet, View, Image, ImageBackground } from 'react-native'
import {
  Button,
  IconRegistry,
  Layout,
  Input,
  useTheme,
  Text,
} from '@ui-kitten/components'

import { AtomindText, HyperLink } from '@/Components'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import ReactNativePinView from 'react-native-pin-view'
import { Icon } from 'react-native-eva-icons'

/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */

const EraseIcon = props => <Icon {...props} name="backspace-outline" />
const CreatePasscode = ({ navigation }) => {
  const theme = useTheme()
  const pinView = useRef(null)

  return (
    <Layout style={[styles.container, { padding: 20 }]}>
      <SafeAreaView style={{ width: '100%', height: '100%' }}>
        <ScrollView>
          <View>
            <Image
              source={require('../../Assets/Images/icon/icon-bw.png')}
              style={{
                height: 100,
                width: 100,
                marginTop: 20,
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}
            />
            <AtomindText
              style={{ alignSelf: 'center', marginTop: 10, marginBottom: 10 }}
              category="h5"
            >
              Create your passcode
            </AtomindText>
            <ReactNativePinView
              inputSize={32}
              ref={pinView}
              pinLength={6}
              buttonSize={60}
              // onValueChange={value => setEnteredPin(value)}
              buttonAreaStyle={{
                marginTop: 24,
              }}
              inputAreaStyle={{
                marginBottom: 24,
              }}
              inputViewEmptyStyle={{
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: '#222b45',
              }}
              inputViewFilledStyle={{
                backgroundColor: '#222b45',
              }}
              buttonViewStyle={{
                borderWidth: 1,
                borderRadius: 30,
                borderColor: '#222b45',
              }}
              buttonTextStyle={{
                color: '#222b45',
              }}
              onButtonPress={key => {
                if (key === 'custom_left') {
                  pinView.current.clear()
                }
                if (key === 'custom_right') {
                  pinView.current.clear()
                }
                if (key === 'three') {
                  alert("You can't use 3")
                }
              }}
              customRightButton={
                <EraseIcon fill="#222b45" height={25} width={25} />
              }
            />

            {/* <Icon
    // style={styles.icon}
    fill='#8F9BB3'
    name='star'
  /> */}

            <Button
              style={[
                styles.loginButton,
                { backgroundColor: theme['color-primary-default'] },
              ]}
            >
              Set Passcode
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Layout>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    width: '100%',
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    // textAlign: 'center',
  },
  input: {
    // flex: 1,
    marginTop: 10,
    // margin: 5,
    // padding:18,
    borderRadius: 10,
  },
  loginButton: {
    marginVertical: 16,
    borderRadius: 10,
    // padding:50,
    width: '100%',
  },
})

export default CreatePasscode
