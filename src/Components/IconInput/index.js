import React, { useEffect, useState } from 'react'

import { TextInput, View, Image } from 'react-native'
import { useTheme, Text } from '@ui-kitten/components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from 'react-native-eva-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AtomindText from '../AtomindText'
import LinearGradient from 'react-native-linear-gradient'

const IconInput = props => {
  const theme = useTheme()
  const [value,setValue] = useState("")
  useEffect(()=>{
    if(props.value){
      setValue(props.value)
    }
  },[props])
  const [isFocussed, setFocussed] = useState(false)
  return (
    <View style={{marginVertical:5}}>
      {props.title?
      <AtomindText style={{fontWeight:"600",
      fontSize:16,marginBottom:5}}>
        {props.title}
        </AtomindText> : null}
      
        <LinearGradient
        colors={['#6B56DF', '#BA4BFB']}
        style={{
          padding: 1,
          borderRadius: 15,
          // paddingVertical: 14,
        }}
     >
       <View
      style={[
        {
          flexDirection: 'row',
          borderRadius: 15,

          // marginVertical: 8,
          // borderRadius: 10,
          // borderWidth: isFocussed ? 1.3 : 0,
          backgroundColor: '#fff',
          
          paddingHorizontal: 20,
          paddingVertical: 10,
          width: '100%',
          alignContent: 'center',
          alignItems: 'center',
        },
        props.style?{...props.style}:{}
      ]}
    >
      {/* <Image
        source={props.icon}
        resizeMode="contain"
        style={{ height: 20, width: 20 }}
      /> */}
      {props.icon}
      <TextInput
        value={value}
        secureTextEntry={props.textContentType === 'password'}
        onFocus={f => {
          setFocussed(true)
        }}
        onBlur={() => {
          setFocussed(false)
        }}
        onChangeText={(e)=>{
          setValue(e)
          if(props.onChangeText){
            props.onChangeText(e)
          }
        }}
   
        textContentType={props.textContentType}
        placeholder={props.placeholder}
        style={{
          padding: 5,
          flex: 1,
          marginLeft: 10,
          color:"#000",
          fontFamily: 'DMSans-Regular',
          fontWeight: '400',
          fontSize: 16,
        }}
      />

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
              
              props.leftIconStyle?{...props.leftIconStyle}:{ height: 20, width: 20 }}
          />
        </TouchableOpacity>
      ) : null}
        </View>
        </LinearGradient>
   </View>
  )
}

export default IconInput
