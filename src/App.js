import 'react-native-gesture-handler'
import React, { useState, useEffect, useCallback } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from '@/Store'
import ApplicationNavigator from '@/Navigators/Application'
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { default as theme } from './Theme/theme.json'; // <-- Import app theme
import Toast from 'react-native-toast-message';

import messaging from '@react-native-firebase/messaging';

import 'node-libs-react-native/globals.js';



import './Translations'
import Firebase, { FirebaseProvider } from './Firebase/FirebaseContext'
// import { Transaction } from './DB/Modals/TransactionsModal'
// const {RealmProvider} = RealmContext;


// Get the notification
messaging().setBackgroundMessageHandler(async remoteMessage => {
    // Extract the body
    let message_body = remoteMessage.notification.body;
    // Extract the title
    let message_title = remoteMessage.notification.title;
    // Extract the notification image 

   
    // Send a notification alert
    Alert.alert(message_title, message_body);
});
const App = () => {

  return <Provider store={store}>
 
    <PersistGate loading={null} persistor={persistor}>
      <ApplicationProvider {...eva} theme={{  ...theme, }}>
        <FirebaseProvider value={Firebase}>
          <ApplicationNavigator />
        </FirebaseProvider>

      </ApplicationProvider>
    </PersistGate>
    <Toast />

  </Provider>
}



export default App
     