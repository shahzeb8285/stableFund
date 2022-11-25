import { AtomindButton, AtomindText, BackButton } from '@/Components'
import React, { useState, useRef } from 'react'
import { useEffect } from 'react'
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native'
import { RNCamera } from 'react-native-camera'
import moment from 'moment'
const StakingDetails = ({ route, navigation }) => {

    const [data, setData] = useState()
    const [coin, setCoin] = useState()
    const [isLoading, setLoading] = useState(false)


    useEffect(() => {
        setData(route.params.data)
        setCoin(route.params.coin.stakingToken)
    }, [route])

    const renderClaimButtonText = () => {

        if (Date.now() / 1000 > data.nextRewardWithdrawTime) {
            return "Harvest Reward"
        }

        return `Claim Rewards at ${moment(data.nextRewardWithdrawTime * 1000).format("DD MMM YYYY hh:mm a")}`
    }
    return (
        <View
            style={{
                backgroundColor: '#F5F5F5',
                flex: 1,
            }}
        >
            <View
                style={{
                    padding: 15,
                    paddingHorizontal: 25,
                    flex: 1,
                    marginTop: 20,
                }}
            >



                <View style={{ flexDirection: 'row' }}>
                    <BackButton
                        onPress={() => {
                            if (navigation) {
                                navigation.goBack()
                            }
                        }}
                    />

                    <AtomindText
                        style={{
                            textAlign: 'center',
                            fontSize: 18,
                            fontWeight: '500',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            // flex:1
                        }}
                        category="h5"
                    >
                        Staking Details
                    </AtomindText>
                </View>



                {data ? <View style={{ marginTop: 20, paddingHorizontal: 15 }}>


                    <View style={{
                        flexDirection: "row",
                    }}>


                        <View style={{ margin: 2, width: "50%" }}>
                            <AtomindText style={{ fontSize: 15, fontWeight: "500" }}>
                                Deposit Date
                            </AtomindText>

                            <AtomindText style={{ fontSize: 15, fontWeight: "800" }}>
                                {moment(data.timestamp * 1000).format("DD MMM YYYY hh:mm a")}
                            </AtomindText>
                        </View>

                        <View style={{ margin: 2, width: "50%" }}>
                            <AtomindText style={{ fontSize: 15, fontWeight: "500" }}>
                                Withdraw Date
                            </AtomindText>

                            <AtomindText style={{ fontSize: 15, fontWeight: "800" }}>
                                {moment(data.timestamp * 1000).add(1, "month").format("DD MMM YYYY hh:mm a")}
                            </AtomindText>
                        </View>




                    </View>




                    <View style={{
                        flexDirection: "row",
                        marginTop: 10
                    }}>


                        <View style={{ margin: 2, width: "50%" }}>
                            <AtomindText style={{ fontSize: 15, fontWeight: "500" }}>
                                Deposit Amount
                            </AtomindText>

                            <AtomindText style={{ fontSize: 15, fontWeight: "800" }}>
                                {data.amount / 10 ** coin.decimals}  {coin.name}
                            </AtomindText>
                        </View>

                        <View style={{ margin: 2, width: "50%" }}>
                            <AtomindText style={{ fontSize: 15, fontWeight: "500" }}>
                                Status
                            </AtomindText>

                            <AtomindText style={{ fontSize: 15, color: data.isFinished ? "green" : "#6B56DF", fontWeight: "800" }}>
                                {data.isFinished ? "Finished" : "On Going"}
                            </AtomindText>
                        </View>




                    </View>


                    <View style={{
                        flexDirection: "row",
                        marginTop: 10
                    }}>

                        <View style={{ margin: 2, width: "50%" }}>
                            <AtomindText style={{ fontSize: 15, fontWeight: "500" }}>
                                Pending Rewards
                            </AtomindText>

                            <AtomindText style={{ fontSize: 15, fontWeight: "800" }}>
                                {data.pendingRewards / 10 ** coin.decimals} {coin.name}

                            </AtomindText>
                        </View>

                        <View style={{ margin: 2, width: "50%" }}>
                            <AtomindText style={{ fontSize: 15, fontWeight: "500" }}>
                                Rewards Claimed
                            </AtomindText>

                            <AtomindText style={{ fontSize: 15, fontWeight: "800" }}>
                                {data.rewardWithdrawn / 10 ** coin.decimals} {coin.name}
                            </AtomindText>
                        </View>





                    </View>

                    <View style={{ marginTop: 10 }}>



                        <AtomindButton isLoading={isLoading} text={renderClaimButtonText()} disabled={Date.now() / 1000 < data.nextRewardWithdrawTime} />
                        <AtomindButton isLoading={isLoading} text="Withdraw" disabled={Date.now() / 1000 < moment(data.timestamp * 1000).add(1, "month").unix()} />

                    </View>

                </View> : null}


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 22
    },
    modalView: {
        margin: 20,

        backgroundColor: 'white',
        borderRadius: 8,
        padding: 14,
        alignItems: 'center',
        shadowColor: '#000',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 5,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700',
    },
})

export default StakingDetails
