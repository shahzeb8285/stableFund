import { AtomindButton, AtomindText, BackButton } from '@/Components'
import React, { useState, useRef } from 'react'
import { useEffect } from 'react'
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native'
import { RNCamera } from 'react-native-camera'
import moment from 'moment'
import { getStakingContract } from '@/Utils/Crypto/Transactions'
import Toast from 'react-native-toast-message'
import { useSelector } from 'react-redux'
import { Config } from '@/Config'
import { getDoc } from '@/Firebase/Firestore'
import { VasernDB } from '../../DB'


const StakingDetails = ({ route, navigation }) => {

    const [data, setData] = useState()
    const [coin, setCoin] = useState()
    const [isHarvestLoading, setHarvestLoading] = useState(false)
    const [isWithdrawLoading, setWithdrawLoading] = useState(false)

    const user = useSelector(state => state.user.data)


    useEffect(() => {

        console.log(JSON.stringify(route))
        setData(route.params.data)
        setCoin(route.params.coin.stakingToken)
    }, [route])


    const renderClaimButtonText = () => {
        

        if (Date.now() / 1000 > data.nextRewardWithdrawTime) {
            return "Harvest Reward"
        }

        return `Claim Rewards at ${moment(data.nextRewardWithdrawTime * 1000).format("DD MMM YYYY hh:mm a")}`
    }

    const handleHarvestReward = async () => {


        setHarvestLoading(true)

        try {
            const { contract, signer, provider } = await getStakingContract(route.params.coin, user.wallet.privateKey)

            const investmentId = data.id
            const functionGasFees = await contract.estimateGas.claimReward(investmentId);
            const gasPrice = await provider.getGasPrice();
            const finalGasPrice = (gasPrice.mul(functionGasFees));
            const myBalance = await signer.getBalance()
            if (myBalance.lt(finalGasPrice)) {
                Toast.show({
                    type: 'error',
                    text1: 'Error',
                    text2: "Insuffient Balance To Pay Gas Fee",
                })
                return
            }
            const tx = await contract.claimReward(investmentId);



            const txnPayload = {
                hash: tx.hash,
                timestamp: Date.now(),
                actionName: "Claim Reward",
                chainId: route.params.coin.chainID
            }
            try {
                const { Transaction } = VasernDB

                await Transaction.insert(txnPayload, save = true)

            } catch (err) {
                console.error(err)
            }
            Toast.show({
                type: 'success',
                text1: 'Success',
                text2: "Transaction Submitted To Blockchain",
            })


        } catch (err) {
            console.log({ err })
        }

        setHarvestLoading(false)
        if (navigation) {
            navigation.goBack()
        }
    }



    const handleWithdraw = async () => {
        setWithdrawLoading(true)

        try {
            const { contract, signer, provider } = await getStakingContract(route.params.coin, user.wallet.privateKey)

            const investmentId = data.id
            const functionGasFees = await contract.estimateGas.withdraw(investmentId);

            const gasPrice = await provider.getGasPrice();

            const finalGasPrice = (gasPrice.mul(functionGasFees));
            const myBalance = await signer.getBalance()
            if (myBalance.lt(finalGasPrice)) {
                Toast.show({
                    type: 'error',
                    text1: 'Error',
                    text2: "Insuffient Balance To Pay Gas Fee",
                })
                return
            }
            const tx = await contract.withdraw(investmentId);
          
            const txnPayload = {
                hash: tx.hash,
                timestamp: Date.now(),
                actionName: "Withdraw",
                chainId: route.params.coin.chainID
            }
            try {
                const { Transaction } = VasernDB

                await Transaction.insert(txnPayload, save = true)

            } catch (err) {
                console.error(err)
            }

            Toast.show({
                type: 'success',
                text1: 'Success',
                text2: "Transaction Submitted To Blockchain",
            })


            

        } catch (err) {
            console.log({ err })
        }

        setWithdrawLoading(false)


        if (navigation) {
            navigation.goBack()
        }

    }



    const isStakingFinished = ()=>{
        const endDate =  moment(data.timestamp*1000).add(50,"day").unix()
        return Date.now() / 1000 < endDate || data.isFinished
    }
    if(!coin  || !data){
        return <View/>
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
                                {moment(Number(data.timestamp)*1000).add(50,"day").format("DD MMM YYYY hh:mm a")}
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



                        <AtomindButton
                            onPress={() => {
                                handleHarvestReward()
                            }}
                            isLoading={isHarvestLoading}

                            text={renderClaimButtonText()}
                            disabled={Date.now() / 1000 < data.nextRewardWithdrawTime} />
                        <AtomindButton onPress={() => {
                            handleWithdraw()
                        }} isLoading={isWithdrawLoading} text={data.isFinished ? "Closed" : "Withdraw"}
                            disabled={
                               isStakingFinished()
                            } />

                    </View>

                </View> : null}


            </View>
        </View>
    )
}



export default StakingDetails
