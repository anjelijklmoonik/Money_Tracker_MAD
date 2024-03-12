import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

const SignIn = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.header}>Sign In</Text>

      <Text>Email Address</Text>
      <TextInput>Type your email address</TextInput>

      <Text>Password</Text>
      <TextInput>Type your password</TextInput>
      
      <TouchableOpacity>
        <Text>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Create new account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container : {
    flex: 1,
  },
  header: {
    width:360,
    height: 108,
  },
  header2: {
    width: 75,
    height: 33,
    top: 37,
    left: 24,
  },
});