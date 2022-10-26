import React from 'react'
import { useEffect } from 'react'

import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AtomindShimmer from '../AtomindShimmer'
import AtomindText from '../AtomindText'
import { Toggle } from '@ui-kitten/components';

const OneTokenSearchRow = ({ coin,onChecked,isChecked }) => {
  const { name, image, price, changeIn24Hours, symbol } = coin


  const [checked, setChecked] = React.useState(false);


  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
    onChecked(isChecked,coin.id)
  };

  return (
    <View
      style={{
        paddingVertical: 20,
        flexDirection: 'row',
        borderTopWidth: 0.2,
        borderTopColor: '#EDEDED',
        borderBottomWidth: 0.2,
        borderBottomColor: '#EDEDED',
      }}
    >
      <Image source={{ uri: image }} style={{ height: 46, width: 46 }} />
      <View
        style={{ flex: 1, marginLeft: 15, justifyContent: 'center', flex: 1 }}
      >
        <AtomindText style={{ fontWeight: '500', fontSize: 16, color: '#000' }}>
          {name}
        </AtomindText>
    



      </View>


      <Toggle checked={checked} onChange={onCheckedChange}/>
    
    </View>
  )
}

export default OneTokenSearchRow
