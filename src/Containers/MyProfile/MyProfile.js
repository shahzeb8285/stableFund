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
import RightIcon from '@/Assets/SVG/RightArrow'
import ProfileIcon from '@/Assets/SVG/ProfileIcon'
import MyAccount from '@/Assets/SVG/MyAccount'
import InvestorStatus from '@/Assets/SVG/InvestorStatus'
import AboutIcon from '@/Assets/SVG/AboutIcon'

import { AtomindText, BackButton, HyperLink, MenuItem } from '@/Components'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import ReactNativePinView from 'react-native-pin-view'
import { Icon } from 'react-native-eva-icons'
import { navigationRef } from '@/Navigators/utils'
import { useState } from 'react'
import types, { KYC_INVESTOR_STATUS } from '@/Config/types'

const MyProfile = ({ navigation }) => {
  const theme = useTheme()
  const { BEING_REVIEWED, DEFAULT, DENIED, SUCCESS } = types.KYC_INVESTOR_STATUS
  const [status, setStatus] = useState(0)

  const renderStatus = () => {
    let color = null
    let text = ''
    if (status === BEING_REVIEWED) {
      text = 'Your ID is being reviewed!'
      color = '#E2C738'
    } else if (status === DEFAULT) {
      text = 'Verify your Identity!'
      color = '#474ca8'
    } else if (status === DENIED) {
      text = 'Your ID has been denied!'
      color = '#C31004'
    } else if (status === SUCCESS) {
      text = 'ID Approved!'
      color = '#2AC304'
    }
    return (
      <TouchableOpacity
        style={{
          justifyContent: 'space-between',
          alignContent: 'center',
          alignItems: 'center',

          flexDirection: 'row',
          backgroundColor: color,
          paddingVertical: 20,
          marginHorizontal: 10,
          marginTop: 15,
          borderRadius: 20,
        }}
      >
        <ProfileIcon fill="#fff" style={{ marginHorizontal: 15 }} />

        <AtomindText
          style={{
            color: '#fff',
            alignContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            fontSize: 16,
            fontWeight: '500',
          }}
        >
          {text}
        </AtomindText>
        <RightIcon fill="#fff" style={{ marginHorizontal: 15 }} />
      </TouchableOpacity>
    )
  }
  return (
    <SafeAreaView style={[{ padding: 15, flex: 1, backgroundColor: '#fff' }]}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <BackButton
            onPress={() => {
              navigationRef.goBack()
            }}
          />

          <TouchableOpacity style={{ margin: 15, padding: 15 }}>
            <Image
              style={{
                height: 30,

                alignContent: 'center',
                alignSelf: 'center',
                width: 30,
                borderRadius: 100,
              }}
              resizeMode="contain"
              source={require('../../Assets/Icons/notification-received.png')}
            />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              //   goToMYProfile()
            }}
          >
            <Image
              style={{
                height: 120,
                alignContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                width: 120,
                borderRadius: 100,
              }}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/340px-Albert_Einstein_Head.jpg',
              }}
            />
          </TouchableOpacity>

          <View
            style={{
              alignContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}
          >
            <AtomindText
              style={{ color: '#000', fontSize: 25, fontWeight: '500' }}
            >
              John Doe
            </AtomindText>
            <AtomindText
              style={{ color: '#00000099', fontSize: 18, fontWeight: '400' }}
            >
              Investor Status: Not Submitted
            </AtomindText>
          </View>
        </View>

        {renderStatus()}
        <View style={{ marginHorizontal: 20 }}>

            <AtomindText style={{marginTop:20,fontWeight:"500",fontSize:16,color:"#666666"}}>
                General
            </AtomindText>
          <MenuItem
            text={'My Account'}
            leftIcon={<MyAccount fill="#474ca8" />}
            rightIcon={<RightIcon fill="#666666" />}
          />
          <MenuItem
            text={'Investor Status'}
            leftIcon={<InvestorStatus fill="#474ca8" />}
            rightIcon={<RightIcon fill="#666666" />}
          />
          <MenuItem
            text={'About Accredited'}
            leftIcon={<AboutIcon fill="#474ca8" />}
            rightIcon={<RightIcon fill="#666666" />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
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

export default MyProfile
