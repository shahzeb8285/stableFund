import React from 'react'
import { StyleSheet, View, Image, ImageBackground } from 'react-native'
import {
  Button,
  Icon,
  IconRegistry,
  Layout,
  Input,
  useTheme,
} from '@ui-kitten/components'
import Toast from 'react-native-toast-message'

import { AtomindButton, AtomindText, HyperLink } from '@/Components'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import BackButton from '@/Components/BackButton'
import Header from '@/Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { setDoc } from '@/Firebase/Firestore'
import { setGlobalUser } from '@/Store/Slices/User/user'
import AsyncStorage from '@react-native-async-storage/async-storage'


const MyProfile = ({ navigation }) => {
  const theme = useTheme()
  const user = useSelector(state => state.user.data)
  const [ isLoading,setLoading] = useState(false)
  const [ name,setName] = useState("")
  const dispatch = useDispatch()
  const updateFBUser = async()=>{
    const refereeCode = await AsyncStorage.getItem('refereeCode');
    const myReferralCode = await AsyncStorage.getItem('myReferralCode');

    const userObj = {myReferralCode,...user,name:name,refereeCode}

     await setDoc("users",user.uid,userObj)
    dispatch(setGlobalUser(userObj))
  }
  const handleClick = async()=>{
    if(!name){
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: "Please Enter Valid Name",
      })     
      return
    }
    setLoading(true)
    try{
      await updateFBUser()
      navigation.navigate("Dashboard")
    }catch(err){
      setLoading(false)
    }
  }
  return (
    <Layout style={[styles.container, { backgroundColor: '#fff' }]}>
      <SafeAreaView style={{ width: '100%', height: '100%' }}>
        <ScrollView style={styles.loginContainer}>
          <Header
          hideBackButton={!user.name}
            text={'Update Your Profile'}
            onBack={() => {
              navigation.goBack()
            }}
          />
          <View>
            <Input
              style={styles.input}
              size="large"
              value={name}
              placeholder="Full Name"
              onChangeText={nextValue => setName(nextValue)}
            />



          <AtomindButton text={"Update Profile"}
          onPress={()=>{
            handleClick()
          }} 
          
          isLoading={isLoading} />
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

export default MyProfile
