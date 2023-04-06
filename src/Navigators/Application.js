import React,{useEffect} from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from './utils'

import auth from '@react-native-firebase/auth';

import { useState } from 'react'
import NormalRoutes from './NormalRoutes'
import LoginRoutes from './LoginRoutes'
import { getDoc } from '@/Firebase/Firestore'
import { setGlobalUser } from '@/Store/Slices/User/user'
import { useDispatch, useSelector } from 'react-redux'
import { getMyPortfolio } from '@/Features/Portfolio'


// @refresh reset
const ApplicationNavigator = () => {
  const [fbuser, setFBUser] = useState();
  const dispatch = useDispatch()

  const [isAuth,setAuth ] = useState(false)
  const [initializing, setInitializing] = useState(true);
  const user = useSelector(state => state.user.data);
  
  const loadUserData = async(_fbUser)=>{
    const userFromDB = (await getDoc(`users`,_fbUser.uid)).data()

    let userObj = {
      uid:_fbUser.uid,
      email:_fbUser.email,
    }

    if(userFromDB){
      userObj = {
        ...userObj,
        ...userFromDB
      }
    }


    if(userObj.wallet){
      const portfolio =  await getMyPortfolio(userObj.wallet.address)
      if(portfolio){
        userObj.portfolio = portfolio

      }
    }


    dispatch(setGlobalUser(userObj))
  } 



  useEffect(()=>{
    if(user && user.wallet){
      setInterval(async()=>{
        const portfolio =  await getMyPortfolio(user.wallet.address)
        const userObj = {...user}
        if(portfolio){
          userObj.portfolio = portfolio

        }
        dispatch(setGlobalUser(userObj))

      },60000)
    }
  },[user])

async function onAuthStateChanged(_user) {
    setAuth(!!_user)
    setInitializing(false);
    if(_user && initializing){
      setFBUser(_user);
      // await auth().currentUser.reload()

    try{  await loadUserData(_user)

    }catch(err){
    }

    }
  }

 



  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const renderRoutes = ()=>{
    if (initializing) return null;
    if(isAuth){
      return <NormalRoutes/>
    }else{
      return <LoginRoutes/>
    }

  }
   return (
    <NavigationContainer ref={navigationRef}>
      {renderRoutes()}    
      </NavigationContainer>
  )
}

export default ApplicationNavigator
