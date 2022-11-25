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
import ReferralIcon from "@/Assets/SVG/ReferralIcon"
import PasswordIcon from '@/Assets/SVG/PasswordIcon'
import Header from '@/Components/Header'
import OnBoardBg from '@/Assets/Images/OnboardBG.png'
import Toast from 'react-native-toast-message'
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage'

const RegisterScreen = ({ navigation }) => {
  const theme = useTheme()

  const [email,setEmail] = useState("shahzeb8285@gmail.com")
  const [password1,setPassword1] = useState("BirdCom@123")
  const [password2,setPassword2] = useState("BirdCom@123")
  const [showPassword, setShowPassword] = useState(false)
  const [refereeCode, setrefereeCode] = useState()


  const [isLoading,setLoading] = useState(false)

  const validateEmail = (_email) => {
    return _email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };


  const validatePassword=(pw)=> {

    return /[A-Z]/       .test(pw) &&
           /[a-z]/       .test(pw) &&
           /[0-9]/       .test(pw) &&
           /[^A-Za-z0-9]/.test(pw) &&
           pw.length > 4;

}


const errorToast = (msg)=>{
  Toast.show({
    type: 'error',
    text1: 'Error',
    text2: msg,
  })
}
const validateFields = ()=>{
  if(!validateEmail(email)){
  
    errorToast('Invalid Email Address')
    return
  }

  if(password1 !== password2){

    
    errorToast("Passwords Don't Match")

    return 
  }

  if(!validatePassword(password1)){
    
    errorToast("Please Enter a Strong Password")
    return
  }


  return true
}
  
function generateUID() {

  var firstPart = (Math.random() * 46656) | 0;
  var secondPart = (Math.random() * 46656) | 0;
  firstPart = ("000" + firstPart.toString(36)).slice(-3);
  secondPart = ("000" + secondPart.toString(36)).slice(-3);
  return firstPart + secondPart;
}
const handleSignup=async()=>{

    if(!validateFields()){
      return
    }
 


    setLoading(true)

    try{


     await AsyncStorage.setItem('refereeCode', refereeCode.replaceAll(" ","").toUpperCase());
     await AsyncStorage.setItem('myReferralCode', generateUID().toUpperCase());

     await auth()
      .createUserWithEmailAndPassword(email, password1)

    }catch(err){
      if (err.code === 'auth/email-already-in-use') {
        errorToast("That email address is already in use!")
      }
  
      if (err.code === 'auth/invalid-email') {
        errorToast("That email address is invalid!")
      }
  
    }
    setLoading(false)


  }
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
                title="Enter Email"
                icon={<EmailIcon />}
                onChangeText={(text)=>{
                  setEmail(text)
                }}
                textContentType="emailAddress"
                placeholder="Enter Email"
              />


<IconInput
                title="Referral Code"
                icon={<ReferralIcon />}
                onChangeText={(text)=>{
                  setrefereeCode(text)
                }}
                placeholder="Enter Referral Code"
                // leftIcon={require('../../../Assets/Icons/eye.png')}
             
              />
              <IconInput
                title="Password"
                onChangeText={(text)=>{
                  setPassword1(text)
                }}
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
                onChangeText={(text)=>{
                  setPassword2(text)
                }}
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
            isLoading={isLoading}
            onPress={() => {
              handleSignup()
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
