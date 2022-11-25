import React, { useCallback } from 'react'

import { TouchableOpacity } from "react-native-gesture-handler"
import ReferralIcon from "@/Assets/SVG/ReferralIcon"
import AtomindText from "../AtomindText"
import { View } from "react-native"
import Toast from 'react-native-toast-message'
import Clipboard from '@react-native-clipboard/clipboard'

export  default  CopyReferralLink = ()=>{




    const handleClickToCopy = ()=>{

        const link = "handleClickToCopy"

        Toast.show({
            type: 'success',
            text1: 'Copied!',
            text2: "Referral Link Copied",
          })
         Clipboard.setString(link);
          
    }

    return <>
    <TouchableOpacity

onPress={() => {
    handleClickToCopy()
}}
style={[
  {
    flexDirection: "row",
    backgroundColor: "#F4EFFF",
  },
]}
>

<View style={{ 
    // backgroundColor: "#fff",
padding:10,
borderRadius:10,
 textAlign: "center", margin: 10 }}>

  <ReferralIcon/>
</View>

<View style={{
  textAlign: "center",
  
  justifyContent: "center"
}}>
  <AtomindText
    style={{
      fontSize: 15,
      color: "#000",
      fontWeight: '700',
    }}
  >
   Click To Copy Your Referral Link

  </AtomindText>



  <AtomindText style={{
    fontSize: 14,

    fontWeight: '500',
    color: "#000",

  }}>
   Send & Share Your Referral Link To Earn{'\n'}Unlimited Rewards
  </AtomindText>

</View>

</TouchableOpacity>
    </>
}