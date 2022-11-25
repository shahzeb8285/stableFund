import React, { useRef } from 'react'
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import {
  Button,
  IconRegistry,
  Layout,
  Input,
  useTheme,
  Text,
} from '@ui-kitten/components'

import { AtomindText, HyperLink } from '@/Components'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import ReactNativePinView from 'react-native-pin-view'
import { Icon } from 'react-native-eva-icons'


const WelcomeScreen1 = ({ navigation }) => {
  const theme = useTheme()

  return (
    <Layout
      style={[
        styles.container,
        { padding: 20, backgroundColor: theme['color-primary-default'] },
      ]}
    >
      <SafeAreaView style={{ width: '100%', height: '100%' }}>
        <View
          style={{
            height: '100%',
            flex: 1,
          }}
        >
          <View
            style={{
              // backgroundColor: 'red',
              // alignContent: 'center',
              height: '100%',
              // alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              source={require('../../Assets/Images/newIcon/newWhite.png')}
              resizeMode="contain"
              style={{
                height: 150,
                width: 150,
                marginTop: 20,
                marginBottom: 50,
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}
            />
            <AtomindText
              style={{
                alignSelf: 'center',
                color: '#fff',
                fontFamily: 'DMSans-Regular',
                // marginTop: 10,
                // marginBottom: 10,
                fontWeight: '700',
                fontSize: 26,
              }}
              category="h5"
            >
              A solution that is
            </AtomindText>

            <AtomindText
              style={{
                alignSelf: 'center',
                color: '#fff',
                fontFamily: 'DMSans-Regular',
                // marginTop: 10,
                // marginBottom: 10,
                fontWeight: '700',
                fontSize: 26,
              }}
              category="h5"
            >
              comprehensive and
            </AtomindText>

            <AtomindText
              style={{
                alignSelf: 'center',
                color: '#fff',
                fontFamily: 'DMSans-Regular',
                // marginTop: 10,
                // marginBottom: 10,
                fontWeight: '700',
                fontSize: 26,
              }}
              category="h5"
            >
              cost-effective!
            </AtomindText>
            <AtomindText
              style={{
                fontWeight: '400',
                textAlign: 'center',
                marginTop: 10,
                color: '#FFFFFF99',
                fontFamily: 'DMSans-Regular',
              }}
            >
              Press continue to log in or register to{'\n'}Accredited and start
              organizing{'\n'} your portfolio.
            </AtomindText>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("WelcomeScreen2")
          }}
          style={[
            styles.loginButton,
            { backgroundColor: theme['color-primary-default'] },
          ]}
        >
          <AtomindText
            style={{
              fontWeight: '500',
              textAlign: 'center',
              fontSize: 16,
              // marginTop: 10,
              color: '#FFFFFF',
              fontFamily: 'DMSans-Regular',
            }}
          >
            Enter Accredited
          </AtomindText>
        </TouchableOpacity>
      </SafeAreaView>
    </Layout>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginContainer: {
    width: '100%',
    flex: 1,
    // justifyContent: 'center',
  },
  text: {
    // textAlign: 'center',
  },
  input: {
    // flex: 1,
    marginTop: 10,
    // margin: 5,
    // padding:18,
    borderRadius: 10,
  },
  loginButton: {
    marginVertical: 16,
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    paddingVertical: 14,
    // padding:50,
    width: '100%',
  },
})

export default WelcomeScreen1