import 'react-native-gesture-handler'
import React,{useState,useEffect,useCallback} from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from '@/Store'
import ApplicationNavigator from '@/Navigators/Application'
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { default as theme } from './Theme/theme.json'; // <-- Import app theme
import Toast from 'react-native-toast-message';
import { createConnection, getRepository, Connection } from 'typeorm/browser';


import 'node-libs-react-native/globals.js';



import './Translations'
import Firebase, { FirebaseProvider } from './Firebase/FirebaseContext'
import { Transaction } from './DB/Modals/Transactions'
// const {RealmProvider} = RealmContext;

const App = () => {

  const [defaultConnection, setconnection] = useState(null);
  const setupConnection = useCallback(async () => {
    try {
      const connection = await createConnection({
        type: 'react-native',
        database: 'test',
        location: 'default',
        logging: ['error', 'query', 'schema'],
        synchronize: true,
        entities: [Transaction],
      });
      setconnection(connection);
      // getAuthors();
    } catch (error) {
      console.log(error);
    }
  }, []);



  
  useEffect(() => {
    if (!defaultConnection) {
      setupConnection();
    }
  }, []);




  return <Provider store={store}>

    <PersistGate loading={null} persistor={persistor}>
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <FirebaseProvider value={Firebase}>
          <ApplicationNavigator />

        </FirebaseProvider>

      </ApplicationProvider>
    </PersistGate>
    <Toast />

  </Provider>
}



export default App
