import React from 'react';
import { Image,  View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';


export const Button = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchableOpacity}
            onPress={() => navigation.navigate('Order')}>
            <Image 
                style={styles.floatingButton}
                source={require('../../assets/orders.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableOpacity}
            onPress={() => navigation.navigate('Home')}>
            <Image 
                style={styles.floatingButton}
                source={require('../../assets/home.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableOpacity}
            onPress={() => navigation.navigate('Scanner')}>
            <Image 
                style={styles.floatingButton}
                source={require('../../assets/scan.png')}/>
            </TouchableOpacity>
        </View>
    )
    }

    const styles = StyleSheet.create({
        container: {
            paddingLeft: 80,
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
            color: 'white',
        },
        touchableOpacity: {
            backgroundColor: 'white',
            width: 10,
            height: 10,
            alignItems: 'center',
            justifyContent: 'center',
            right: 30,
            bottom: 30,
            padding: 30,
            borderRadius: 10,
            opacity: .9,
            margin: 5,
        },
    })
