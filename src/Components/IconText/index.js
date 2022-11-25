import React, { useEffect, useState } from 'react'

import { TextInput, View, Image } from 'react-native'
import { useTheme, Text } from '@ui-kitten/components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from 'react-native-eva-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AtomindText from '../AtomindText'

const IconText = props => {
  const theme = useTheme()
  const [isFocussed, setFocussed] = useState(false)
  return (
    <TouchableOpacity
    onPress={()=>{
      if(props.onClick){
        props.onClick()
      }
    }}
      style={[
        {
          flexDirection: 'row',
          marginVertical: 8,
          borderRadius: 10,
          borderWidth: isFocussed ? 1.3 : 0,
          backgroundColor: '#fff',
          borderRadius: 15,
          paddingHorizontal: 20,
          borderColor: theme['color-primary-default'],
          paddingVertical: 10,
          width: '100%',
          alignContent: 'center',
          alignItems: 'center',
        },
      ]}
    >
      <Image
        source={props.icon}
        resizeMode="contain"
        style={{ height: 20, width: 20 }}
      />
      <AtomindText
        onFocus={f => {
          setFocussed(true)
        }}
        onBlur={() => {
          setFocussed(false)
        }}
        style={{
          padding: 5,
          flex: 1,
          marginLeft: 10,
          fontFamily: 'DMSans-Regular',
          // backgroundColor:"red",
          fontWeight: '400',
          fontSize: 16,
        }}
      >
        {props.text}
      </AtomindText>

      {props.leftIcon ? (
        <TouchableOpacity
          onPress={() => {
            if (props.onLeftIconClick) {
              props.onLeftIconClick()
            }
          }}
        >
          <Image
            source={props.leftIcon}
            resizeMode="contain"
            style={
              props.leftIconStyle
                ? { ...props.leftIconStyle }
                : { height: 20, width: 20 }
            }
          />
        </TouchableOpacity>
      ) : null}
    </TouchableOpacity>
  )
}

export default IconText
