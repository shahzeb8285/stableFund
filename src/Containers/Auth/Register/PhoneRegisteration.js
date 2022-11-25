import React from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'
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
} from '@/Components'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import CountryPicker from 'react-native-country-picker-modal'
import PhoneIcon from '@/Assets/SVG/PhoneIcon'

/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */

const PhoneRegisteration = ({ navigation }) => {
  const theme = useTheme()
  const [selectedCountry, setSelectedCountry] = useState()

  const [showCountryPicker, setShowCountryPicker] = useState(false)
  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView style={[styles.container]}>
        <View style={[styles.container, { marginTop: 25 }]}>
          <BackButton
            onPress={() => {
              navigation.goBack()
            }}
          />

          <View style={{ paddingHorizontal: 25, marginTop: 20 }}>
            <AtomindText style={{ fontWeight: '500', fontSize: 26 }}>
              Create an Account
            </AtomindText>
            <AtomindText
              style={{
                alignSelf: 'flex-start',
                fontWeight: '400',
                color: '#00000099',
                marginTop: 5,
                marginBottom: 15,
              }}
            >
              Enter your Country of Origin & your phone number to continue to
              the next step...
            </AtomindText>

            <IconText
              icon={selectedCountry ? { uri: selectedCountry.flag } : ''}
              text={
                selectedCountry ? selectedCountry.name : 'Choose Your Country'
              }
              leftIcon={require('../../../Assets/Icons/arrowDown.png')}
              leftIconStyle={{
                height: 15,
                width: 15,
              }}
              onClick={() => {
                setShowCountryPicker(true)
              }}
            />

            {showCountryPicker ? (
              <CountryPicker
                visible
                withFilter
                withAlphaFilter
                withModal
                onClose={() => {
                  setShowCountryPicker(false)
                }}
                onSelect={cntry => {
                  setSelectedCountry({
                    name: cntry.name,
                    code: cntry.callingCode[0],
                    flag: `https://flagcdn.com/32x24/${cntry.cca2.toLowerCase()}.png`,
                  })
                }}
              />
            ) : null}

            <IconInput
              icon={<PhoneIcon/>}
              placeholder="000 - 000 - 000 - 000"
              textContentType={'telephoneNumber'}
            />

            <View style={{ flex: 1, height: '100%' }} />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          marginLeft: 25,
          marginRight: 25,
        }}
      >
        <AtomindButton
          text="Continue"
          onPress={() => {
            navigation.navigate('RegisterVerifyOtp')
          }}
        />
        <View
          style={{
            // flex: 1,
            width: '100%',
            marginBottom: 10,
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Dot />
          <Dot filled />
          <Dot />
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EEF2',
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

export default PhoneRegisteration
