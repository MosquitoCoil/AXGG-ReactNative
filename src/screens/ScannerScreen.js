import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';


export default function ScanScreen({}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned')
  const [id, setId] = useState('');
  const [stock, setStock] = useState('');

  
//   const updateTable = async (id, stock) => {
//     const url = 'http://192.168.1.20/sia_api/endpoints/update-stock.php';
  
//     try {
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ id, stock }),
//       });
  
//       const result = await response.text();
//       console.log(result);
//     } catch (error) {
//       console.error(error);
//     }
//   };
    const handleUpdate = (id, stock) => {
    // Send HTTP request to updateData.php
    fetch('http://192.168.43.126/sia_api/endpoints/update-stock.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `id=${id}&stock=${stock}`,
    })
      .then((response) => response.text())
      .then((result) => {
        // Handle the response
        Alert.alert(result);
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
    
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    //console.log('Type: ' + type + '\nData ' + data)
    setText(`    Type: ${type}
    Data: ${data}`);
    // Call the updateTable function with the desired parameters
    handleUpdate(data, 1);
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission
        </Text>
        </View> 
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{margin:10}}>Requesting for camera permission
        </Text>
        <Button title = {'Allow Camera'} onPress={() => askForCameraPermission()}/>
        </View> 
    );
  }
  return (
    <View style={styles.container}>
    <Text style={styles.sectionTitle}>SCANNER</Text>
      <View style={styles.barcodebox}>
        <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{height: 500, width: 800}} />
      </View>
      <Text style={styles.maintext}>{text}</Text>
      <TouchableOpacity style={styles.border}>
      {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='black'/>}
      </TouchableOpacity>
    </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 800,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'black'
  },
  maintext: {
    fontSize: 18,
    margin: 10,
    color: 'white',
  },
  sectionTitle: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});