
import React from 'react'
import { TouchableOpacity } from "react-native-gesture-handler"
import AtomindText from "./AtomindText"




const MenuItem = ({ text, leftIcon, rightIcon }) => {
    return (
      <TouchableOpacity
        style={{
          paddingVertical: 20,
          flexDirection: 'row',
          // justifyContent:"center",
          alignContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          borderBottomColor: '#EDEDED',
          borderBottomWidth: 0.2,
        }}
      >
        {leftIcon}
        <AtomindText
          style={{
            fontWeight: '500',
            marginHorizontal: 24,
            justifyContent: 'center',
            // textAlign: 'center',
            color: '#000',
            flex: 1,
            fontSize: 16,
          }}
        >
          {text}
        </AtomindText>
  
        {rightIcon}
      </TouchableOpacity>
    )
  }

  export default MenuItem