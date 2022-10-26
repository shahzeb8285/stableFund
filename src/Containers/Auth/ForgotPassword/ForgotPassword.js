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
import { AtomindText, HyperLink } from '@/Components'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'

/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */
const HeartIcon = props => <Icon {...props} name="heart" />

const ForgotPassword = ({ navigation }) => {
  const theme = useTheme()

  return (
    <Layout
      style={[
        styles.container,
        { backgroundColor: theme['color-primary-default'] },
      ]}
    >
      {/* <Image
        style={{ width: '100%', height: '50%' }}
        resizeMode="contain"
        source={require('../../../Assets/Images/auth.png')}
      /> */}
      <SafeAreaView style={{ width: '100%', height: '100%' }}>
        <ScrollView style={styles.loginContainer}>
          {/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} >

</LinearGradient> */}

          <View>
            <HyperLink
              text="Back"
              onPress={() => {
                navigation.goBack()
              }}
              style={{
                alignSelf: 'flex-start',
              }}
            />

            <AtomindText
              style={{ alignSelf: 'flex-start', marginTop: 10 }}
              category="h5"
            >
              Reset your password
            </AtomindText>

            <AtomindText
              style={{ alignSelf: 'flex-start', marginTop: 10 }}
              appearance="hint"
            >
              enter email address assiciated to your account in order to receive
              a reset password link shortly
            </AtomindText>

            <Input
              style={styles.input}
              size="large"
              textContentType="emailAddress"
              // value={value}
              placeholder="Email Address"
              // onChangeText={nextValue => setValue(nextValue)}
            />


            <Button
              style={[
                styles.loginButton,
                { backgroundColor: theme['color-primary-default'] },
              ]}
            >
            Send Reset Link
            </Button>

           
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

export default ForgotPassword
