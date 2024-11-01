import React, {Component, useState} from "react";
import { Button, Text, TextInput, View, Image, StyleSheet, ImageBackground } from "react-native"
import { Header } from "./Header";

// import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';

const LoginScreen = ({navigation}) => {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  // const val = useContext(AuthContext);

//   const {isLoading, login} = useContext(AuthContext);

  return (
    <ImageBackground
    style={styles.background}
    source={require("../../assets/black-bg.jpg")}
  >
    <View style={styles.container}>
    <View style={styles.header}>
        <Image style={styles.logo} source={require('../../assets/logolog.png')} />
        <Text style={styles.headerText}>AXGG</Text>
    </View>
      {/* <Spinner visible={isLoading} /> */}
      <View style={styles.wrapper}>
        {/* <Text>{val}</Text> */}
        <TextInput
          style={styles.input}
          value={email}
          placeholder="Enter email"
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          value={password}
          placeholder="Enter password"
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        <View style={styles.loginButton}>
        <Text style={styles.loginText} onPress={() => {navigation.navigate('Home');}}>Login</Text>
        </View>
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60,
    marginHorizontal: 16,
    marginTop: 200,
    marginBottom: 20,
    borderRadius: 10
  },
  input: {
    paddingHorizontal: 30,
    textAlign: 'left',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    width: 260,
    height: 50,
    marginBottom: 12,
  },
  wrapper: {
    width: '80%',
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
  },
    loginButton: {
    backgroundColor: '#000',
    width: 260,
    height: 60,
    borderRadius: 10,
  },
  link: {
    color: 'blue',
  },
  loginText: {
    paddingVertical: 12,
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
  },
  loginButton: {
    backgroundColor: '#000',
    width: 195,
    height: 60,
    borderRadius: 10,
  },
  header: {
    height: 55,
    paddingTop: 10,
    backgroundColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
},
logo: {
    width: 50,
    height: 50,
    marginRight: 10,
},
headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
},
});

export default LoginScreen;