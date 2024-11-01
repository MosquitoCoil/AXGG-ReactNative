import React from 'react';
import { Image, Text,  View, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Logout } from './Logout';

export const Header = () => {

    const navigation = useNavigation ();

    return (
        <ScrollView style={styles.container}>
        <View style={styles.header}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
        {/* <Text style={styles.headerText}>AXGG</Text> */}
        <Logout/>
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    header: {
        height: 80,
        paddingTop: 36,
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 50,
        height: 50,
        marginRight: 30,
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
})