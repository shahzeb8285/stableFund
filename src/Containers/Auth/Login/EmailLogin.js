import React from 'react'
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native'
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
import Toast from 'react-native-toast-message'

import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import CountryPicker from 'react-native-country-picker-modal'
import EmailIcon from '@/Assets/SVG/EmailIcon'
import PasswordIcon from '@/Assets/SVG/PasswordIcon'
// import PasswordIcon from '@/Assets/SVG/PasswordIcon'
import OnBoardBg from '@/Assets/Images/OnboardBG.png'
import auth from '@react-native-firebase/auth';
import { CreateNewWallet } from '@/Utils/Crypto'

const EmailLogin = ({ navigation }) => {
  const theme = useTheme()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [isLoading,setLoading] = useState(false)
 
 
 
  const errorToast = (msg)=>{
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: msg,
    })
  }
  const validateFields = ()=>{
    if(!email){
      errorToast("Enter Valid Email")
      return 
    }


    if(!password){
      errorToast("Enter Valid Password")
      return 
    }
    return true
  }
  const handleLogin = async()=>{

    if(!validateFields()){
      return
    }
    setLoading(true)

    try{

        await auth().signInWithEmailAndPassword(email,password)
    }catch(error){
      if(error.code === "auth/invalid-email"){
        errorToast("Invalid Email")
      }else   if(error.code === "auth/user-not-found"){
        errorToast("Account Not Found Please Register")
      }else   if(error.code === "auth/wrong-password"){
        errorToast("Incorrect Password")
      }
      setLoading(false)

    }
  }
  return (

    <ImageBackground source={OnBoardBg} style={{ flex: 1 }}>

    <SafeAreaView style={[styles.container]}>
      <ScrollView style={[styles.container]}>
        <View style={[styles.container, { marginTop: 25 }]}>
          

          <View style={{ paddingHorizontal: 25, marginTop: 20 }}>
            
            <Image
              source={require('../../../Assets/Images/logo.png')}
              resizeMode="contain"
              style={{
                height: 150,
                width: 150,
                marginTop: 20,
                // marginBottom: 50,
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}
              />
              

              <AtomindText style={{ fontSize: 25, fontWeight: "900", textAlign: 'center'}}>
                Welcome Back!
              </AtomindText>
           

              <IconInput
                                title="Email"
                                onChangeText={(t)=>{
                                  setEmail(t)
                                }}

              // icon={<EmailIcon />}
              placeholder="Enter Email"
              textContentType={'emailAddress'}
            />

              <IconInput
                title="Password"
              textContentType="password"
              // icon={<PasswordIcon />}
              // leftIcon={}
              onChangeText={(t)=>{
                setPassword(t)
              }}

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

            <AtomindButton text="Login" isLoading={isLoading}  onPress={() => {
              // navigation.navigate("Dashboard")
              handleLogin()
            }} />
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
          onPress={() => {
            navigation.navigate('Register')
          }}
        />
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

export default EmailLogin
