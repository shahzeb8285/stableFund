import React,{useEffect} from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from './utils'

import auth from '@react-native-firebase/auth';
import { useState } from 'react'
import NormalRoutes from './NormalRoutes'
import LoginRoutes from './LoginRoutes'


// @refresh reset
const ApplicationNavigator = () => {
  const [user, setUser] = useState();
  const [isAuth,setAuth ] = useState(false)

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    // if (initializing) setInitializing(false); 
  }





  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
   return (
    <NavigationContainer ref={navigationRef}>
        {isAuth?<NormalRoutes/>:<LoginRoutes/>}
    </NavigationContainer>
  )
}

export default ApplicationNavigator
