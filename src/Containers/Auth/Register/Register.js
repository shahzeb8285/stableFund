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
import { AtomindButton, AtomindText, BackButton, Dot, HyperLink, IconInput } from '@/Components'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import EmailIcon from '@/Assets/SVG/EmailIcon'
import PasswordIcon from '@/Assets/SVG/PasswordIcon'

/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */



const RegisterScreen = ({ navigation }) => {
  const theme = useTheme()

  const [showPassword, setShowPassword] = useState(false)
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
              Create an Account
            </AtomindText>
            <AtomindText
              style={{
                alignSelf: 'flex-start',
                fontWeight: '400',
                color: '#00000099',
                marginTop: 5,
                marginBottom: 15,
              }}
            >
              Enter your e-mail and a strong password to continue to the next
              step...
            </AtomindText>

            <IconInput
              icon={<EmailIcon/>}
              textContentType="emailAddress"
              placeholder="Enter Email"
            />

            <IconInput
              icon={<PasswordIcon/>}
              placeholder="Enter Password"
              textContentType={showPassword ? '' : 'password'}
              leftIcon={require('../../../Assets/Icons/eye.png')}
              onLeftIconClick={() => {
                setShowPassword(!showPassword)
              }}
            />

            <IconInput
              icon={<PasswordIcon/>}
              textContentType="password"
              placeholder="Confirm Password"
            />
            <View style={{ flex: 1, height: '100%' }} />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          marginLeft: 25,
          marginRight: 25,
        }}
      >
        <AtomindButton text="Continue"  onPress={()=>{
          navigation.navigate("PhoneRegisteration")
        }}/>

        <View
          style={{
            // flex: 1,
            width:"100%",
            marginBottom: 10,
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent:"center"
          }}
        >
         <Dot filled/>
         <Dot/>
         <Dot/>

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

export default RegisterScreen
