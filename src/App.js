import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from '@/Store'
import ApplicationNavigator from '@/Navigators/Application'
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { default as theme } from './Theme/theme.json'; // <-- Import app theme
import Toast from 'react-native-toast-message';


import './Translations'
import { LoginScreen } from './Containers'

const App = () => (
  <Provider store={store}>
    {/**
     * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
     * and saved to redux.
     * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
     * for example `loading={<SplashScreen />}`.
     * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
     */}     
    <PersistGate loading={null} persistor={persistor}>
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
    <ApplicationNavigator />
   

    </ApplicationProvider>
    </PersistGate>
    <Toast />

  </Provider>
)

export default App
