import React from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'
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
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import CountryPicker from 'react-native-country-picker-modal'

/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */

const RegisterVerifyOtp = ({ navigation }) => {
  const theme = useTheme()
  const [enteredOTP, setEnteredOTP] = useState(['', '', '', ''])

  const [error,setError] = useState("")
  const [info,setInfo] = useState("");
  
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
            <AtomindText style={{ fontWeight: '500', fontSize: 26 }}>
              Enter OTP code
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
              Check your phone for a 4 Digit OTP code and insert it in the
              fields below...
            </AtomindText>

            <OTPView
              onOTPEntered={otp => {
                setEnteredOTP(otp)
              }}
            />
            {error ?<AtomindText
              style={{
                alignSelf: 'center',
                fontWeight: '700',
                color: theme['color-danger-800'],
                marginTop: 5,
                // marginBottom: 30,
              }}
            >
             {error}
            </AtomindText>:null}



            {info ?<AtomindText
              style={{
                alignSelf: 'center',
                fontWeight: '700',
                color: theme['color-primary-600'],
                marginTop: 5,
                // marginBottom: 30,
              }}
            >
             {info}
            </AtomindText>:null}
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          marginLeft: 25,
          marginRight: 25,
        }}
      >
        <AtomindButton text="Continue" />

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
        >
          <Dot />
          <Dot />
          <Dot filled />
        </View>
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

export default RegisterVerifyOtp
