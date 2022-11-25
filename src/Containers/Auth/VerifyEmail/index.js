import React from 'react'
import { StyleSheet, View, Image, ImageBackground } from 'react-native'
import {
    Button,
    Icon,
    IconRegistry,
    Layout,
    Input,
    useTheme,
} from '@ui-kitten/components'
import { AtomindButton, AtomindText, HyperLink } from '@/Components'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import BackButton from '@/Components/BackButton'
import Header from '@/Components/Header'
import { useState } from 'react'
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message'


const VerifyEmail = ({ navigation,user }) => {
    const theme = useTheme()
    const [isLoading, setLoading] = useState(false)

    const sendLink = async () => {
        setLoading(true)
    try{
       
        const user= auth().currentUser


        // await auth().currentUser.sendEmailVerification({
        //     handleCodeInApp: true,
        //     url: 'app/email-verification',
        //    });
      

        // await auth().signInWithEmailAndPassword("shahzeb8285@gmail.com","BirdCom@123")

        Toast.show({
            type: 'success',
            text1: 'Success',
            text2: 'Verification Email Sent To Your Inbox',
          })
    }catch(err){
        console.error(err)
    }

           setLoading(false)

    }
    return (
        <Layout style={[styles.container, { backgroundColor: '#fff' }]}>
            <SafeAreaView style={{ width: '100%', height: '100%' }}>
                <ScrollView style={styles.loginContainer}>
                    <Header
                        hideBackButton
                        text={'Verify your Email'}
                        onBack={() => {
                            navigation.goBack()
                        }}
                    />
                    <View>


                        <AtomindButton
                            disabled={isLoading}
                            isLoading={isLoading}
                            onPress={() => {
                                sendLink()
                            }}
                            text="Send Verification Link d"
                            style={[
                                styles.loginButton,
                                { backgroundColor: theme['color-primary-default'] },
                            ]}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Layout>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginContainer: {
        width: '100%',
        flex: 1,
        // justifyContent: 'center',
        padding: 20,
        backgroundColor: 'white',
        // alignItems: 'center',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    text: {
        // textAlign: 'center',
    },
    input: {
        // flex: 1,
        marginTop: 10,
        // margin: 5,
        // padding:18,
        borderRadius: 10,
    },
    loginButton: {
        marginVertical: 16,
        borderRadius: 10,
        // padding:50,
        width: '100%',
    },
})

export default VerifyEmail
