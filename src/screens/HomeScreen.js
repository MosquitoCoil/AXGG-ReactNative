import React from "react";
import { Text, Image, SafeAreaView, View, StyleSheet, ScrollView } from "react-native";
import { Button } from './Button';
import { Logout } from './Logout';
import { Header } from "./Header";


const HomeScreen = ({navigation}) => {

    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
        <Header/>
        <View style={styles.categoryContainer}>
        </View>
        <View style={styles.featuredContainer}>
          <Text style={styles.featuredText}>Products</Text>
          <ScrollView horizontal={true}>
            <View style={styles.featured}>
              <Image style={styles.featuredImage} source={require('../../assets/luffy.png')} />
              <Text style={styles.featuredTitle}>Luffy</Text>
              <Text style={styles.featuredPrice}>₱899.00</Text>
            </View>
            <View style={styles.featured}>
              <Image style={styles.featuredImage} source={require('../../assets/nami.png')} />
              <Text style={styles.featuredTitle}>Nami</Text>
              <Text style={styles.featuredPrice}>₱799.00</Text>
            </View>
            <View style={styles.featured}>
              <Image style={styles.featuredImage} source={require('../../assets/zoro.png')} />
              <Text style={styles.featuredTitle}>Zoro</Text>
              <Text style={styles.featuredPrice}>₱899.00</Text>
            </View>
            <View style={styles.featured}>
              <Image style={styles.featuredImage} source={require('../../assets/nicorobin.png')} />
              <Text style={styles.featuredTitle}>Nico Robin</Text>
              <Text style={styles.featuredPrice}>₱899.00</Text>
            </View>
            <View style={styles.featured}>
              <Image style={styles.featuredImage} source={require('../../assets/usupp.png')} />
              <Text style={styles.featuredTitle}>Usopp</Text>
              <Text style={styles.featuredPrice}>₱899.00</Text>
            </View>
            <View style={styles.featured}>
              <Image style={styles.featuredImage} source={require('../../assets/brook.png')} />
              <Text style={styles.featuredTitle}>Brook</Text>
              <Text style={styles.featuredPrice}>₱899.00</Text>
            </View>
            <View style={styles.featured}>
              <Image style={styles.featuredImage} source={require('../../assets/sanji.png')} />
              <Text style={styles.featuredTitle}>Sanji</Text>
              <Text style={styles.featuredPrice}>₱899.00</Text>
            </View>
            <View style={styles.featured}>
              <Image style={styles.featuredImage} source={require('../../assets/franky.png')} />
              <Text style={styles.featuredTitle}>Franky</Text>
              <Text style={styles.featuredPrice}>₱899.00</Text>
            </View>
            <View style={styles.featured}>
              <Image style={styles.featuredImage} source={require('../../assets/chopper.png')} />
              <Text style={styles.featuredTitle}>Tony Chopper</Text>
              <Text style={styles.featuredPrice}>₱899.00</Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.featuredContainer}></View>
        <Text style={styles.featuredText}>     Advertisement</Text>
        <ScrollView horizontal={true}></ScrollView>
        <View>
        <Image style={styles.bgImg} source={require('../../assets/ad.png')}/>
        </View>
        <View>
        <Image style={styles.bgImg} source={require('../../assets/ads.png')}/>
        </View>
        <View>
        <Image style={styles.bgImg} source={require('../../assets/adss.png')}/>
        </View>
        <View>
        <Image style={styles.bgImg} source={require('../../assets/adsss.png')}/>
        </View>
        </ScrollView>
        <Button
            // buttons={['Scan', 'Home', 'Register']}
            // doSomethingAfterClick={printButtonLabel}
        />
        {/* <TouchableOpacity 
            style={styles.touchableOpacity}
            onPress={() => navigation.navigate('Scan')}>
                <Image 
                style={styles.floatingButton}
                source={require('../../assets/scan.png')}/>
        </TouchableOpacity> */}
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    titleStyle: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },
    touchableOpacity: {
        flexDirection: 'row',
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    floatingButton: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    },
    bgImg: {
        resizeMode: 'contain',
        width: 400,
        height: 200,
        marginTop: 15,
        marginLeft: 15,
        marginBottom: 15,
        borderRadius: 10
    },
    center: {
        alignItems: 'center',
        marginRight: 20,
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
        marginRight: 10,
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    categoryContainer: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    categoryText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white'
    },
    categoryList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    category: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: 'white',
        marginBottom: 5
    },
    categoryIcon: {
        width: 30,
        height: 30,
        marginBottom: 5,
    },
        categoryTitle: {
    fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
    },
    featuredContainer: {
        marginTop: 50,
        paddingHorizontal: 20,
    },
    featuredText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },
    featured: {
        alignItems: 'center',
        marginRight: 20,
    },
    featuredImage: {
        resizeMode: 'contain',
        width: 150,
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 20
    },
    featuredTitle: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    featuredPrice: {
        fontSize: 14,
        color: 'white',
        marginBottom: 20
    },
})

export default HomeScreen;