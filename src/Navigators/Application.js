import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import {
  CreatePasscode,
  CreateWalletScreen,
  DashboardScreen,
  EmailLogin,
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
} from '@/Containers'
import MainNavigator from './Main'
import { navigationRef } from './utils'

const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  //

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="EmailLogin"
          component={EmailLogin}
          options={{
            animationEnabled: false,
          }}
        />
        <Stack.Screen name="Startup" component={DashboardScreen} />
        <Stack.Screen
          name="Main"
          component={MainNavigator}
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
          name="PhoneLogin"
          component={PhoneLogin}
          options={{
            animationEnabled: false,
          }}
        />

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
          name="Dashboard"
          component={DashboardScreen}
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
    </NavigationContainer>
  )
}

export default ApplicationNavigator
