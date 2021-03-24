import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';

import { StyleSheet,Dimensions, Text, View,FlatList, SafeAreaView, TouchableOpacity,Button,Image,Card,Alert } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

export default function Cart(){
	const STORAGE_KEY ="add_to_cart";
	const [data,setData] =useState([]);

	const retrieveData = async () => {
  		try{
  		  const value = await AsyncStorage.getItem(STORAGE_KEY);
  	  if(value !== null){
  		  	
  	    alert(value);
  	  }
	  }catch(error){
		    alert(error);
	  }
	}
useEffect(() =>{
	

},[]);

const ItemView = ({item}) => {
    return (
      // Flat List Item
      <SafeAreaView>
      <TouchableOpacity onPress = {() => navigation.navigate("Details",{paramKey: item,})}>
             <View style={styles.row}>

                <View style={styles.col}>

                    
                 <Card>
                 
                 <Image
                            style={styles.image}
                             source={{uri: item.productImage}}
                           />

                  <Text style={{marginBottom: 10, marginTop: 20 }} h2>
                      {item.title}
                  </Text>
                  <Text style={styles.price} h4>
                      $ {item.price}
                  </Text>
                  <Text h6 style={styles.description}>
                      added 2h ago
                  </Text>
                 
                  
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



	return(
		<View>
		<Button title="helper" onPress={() => retrieveData()} />
		<Text>{data.title}
		</Text>
		
		</View>
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
      height: 350,
      shadowColor:  "black",
      shadowOpacity: 1,
      shadowRadius: 1,
      padding: 5,

    },
    col:{
    	alignItems:"center"
    }
});
