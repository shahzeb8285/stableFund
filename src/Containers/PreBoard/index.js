import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import {
  Button,
  Icon,
  IconRegistry,
  Layout,
  Input,
  useTheme,
} from '@ui-kitten/components'
import {
  AtomindButton,
  AtomindText,
  BackButton,
  Dot,
  HyperLink,
  IconInput,
  IconText,
  OTPView,
} from '@/Components'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import CountryPicker from 'react-native-country-picker-modal'
import EmailIcon from '@/Assets/SVG/EmailIcon'
import PasswordIcon from '@/Assets/SVG/PasswordIcon'
import OnBoardBg from '@/Assets/Images/OnboardBG.png'
// import PasswordIcon from '@/Assets/SVG/PasswordIcon'
import OnBoard1 from './Fragments/OnBoard1'
import OnBoard2 from './Fragments/OnBoard2'
import OnBoard3 from './Fragments/OnBoard3'

const OnBoard = ({ navigation }) => {
  const theme = useTheme()

  const [currentIndex, setCurrentIndex] = useState(0)

  const getFragment = () => {
    let fragment = null

    if (currentIndex == 0) {
      fragment = <OnBoard1 />
    } else if (currentIndex == 1) {
      fragment = <OnBoard2 />
    } else if (currentIndex == 2) {
      fragment = <OnBoard3 />
    }

    return fragment
  }

  const onClickLetsStart = () => {
    navigation.navigate('LoginScreen')
  }
  return (
    <ImageBackground source={OnBoardBg} style={{ flex: 1 }}>
      <SafeAreaView
        style={[styles.container, { paddingHorizontal: 25, marginTop: 20 }]}
      >
        <ScrollView>
          <View style={[styles.container]}>
            <TouchableOpacity
              onPress={() => {
                onClickLetsStart()
              }}
              style={{
                borderRadius: 8,
                borderWidth: 1,
                borderColor: '#E2E2E2',
                justifyContent: 'flex-end',
                alignContent: 'flex-end',
                alignItems: 'flex-end',
                alignSelf: 'flex-end',
                backgroundColor: '#fff',
                padding: 10,
                paddingHorizontal: 15,
              }}
            >
              <AtomindText style={{ fontWeight: '700' }}>Skip</AtomindText>
            </TouchableOpacity>
            <View style={{ marginTop: 80 }}>{getFragment()}</View>
          </View>
        </ScrollView>
        <AtomindButton
          text={currentIndex == 2 ? "Let's Start" : 'Next'}
          onPress={() => {
            if (currentIndex == 2) {
              onClickLetsStart()
            } else {
              setCurrentIndex(currentIndex + 1)
            }
          }}
        />
      </SafeAreaView>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#E8EEF2',
  },
  loginContainer: {
    // width: '100%',
    flex: 1,
    // backgroundColor: 'blue',

    padding: 20,
    // alignItems: 'center',
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
    // padding:50,
    width: '100%',
  },
})

export default OnBoard
