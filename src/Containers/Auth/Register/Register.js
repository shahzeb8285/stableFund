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
} from '@/Components'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import EmailIcon from '@/Assets/SVG/EmailIcon'
import PasswordIcon from '@/Assets/SVG/PasswordIcon'
import Header from '@/Components/Header'
import OnBoardBg from '@/Assets/Images/OnboardBG.png'

/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */

const RegisterScreen = ({ navigation }) => {
  const theme = useTheme()

  const [showPassword, setShowPassword] = useState(false)
  return (
    <ImageBackground source={OnBoardBg} style={{ flex: 1 }}>
      <SafeAreaView style={[styles.container]}>
        <ScrollView style={[styles.container]}>
          <View style={[styles.container, { marginTop: 25 }]}>
            <Header
              text="Create Account"
              onBack={() => {
                navigation.goBack()
              }}
            />

            <View style={{ paddingHorizontal: 25, marginTop: 20 }}>
              <IconInput
                title="Full Name"
                // icon={<EmailIcon />}
                // textContentType="emailAddress"
                placeholder="Enter Name"
              />
              <IconInput
                title="Enter Email"
                icon={<EmailIcon />}
                textContentType="emailAddress"
                placeholder="Enter Email"
              />

              <IconInput
                title="Password"
                icon={<PasswordIcon />}
                placeholder="Enter Password"
                textContentType={showPassword ? '' : 'password'}
                leftIcon={require('../../../Assets/Icons/eye.png')}
                onLeftIconClick={() => {
                  setShowPassword(!showPassword)
                }}
              />

              <IconInput
                title="Confirm Password"
                icon={<PasswordIcon />}
                placeholder="Enter Password"
                textContentType={showPassword ? '' : 'password'}
                // leftIcon={require('../../../Assets/Icons/eye.png')}
                onLeftIconClick={() => {
                  setShowPassword(!showPassword)
                }}
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
            text="Sign up"
            onPress={() => {
              navigation.navigate('Dashboard')
            }}
          />

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
              Already have account?
            </AtomindText>

            <HyperLink
              text={'Login'}
              onPress={() => {
                navigation.goBack()

              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#E8EEF2',
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

export default RegisterScreen
