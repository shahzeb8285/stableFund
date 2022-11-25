import { AtomindText } from '@/Components'
import React from 'react'
import { View, Image } from 'react-native'
import { Card } from '@ui-kitten/components';
import { TouchableOpacity } from 'react-native-gesture-handler';

import moment from "moment"
import { useNavigation } from '@react-navigation/native';


const OneInvestmentCard = ({ data, selectedCoin, onPress}) => {
    return <TouchableOpacity
        onPress={()=>{onPress(data)}}
    
    
    style={{
        padding: 10, borderStyle: "dashed", borderWidth: 1,
        borderColor: "#dec357",
        backgroundColor: "#ffefaf69", marginTop: 5, borderRadius: 12
    }}>
        <View style={{
            flexDirection: "row",
        }}>

            <View>
                <View style={{ flexDirection: "row",flex: 1 }}>
                    <Image source={selectedCoin.stakingToken.image}
                        style={{
                            height: 25, width: 25, marginRight: 5, alignContent: "center",
                            alignItems: "center", alignSelf: "center"
                        }} />
                    <View style={{ margin: 2 }}>
                        <AtomindText style={{ fontSize: 15, fontWeight: "500" }}>
                            Amount
                        </AtomindText>

                        <AtomindText style={{ fontSize: 15, fontWeight: "800" }}>
                            {data.amount / 1e18} {selectedCoin.stakingToken.name}
                        </AtomindText>
                    </View>


                </View>

                <View style={{ flexDirection: "row",
                // backgroundColor:"red",
                // flex: 1,
                 marginTop: 2,  }}>


                    <View style={{ margin: 2,width:"50%"}}>
                        <AtomindText style={{ fontSize: 15, fontWeight: "500" }}>
                            Deposit Date
                        </AtomindText>

                        <AtomindText style={{ fontSize: 15, fontWeight: "800" }}>
                            {moment(data.timestamp).format("DD MMM hh:mm a")}
                        </AtomindText>
                    </View>

                    <View style={{ margin: 2,width:"50%" }}>
                        <AtomindText style={{ fontSize: 15, fontWeight: "500" }}>
                            Withdraw Date
                        </AtomindText>

                        <AtomindText style={{ fontSize: 15, fontWeight: "800" }}>
                            {moment(data.timestamp).format("DD MMM hh:mm a")}
                        </AtomindText>
                    </View>
                </View>
            </View>
        </View>
    </TouchableOpacity>
}

const MyInvestments = ({ investments = [], selectedCoin,onPress }) => {
    const navigator = useNavigation()
    return <View style={{ marginHorizontal: 10, paddingBottom: 20 }}>
        <AtomindText style={{
            fontWeight: '800',
            justifyContent: 'center',
            // textAlign: 'center',
            color: '#000',
            flex: 1,

            fontSize: 20,
        }}>
            Your Investments
        </AtomindText>


        <View>
            {investments.map((investment) => {
                return <OneInvestmentCard 
                onPress={(data)=>{
                // onPress(data)
                navigator.navigate("StakingDetails",{data,coin:selectedCoin})
                }}
                data={investment} selectedCoin={selectedCoin} />
            })}
        </View>
    </View>
}

export default MyInvestments