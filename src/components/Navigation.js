import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/OrderScreen";
import LoginScreen from "../screens/LoginScreen";
import ScannerScreen from "../screens/ScannerScreen";
import OrderScreen from "../screens/OrderScreen";
// import Button from "../screens/Button";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerStyle:  {backgroundColor: 'black'}, headerShown: false}}/>
                <Stack.Screen name="Scanner" component={ScannerScreen} options={{headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white'}}/>
                <Stack.Screen name="Home" component={HomeScreen} options={{headerStyle: {backgroundColor: 'black'}, headerShown: false}}/>
                <Stack.Screen name="Order" component={OrderScreen} options={{headerStyle: {backgroundColor: 'black'}, headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;