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
import PasswordIcon from '@/Assets/SVG/PasswordIcon'
// import PasswordIcon from '@/Assets/SVG/PasswordIcon'

const EmailLogin = ({ navigation }) => {
  const theme = useTheme()

  const [isMobileSelected, setMobileSelected] = useState(true)
  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView style={[styles.container]}>
        <View style={[styles.container, { marginTop: 25 }]}>
          {/* <BackButton
            onPress={() => {
              navigation.goBack()
            }}
          /> */}

          <View style={{ paddingHorizontal: 25, marginTop: 20 }}>
            {/* <AtomindText style={{ fontWeight: '500', fontSize: 26 }}>
              Sign In with E-Mail
            </AtomindText> */}

            <Image
              source={require('../../../Assets/Images/logo.png')}
              resizeMode="contain"
              style={{
                height: 150,
                width: 150,
                marginTop: 20,
                marginBottom: 50,
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}
            />
            {/* <AtomindText
              style={{
                alignSelf: 'flex-start',
                fontWeight: '400',
                color: '#00000099',
                marginTop: 5,
                marginBottom: 30,
              }}
            >
              Normal Sign In with your E-Mail and Password.{' '}
            </AtomindText> */}

            <IconInput
              icon={<EmailIcon />}
              placeholder="Enter Email"
              textContentType={'emailAddress'}
            />

            <IconInput
              textContentType="password"
              icon={<PasswordIcon />}
              // leftIcon={}
              placeholder="Enter Password"
            />
            <View>
              <HyperLink
                text={'Forgot Password?'}
                onPress={() => {
                  navigation.navigate('ForgotPassword')
                }}
              />
            </View>

            <AtomindButton text="Sign In" />
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignContent: 'center',
          alignItems: 'center',
          marginHorizontal: 20,
          alignSelf: 'center',
        }}
      >
        <AtomindText
          style={{
            fontWeight: '400',
            marginHorizontal: 4,
            color: '#00000099',
            fontFamily: 'DMSans-Regular',
          }}
        >
          Don't have an account?
        </AtomindText>

        <HyperLink
          text={'Sign up'}
          point={'qwertyu'}
          onPress={() => {
            console.log('13322')
            navigation.navigate('ForgotPassword')
          }}
        />
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

export default EmailLogin
