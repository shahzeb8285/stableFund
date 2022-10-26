import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  LoginScreen,  } from '@/Containers'

const Stack = createNativeStackNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false,
          headerMode: 'none',
          mode: 'modal',
          transparentCard: true, }}
      />
      
    </Stack.Navigator>
  )
}

export default MainNavigator
