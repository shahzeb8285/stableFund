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

const NormalRoutes = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Startup" component={DashboardScreen} />
      <Stack.Screen name="Market" component={MarketScreen} />
      <Stack.Screen name="Exchange" component={ExchangeFragment} />
      <Stack.Screen name="Buy" component={BuyFragment} />
      <Stack.Screen name="SendCrypto" component={SendCrypto} />

      <Stack.Screen
        name="ReceiveCrypto"
        component={ReceiveCrypto}
        options={{
          animationEnabled: false,
        }}
      />

      <Stack.Screen
        name="MyProfile"
        component={MyProfile}
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
        component={LoginScreen}
        options={{
          animationEnabled: false,
        }}
      />

      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          animationEnabled: false,
        }}
      />

      <Stack.Screen
        name="CreatePasscode"
        component={CreatePasscode}
        options={{
          headerShown: false,
          headerMode: 'none',
          mode: 'modal',
          transparentCard: true,
        }}
      />

      <Stack.Screen
        name="RestoreWallet"
        component={RestoreWallet}
        options={{
          headerShown: false,
          headerMode: 'none',
          mode: 'modal',
          transparentCard: true,
        }}
      />

      <Stack.Screen
        name="CreateWalletScreen"
        component={CreateWalletScreen}
        options={{
          headerShown: false,
          headerMode: 'none',
          mode: 'modal',
          transparentCard: true,
        }}
      />

      <Stack.Screen
        name="ShowSecretPhrasesScreen"
        component={ShowSecretPhrasesScreen}
        options={{
          headerShown: false,
          headerMode: 'none',
          mode: 'modal',
          transparentCard: true,
        }}
      />

      <Stack.Screen
        name="VerifySecretPharases"
        component={VerifySecretPharases}
        options={{
          headerShown: false,
          headerMode: 'none',
          mode: 'modal',
          transparentCard: true,
        }}
      />

      <Stack.Screen
        name="UnderstandTheRisk"
        component={UnderstandTheRisk}
        options={{
          headerShown: false,
          headerMode: 'none',
          mode: 'modal',
          transparentCard: true,
        }}
      />

      <Stack.Screen
        name="SuccessWallet"
        component={SuccessWallet}
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

export default NormalRoutes
