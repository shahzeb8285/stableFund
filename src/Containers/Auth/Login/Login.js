import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import {
  Button,
  Icon,
  IconRegistry,
  Layout,
  Input,
  useTheme,
} from '@ui-kitten/components'
import {
  AtomindButton,
  AtomindText,
  BackButton,
  Dot,
  HyperLink,
  IconInput,
  IconText,
  OTPView,
} from '@/Components'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import CountryPicker from 'react-native-country-picker-modal'
import EmailIcon from '@/Assets/SVG/EmailIcon'
import PhoneIcon from "@/Assets/SVG/PhoneIcon"


const LoginScreen = ({ navigation }) => {
  const theme = useTheme()

  const [isMobileSelected, setMobileSelected] = useState(true)
  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView style={[styles.container]}>
        <View style={[styles.container, { marginTop: 25 }]}>
          <BackButton
            onPress={() => {
              navigation.goBack()
            }}
          />

          <View style={{ paddingHorizontal: 25, marginTop: 20 }}>
            <AtomindText style={{ fontWeight: '500', fontSize: 26 }}>Sign In</AtomindText>
            <AtomindText
              style={{
                alignSelf: 'flex-start',
                fontWeight: '400',
                color: '#00000099',
                marginTop: 5,
                marginBottom: 30,
              }}
            >
              Would you like to sign in with your phone or with your e-mail?
            </AtomindText>

            <TouchableOpacity
              onPress={() => {
                setMobileSelected(true)
              }}
              style={{
                backgroundColor: '#fff',
                padding: 20,
                borderRadius: 20,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex: 1,
                  width: '100%',
                }}
              >
               <PhoneIcon/>
                <TouchableOpacity
                  style={{
                    height: 20,
                    width: 20,
                    borderWidth: isMobileSelected ? 6 : 2,
                    borderRadius: 100,
                    borderColor: theme['color-primary-600'],
                  }}
                ></TouchableOpacity>
              </View>

              <AtomindText
                style={{
                  alignSelf: 'flex-start',
                  fontWeight: '500',
                  color: '#000000',
                  marginTop: 8,

                  fontSize: 16,
                  marginBottom: 5,
                }}
              >
                Sign in with Mobile
              </AtomindText>

              <AtomindText
                style={{
                  alignSelf: 'flex-start',
                  fontWeight: '400',
                  color: '#00000099',
                  marginTop: 5,
                  marginBottom: 30,
                }}
              >
                Sign in with confirming an OTP Code that will be sent to your
                phone.{' '}
              </AtomindText>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setMobileSelected(false)
              }}
              style={{
                backgroundColor: '#fff',
                padding: 20,
                marginTop: 12,
                borderRadius: 20,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex: 1,
                  width: '100%',
                }}
              >

                <EmailIcon height={25} width={25}/>
               
                <TouchableOpacity
                  style={{
                    height: 20,
                    width: 20,
                    borderWidth: isMobileSelected ? 2 : 6,
                    borderRadius: 100,
                    borderColor: theme['color-primary-600'],
                  }}
                ></TouchableOpacity>
              </View>

              <AtomindText
                style={{
                  alignSelf: 'flex-start',
                  fontWeight: '500',
                  color: '#000000',
                  marginTop: 8,

                  fontSize: 16,
                  marginBottom: 5,
                }}
              >
                Sign in with E-mail
              </AtomindText>

              <AtomindText
                style={{
                  alignSelf: 'flex-start',
                  fontWeight: '400',
                  color: '#00000099',
                  marginTop: 5,
                  marginBottom: 30,
                }}
              >
                Normal Sign In with your E-Mail and Password.
              </AtomindText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          marginLeft: 25,
          marginRight: 25,
        }}
      >
        <AtomindButton
          text="Continue"
          onPress={() => {
            if (isMobileSelected) {
              navigation.navigate('PhoneLogin')
            } else {
              navigation.navigate('EmailLogin')
            }
          }}
        />

        <View
          style={{
            // flex: 1,
            width: '100%',
            marginBottom: 10,
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        ></View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EEF2',
  },
  loginContainer: {
    // width: '100%',
    flex: 1,
    // backgroundColor: 'blue',

    padding: 20,
    // alignItems: 'center',
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

export default LoginScreen
