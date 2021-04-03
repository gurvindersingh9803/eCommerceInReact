import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { Card } from 'react-native-elements';


import React, {useState, useEffect} from 'react';
import { StyleSheet,Dimensions, Text, View,FlatList, SafeAreaView, TouchableOpacity,Button,Image,Alert } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import axios from 'axios'


export default function Cart(){
	const STORAGE_KEY ="add_to_cart";
	const [cartData,setCartData] =useState([]);

	  function addToCart(item){

            fetch("http://10.0.2.2:5000/exercises/add", {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                product_id: item._id,
              }),
            });

         }

            function deleteCartProduct(item){




                  axios.delete(`http://10.0.2.2:5000/cart/${item.exercises[0].productImage}`)
                          .then(res => {  
                            console.log(res);  
                            console.log(res.data);  
                        
                          })  



                  }


      const getMyCartProducts = async () => {
         try {
             const cartProducts = await axios.get("http://10.0.2.2:5000/cart/myCart")
            console.log(Object.values(cartProducts.data));
            setCartData(cartProducts.data);
         
         } catch (err) {
           console.error(err.message);
         }
       };

         useEffect(() => {

          getMyCartProducts()


         },[]);


         const ItemView = ({item}) => {
             return (
               // Flat List Item
               <SafeAreaView>
               <TouchableOpacity onPress = {() => navigation.navigate("Details",{paramKey: item})}>
                      <View style={styles.row}>

                         <View style={styles.col}>

                             
                          <Card>
                          
                          <Image
                                     style={styles.image}
                                     source={{
                                             uri: `http://10.0.2.2:5000/${item.exercises[0].productImage}`
                                         }}                           />

                           <Text style={{marginBottom: 10, marginTop: 20 }} h2>
                               {item.exercises[0].name}
                           </Text>
                           <Text style={styles.price} h4>
                               $ {item.exercises[0].price}
                           </Text>
                           <Text h6 style={styles.description}>
                               added 2h ago
                           </Text>
                          <Button color="#ff6347" title="Remove from cart" onPress={() => {deleteCartProduct(item)}}>
                          </Button>
                       </Card>
                         
                         </View>
                      
                      </View>
                      
                      </TouchableOpacity>
                      </SafeAreaView>
             );
           };


	const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };



	return (

      <SafeAreaView style={{flex: 1}}>
        

        <View style={styles.container}>
          
          <FlatList
                    data={cartData}
                    keyExtractor={(item) => item.product_id}
                    ItemSeparatorComponent={ItemSeparatorView}
                    extraData={cartData}

                    renderItem={ItemView}
                  />
        </View>
      </SafeAreaView>
    );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',

  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 15,
    borderColor: '#000000',
    backgroundColor: '#FFFFFF',
  },

  title: {
          color: '#5a647d',
          fontWeight: 'bold',
          fontSize: 30
      },
      price: {
          fontWeight: 'bold',
          marginBottom: 10
      },
      description: {
          fontSize: 10,
          color: '#c1c4cd'
      },
      image : {
      width: Dimensions.get("window").width -10,
      height: 300,
      shadowColor:  "black",
      shadowOpacity: 1,
      shadowRadius: 1,
      padding: 5,

    },
    col:{
    	alignItems:"center"
    }
});
