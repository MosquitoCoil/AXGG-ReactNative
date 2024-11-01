import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Modal} from 'react-native';
import close from '../../assets/close.png';
import { Button } from './Button';
import { Header } from './Header';



export default function OrderScreen() {
  const[visible, setVisible] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);


  
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [data, setData] = useState([])
  const [loading, setloading] = useState(true)

  const url = "http://192.168.43.126/sia_api/endpoints/orders.php";


  useEffect(()=>{
        fetch(url)
        .then((response)=>response.json())
        .then((json)=>setData(json))
        .catch((error)=>console.error(error))
        .finally(() => setloading(false));
      },[]);
  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <Header/>
      <ScrollView
        style={styles.containerStyle}
        keyboardShouldPersistTaps='handled'
      >
        {/* Orders */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>PAID ORDERS</Text>
          <View style={styles.items}>
            {/* This is where the tasks will go! */}
            {loading ? ( <Text>Loading...</Text>) : (
          data.map((orders)=>(
            <View style={styles.wrapper}>
              <View style={styles.wrapper1}>
              <TouchableOpacity style={styles.modal} onPress = {() => {
  setSelectedOrderId(orders.ord_id);
  show();
}}>


              <Text style={styles.modalOrders}>Order ID: {orders.ord_id}</Text>
              {/* <Text style={styles.modalOrders}>Name: {orders.full_name}</Text>
              <Text style={styles.modalOrders}>Contact No.: {orders.contact}</Text>
              <Text style={styles.modalOrders}>Mode of deliver: {orders.mod_}</Text>
              <Text style={styles.modalOrders}>Mode of payment: {orders.mop}</Text>
              <Text style={styles.modalOrders}>Status: {orders.status}</Text>
              <Text style={styles.modalOrders}>Note: {orders.note}</Text>
              <Text style={styles.modalOrders}>Total: {orders.total}</Text>
              <Text style={styles.modalOrders}>Order date: {orders.ord_date}</Text> */}
              </TouchableOpacity>
              <Modal visible={visible} style={styles.modal}>
              <TouchableOpacity style={styles.modal} onPress = {hide}>
              <Image source={close} style={{
                    width: 20,
                    height: 20,
                    tintColor: 'black',
                    marginTop: 40,
                    marginLeft: 360,

                  }}></Image>
              </TouchableOpacity>
              <Text style={styles.modalHeader}></Text>
              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  marginHorizontal: 36,
                  marginVertical: 30,
                }}
              />
              {data.filter((order) => order.ord_id === selectedOrderId).map((order) => (
    <View key={order.ord_id}>
    <Text style={styles.modalOrders}>Order: {order.ord_id}</Text>
    <Text style={styles.modalOrders}>Name: {order.full_name}</Text>
    <Text style={styles.modalOrders}>Contact No.: {order.contact}</Text>
    <Text style={styles.modalOrders}>Mode of deliver: {order.mod_}</Text>
    <Text style={styles.modalOrders}>Mode of payment: {order.mop}</Text>
    <Text style={styles.modalOrders}>Status: {order.status}</Text>
    <Text style={styles.modalOrders}>Note: {order.note}</Text>
    <Text style={styles.modalOrders}>Total: {order.total}</Text>
    <Text style={styles.modalOrders}>Order date: {order.ord_date}</Text>
  </View>
  ))}
              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  marginHorizontal: 36,
                  marginVertical: 30,
                }}
                />
                                                                                     
              
              <View style={{
                flex: 1,
                flexDirection: 'column',
              }}>
              </View>
            </Modal>
              </View>

            </View>
          ))
        )}
          </View>
        </View>
        
      </ScrollView>
      <Button/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  containerStyle: {
    flexGrow: 1,
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    fontWeight: 'bold',
    fontSize: 50,
  },
  wrapper: {
    backgroundColor: 'black'
  },
  wrapper1: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginBottom: 20,
    marginTop: 10,
    height: 60,
    borderRadius: 20,
    alignItems: 'center',
    paddingTop: 15,
    paddingRight: 15,

  },
  wrapperText: {
    paddingLeft: 18,
    paddingTop: 20,
    fontWeight: 'bold',
    fontSize: 22,

  },
  modalHeader: {
    fontWeight: 'bold',
    fontSize: 36,
    paddingTop: 50,
    paddingLeft: 40
  },
  modalOrders: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 36,
  },
  modalDetails: {
    fontSize: 16,
    paddingHorizontal: 36,
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
});