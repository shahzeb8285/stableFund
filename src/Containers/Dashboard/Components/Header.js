import React from 'react'
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Tab,
  Text,
  ViewPager,
} from '@ui-kitten/components'
import { Icon } from 'react-native-eva-icons'
import { View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { TouchableOpacity } from 'react-native-gesture-handler'
import { AtomindText } from '@/Components'
import { navigate } from '@/Navigators/utils'

// const HomeIcon = props => {
//   return <Icon {...props} fill={props.style.tintColor} name="home-outline" />
// }

// const PortfolioIcon = props => {
//   return (
//     <Icon {...props} fill={props.style.tintColor} name="activity-outline" />
//   )
// }

// const DiscoverIcon = props => {
//   return <Icon {...props} fill={props.style.tintColor} name="compass-outline" />
// }

// const SettingsIcon = props => {
//   return (
//     <Icon {...props} fill={props.style.tintColor} name="settings-2-outline" />
//   )
// }

const Header = props => {
  const goToMYProfile = () => {
    navigate('MyProfile')
  }
  return (
    <View style={{ flexDirection: 'row',width:"100%", justifyContent:"space-between"}}>
      <View style={{
        flexDirection: 'row',
        width: '50%',
        // alignSelf:"baseline",
        borderWidth: 1, padding: 5,
        borderColor: "#fff", borderRadius: 5
      }}>
        <TouchableOpacity
          onPress={() => {
            goToMYProfile()
          }}
        >
          <Image
            style={{ height: 46, width: 46, borderRadius: 10 }}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/340px-Albert_Einstein_Head.jpg',
            }}
          />
        </TouchableOpacity>

        <View
          onPress={() => {
            goToMYProfile()
          }}
          style={{
            marginLeft: 10,
            flex: 1,

            justifyContent: 'center',
          }}
        >
          <AtomindText
            style={{
              fontWeight: '500',
              fontSize: 16,
              color: '#000',
            }}
          >
            John Doe
          </AtomindText>
          <AtomindText
            style={{
              fontWeight: '400',
              fontSize: 14,

              color: '#00000099',
            }}
          >
            0xa10...95af
          </AtomindText>
        </View>
      </View>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: "#fff",
          borderRadius:15,
          // alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          height: 50,
          width: 50,

        }}
      >
        <Image
          style={{
            height: 28,
            tintColor:"#fff",
            alignContent: 'center',
            alignSelf: 'center',
            width: 28,
            // borderRadius: 100,
          }}
          resizeMode="contain"
          source={require('../../../Assets/Icons/notification-received.png')}
        />
      </TouchableOpacity>
    </View>
  )
}

export default Header
