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
import PhoneIcon from '@/Assets/SVG/PhoneIcon'

const PhoneLogin = ({ navigation }) => {
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
            <AtomindText style={{ fontWeight: '500', fontSize: 26 }}>
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

            <IconInput
              icon={<PhoneIcon/>}
              placeholder="000 - 000 - 000 - 000"
              textContentType={'telephoneNumber'}
            />
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
            navigation.navigate('LoginVerifyOtp')
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
        >
         
          <Dot filled/>
          <Dot  />
        </View>

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

export default PhoneLogin
