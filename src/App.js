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
import 'node-libs-react-native/globals.js';



import './Translations'
import Firebase, { FirebaseProvider } from './Firebase/FirebaseContext'

const App = () => (


  
  <Provider store={store}>

    <PersistGate loading={null} persistor={persistor}>
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <FirebaseProvider value={Firebase}>
          <ApplicationNavigator />
        </FirebaseProvider>

      </ApplicationProvider>
    </PersistGate>
    <Toast />

  </Provider>
)

export default App
