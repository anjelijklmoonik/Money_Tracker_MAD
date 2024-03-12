import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Logo from '../../assets/icon/logo.svg'


const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('SignIn'), 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Money Tracker</Text>
      <Logo />
    </View>
  )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container : {
        // flexDirection: 'column',
        backgroundColor: '#02CF8E',
        flex: 1,
        alignItems: 'center', // center main axis
        justifyContent: 'center',
    },
    text: {
        fontSize: 32,
        fontFamily: 'Poppins-Medium',
    }
});