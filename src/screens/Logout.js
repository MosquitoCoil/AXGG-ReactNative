import React from 'react';
import { Image, Text,  View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from '@react-navigation/native';

export const Logout = () => {

    const navigation = useNavigation ();

    return (
        <View style={styles.container}>
        <TouchableOpacity style={styles.touchableOpacity}
        onPress={() => navigation.navigate('Login')}>
        <ImageBackground 
        style={styles.floatingButton}
        source={require('../../assets/logout.png')}
        />
        <Text style={styles.floatingText}>Logout</Text>        
        </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingLeft: 170,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    floatingButton: {
        resizeMode: 'contain',
        width: 30,
        height: 30,
    },
    floatingText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 5,
    },
    touchableOpacity:{
        flexDirection: 'row',
        alignItems: 'center',
    },
})