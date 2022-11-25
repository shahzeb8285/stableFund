import React, { useEffect, useState } from 'react'

import { TouchableOpacity, View } from 'react-native'
import { useTheme, Text } from '@ui-kitten/components'
import { TextInput } from 'react-native-gesture-handler'
import { useRef } from 'react'

const OTPInput = props => {
  const theme = useTheme()
  const [text, setText] = useState('')
  return (
    <TouchableOpacity
      onPress={() => {
        if (props.inputRef.current) {
          props.inputRef.current.focus()
        }
      }}
      style={[
        {
          marginHorizontal: 10,
          backgroundColor: '#fff',
          height: 50,
          borderWidth: 1,
          borderColor: props.isError
            ? theme['color-danger-500']
            : theme['color-primary-500'],
          width: 50,
          justifyContent: 'center',
          borderRadius: 15,
          alignSelf: 'flex-end',
          color: 'color-primary-500',
        },
      ]}
    >
      <TextInput
        ref={props.inputRef}
        maxLength={1}
        //   value={'1222shaze'}
        onChangeText={t => {
          if (props.onChangeText) {
            props.onChangeText(t)
          }
          setText(t)
        }}
        onKeyPress={({ nativeEvent }) => {
          nativeEvent.key === 'Backspace' && text.length == 0 && props.onBack
            ? props.onBack()
            : null
        }}
        style={{
          textAlign: 'center',
          justifyContent: 'center',
          alignContent: 'center',
          alignSelf: 'center',
          textAlignVertical: 'center',
          fontSize: 20,
          fontWeight: '400',
          fontFamily: 'DMSans-Regular',
        }}
        keyboardType="number-pad"
      />
    </TouchableOpacity>
  )
}
const OTPView = props => {
  const theme = useTheme()
  const [styles, setStyles] = useState({})
  const input1Ref = useRef(null)
  const input2Ref = useRef(null)
  const input3Ref = useRef(null)
  const input4Ref = useRef(null)
  const [enteredOTP, setEnteredOTP] = useState(['', '', '', ''])

  useEffect(() => {
    if (props.style) {
      setStyles(props.style)
    }
  }, [props.style])

  useEffect(() => {
    props.onOTPEntered ? props.onOTPEntered(enteredOTP) : null
  }, [enteredOTP])
  return (
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
      <OTPInput
        inputRef={input1Ref}
        onChangeText={t => {
          const otp = [...enteredOTP]
          otp[0] = t
          setEnteredOTP([...otp])
          if (t) {
            input2Ref.current.focus()
          }
        }}
      />
      <OTPInput
        inputRef={input2Ref}
        onChangeText={t => {
          const otp = [...enteredOTP]
          otp[1] = t
          setEnteredOTP([...otp])
          if (t) {
            input3Ref.current.focus()
          }
        }}
        onBack={() => {
          input1Ref.current.focus()
        }}
      />
      <OTPInput
        inputRef={input3Ref}
        onChangeText={t => {
          const otp = [...enteredOTP]
          otp[2] = t
          setEnteredOTP([...otp])
          if (t) {
            input4Ref.current.focus()
          }
        }}
        onBack={() => {
          input2Ref.current.focus()
        }}
      />
      <OTPInput
        inputRef={input4Ref}
        onChangeText={t => {
          const otp = [...enteredOTP]
          otp[3] = t
          setEnteredOTP([...otp])
        }}
        onBack={() => {
          input3Ref.current.focus()
        }}
      />
    </View>
  )
}

export default OTPView
