import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

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
  StakingDetails,
  SettingScreen
} from '@/Containers'
import { useEffect } from 'react'
import VerifyEmail from '@/Containers/Auth/VerifyEmail'
import { View } from 'react-native'

const NormalRoutes = ({ }) => {
  const Stack = createStackNavigator()
  const user = useSelector(state => state.user.data)
  const isUserLoading = useSelector(state => state.user.isLoading)
  const [routes, setRoutes] = useState(<View />)

  useEffect(() => {
    setRoutes(renderRoutes())
  }, [user])

  const normalRoutes = () => {
    return <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Market" component={MarketScreen} />
      <Stack.Screen name="Exchange" component={ExchangeFragment} />
      <Stack.Screen name="Buy" component={BuyFragment} />
      <Stack.Screen name="SendCrypto" component={SendCrypto} />

      <Stack.Screen
        name="ReceiveCrypto"
        component={ReceiveCrypto}
      />


      <Stack.Screen
        name="StakingDetails"
        component={StakingDetails}
      />






      <Stack.Screen
        name="MyProfile"
        component={MyProfile}

      />

      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}

      />





      <Stack.Screen
        name="LoginVerifyOtp"
        component={LoginVerifyOtp}
        options={{
          animationEnabled: false,
        }}
      />
{/* 
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          animationEnabled: false,
        }}
      /> */}


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
            name="SuccessWallet"
            component={SuccessWallet}
            options={{
              headerShown: false,
              headerMode: 'none',
              mode: 'modal',
              transparentCard: true,
            }}
          />
      {/* <Stack.Screen
        name="UnderstandTheRisk"
        component={UnderstandTheRisk}
        options={{
          headerShown: false,
          headerMode: 'none',
          mode: 'modal',
          transparentCard: true,
        }}
      /> */}

    </Stack.Navigator>
  }

  const verifyEmailRoutes = () => {
    return <Stack.Navigator screenOptions={{ headerShown: false }}>


      <Stack.Screen
        name="VerifyEmail"
        component={VerifyEmail}
        options={{
          headerShown: false,
          headerMode: 'none',
          mode: 'modal',
          transparentCard: true,
        }}
      />
    </Stack.Navigator>
  }


  const renderRoutes = () => {
    if (!isUserLoading) {
      if (!user.name) {
        return <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MyProfile" component={MyProfile} />
        </Stack.Navigator>
      } else if (!user.wallet) {
        return <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="CreateWalletScreen" component={CreateWalletScreen} />

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

          {/* <Stack.Screen name="Dashboard" component={DashboardScreen} /> */}

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

      }
      return normalRoutes()
    } else {
      return <View />
    }
  }
  return (


    routes
  )
}

export default NormalRoutes
