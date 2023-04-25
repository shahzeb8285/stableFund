import React, { useState } from 'react'
import { StyleSheet, View, Image, ImageBackground } from 'react-native'
import {
  Icon,
  IconRegistry,
  Layout,
  Input,
  useTheme,
} from '@ui-kitten/components'
import { AtomindText, AtomindButton } from '@/Components'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import BackButton from '@/Components/BackButton'
import Header from '@/Components/Header'
import auth from '@react-native-firebase/auth';


const ForgotPassword = ({ navigation }) => {
  const theme = useTheme()
  const [email,setEmail] = useState("")
  const [isLoading,setLoading] = useState(false)
 
 
  const handleResetLink = async()=>{
    setLoading(true)
    try{
      await auth().sendPasswordResetEmail(email)
      alert("Reset Link Sent! Check Your Email");
    }catch(err){
      console.log("dfsdsdsds",err)
      alert(err);

    }
    setLoading(false)

  }
  return (
    <Layout style={[styles.container, { backgroundColor: '#fff' }]}>
      <SafeAreaView style={{ width: '100%', height: '100%' }}>
        <ScrollView style={styles.loginContainer}>
          <Header
            text={'Reset your password'}
            onBack={() => {
              navigation.goBack()
            }}
          />
          <View>
            <Input
            onChangeText={(e)=>{
              console.log("dssdsd",e)
              setEmail(e)
            }}
              style={styles.input}
              size="large"
              textContentType="emailAddress"
              // value={value}
              placeholder="Email Address"
              // onChangeText={nextValue => setValue(nextValue)}
            />

            <AtomindButton
              onPress={()=>{
                handleResetLink()
              }}
              isLoading={isLoading}
              style={[
                styles.loginButton,
                { backgroundColor: theme['color-primary-default'] },
              ]}
              text={"Send Reset Link"}
            >
              
            </AtomindButton>
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
    padding: 20,
    backgroundColor: 'white',
    // alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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

export default ForgotPassword
