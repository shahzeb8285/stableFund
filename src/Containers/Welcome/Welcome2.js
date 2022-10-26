import React, { useRef } from 'react'
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import {
  Button,
  IconRegistry,
  Layout,
  Input,
  useTheme,
  Text,
} from '@ui-kitten/components'

import { AtomindButton, AtomindText, HyperLink } from '@/Components'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import ReactNativePinView from 'react-native-pin-view'
import { Icon } from 'react-native-eva-icons'

/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */

const WelcomeScreen2 = ({ navigation }) => {
  const pinView = useRef(null)
  const theme = useTheme()

  return (
    <Layout
      style={[styles.container, { padding: 20, backgroundColor: '#fff' }]}
    >
      <SafeAreaView style={{ width: '100%', height: '100%' }}>
        <View
          style={{
            height: '100%',
            flex: 1,
          }}
        >
          <ScrollView
            style={{
              // backgroundColor: 'red',
              // alignContent: 'center',
              height: '100%',
              // alignItems: 'center',
              // justifyContent: 'center',
            }}
          >
            <Image
              source={require('../../Assets/Images/logo_metal.png')}
              resizeMode="contain"
              style={{
                height: 300,
                width: 300,
                // marginTop: 20,
                // marginBottom: 50,
                alignContent: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
              }}
            />
            <AtomindText
              style={{
                alignSelf: 'center',
                color: '#000',
                fontFamily: 'DMSans-Regular',
                // marginTop: 10,
                // marginBottom: 10,
                fontWeight: '500',
                fontSize: 26,
              }}
              category="h5"
            >
              Welcome to Accredited
            </AtomindText>

            <AtomindText
              style={{
                fontWeight: '400',
                textAlign: 'center',
                marginTop: 10,
                color: '#00000099',
                fontFamily: 'DMSans-Regular',
              }}
            >
              It only takes a minute to create{'\n'}your perfect wallet.
            </AtomindText>

            <AtomindButton
              text="Create an Account"
              onPress={() => {
                navigation.navigate('Register')
              }}
            />

            <AtomindText
              style={{
                fontWeight: '400',
                textAlign: 'center',
                marginTop: 5,
                color: '#00000099',
                fontFamily: 'DMSans-Regular',
              }}
            >
              Already have an account?
            </AtomindText>

            <AtomindButton
              secondary
              text="Sign in"
              onPress={() => {
                navigation.navigate('LoginScreen')
              }}
            />

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 20,
              }}
            >
              <View
                style={{ flex: 1, height: 1, backgroundColor: '#00000033' }}
              />
              <View>
                <AtomindText
                  style={{
                    fontWeight: '400',
                    marginHorizontal: 10,
                    color: '#00000099',
                    fontFamily: 'DMSans-Regular',
                  }}
                >
                  Sign in with
                </AtomindText>
              </View>
              <View
                style={{ flex: 1, height: 1, backgroundColor: '#00000033' }}
              />
            </View>

            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  // flex:1,
                  height: 64,
                  width: 64,
                  // width:20,
                  // margin: 10,
                  // padding:5,
                  alignContent: 'center',
                  alignItems: 'center',

                  borderWidth: 1,
                  // padding:25,
                  borderRadius: 20,
                  borderColor: '#00000033',

                  // alignContent:"center",
                  // alignItems:"center",
                  justifyContent: 'center',
                }}
              >
                <Image
                  style={{
                    height: 30,
                    width: 30,
                    // alignSelf:"center",
                    // justifyContent:"center"
                  }}
                  resizeMode="contain"
                  source={require('../../Assets/Images/icon/facebook.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  // flex:1,
                  height: 64,
                  width: 64,
                  // width:20,
                  // margin: 10,
                  // padding:5,
                  alignContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: 20,

                  borderWidth: 1,
                  // padding:25,
                  borderRadius: 20,
                  borderColor: '#00000033',

                  // alignContent:"center",
                  // alignItems:"center",
                  justifyContent: 'center',
                }}
              >
                <Image
                  style={{
                    height: 30,
                    width: 30,
                    // alignSelf:"center",
                    // justifyContent:"center"
                  }}
                  resizeMode="contain"
                  source={require('../../Assets/Images/icon/google.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  // flex:1,
                  height: 64,
                  width: 64,
                  // width:20,
                  // margin: 10,
                  // padding:5,
                  alignContent: 'center',
                  alignItems: 'center',

                  borderWidth: 1,
                  // padding:25,
                  borderRadius: 20,
                  borderColor: '#00000033',

                  // alignContent:"center",
                  // alignItems:"center",
                  justifyContent: 'center',
                }}
              >
                <Image
                  style={{
                    height: 30,
                    width: 30,
                    // alignSelf:"center",
                    // justifyContent:"center"
                  }}
                  resizeMode="contain"
                  source={require('../../Assets/Images/icon/apple.png')}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
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
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    paddingVertical: 14,
    // padding:50,
    width: '100%',
  },
})

export default WelcomeScreen2
