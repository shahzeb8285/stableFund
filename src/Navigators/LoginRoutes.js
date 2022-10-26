import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import {
  CreatePasscode,
  CreateWalletScreen,
  DashboardScreen,
  EmailLogin,
  OnBoard,
  ForgotPassword,
  LoginScreen,
  PhoneLogin,
  PhoneRegisteration,
  RegisterScreen,
  RestoreWallet,
  ShowSecretPhrasesScreen,
  SuccessWallet,
  UnderstandTheRisk,
  RegisterVerifyOtp,
  VerifySecretPharases,
  WelcomeScreen1,
  LoginVerifyOtp,
  WelcomeScreen2,
  MyProfile,
  MarketScreen,
  ExchangeFragment,
  BuyFragment,
  SendCrypto,
  ReceiveCrypto,
} from '@/Containers'

const LoginRoutes = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
        name="OnBoard"
        component={OnBoard}
        options={{
          animationEnabled: false,
        }}
      />

      <Stack.Screen
        name="LoginVerifyOtp"
        component={LoginVerifyOtp}
        options={{
          animationEnabled: false,
        }}
      />

      <Stack.Screen
        name="LoginScreen"
        component={EmailLogin}
        options={{
          animationEnabled: false,
        }}
      />
{/* 
      <Stack.Screen
        name="PhoneLogin"
        component={PhoneLogin}
        options={{
          animationEnabled: false,
        }}
      /> */}

      <Stack.Screen
        name="RegisterVerifyOtp"
        component={RegisterVerifyOtp}
        options={{
          animationEnabled: false,
        }}
      />

      <Stack.Screen
        name="WelcomeScreen1"
        component={WelcomeScreen1}
        options={{
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="PhoneRegisteration"
        component={PhoneRegisteration}
        options={{
          animationEnabled: false,
        }}
      />

      <Stack.Screen
        name="WelcomeScreen2"
        component={WelcomeScreen2}
        options={{
          animationEnabled: false,
        }}
      />

      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
          headerMode: 'none',
          mode: 'modal',
          transparentCard: true,
        }}
      />

      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerShown: false,
          headerMode: 'none',
          mode: 'modal',
          transparentCard: true,
        }}
      />
  </Stack.Navigator>
  )
}

export default LoginRoutes
