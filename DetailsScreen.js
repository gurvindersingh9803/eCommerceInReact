import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';

import { StyleSheet, Text, View,FlatList, SafeAreaView, TouchableOpacity,Button,Image,Card,Dimensions } from 'react-native';
import {NavigationContainer, useNavigation, useRoute} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



 export default function DetailsScreen(){
 		const route = useRoute();
 		const navigation = useNavigation();

      return (
      	<View>
        <SafeAreaView style={styles.view}>
        	<Image style={styles.Image}
        	source={{uri:route.params.paramKey.productImage}}/>
        </SafeAreaView>
        <View>
            <Text style={styles.name}>{route.params.paramKey.title}</Text>
            <Text style={styles.price}>$ {route.params.paramKey.price}</Text>
        <Button title="Add To Cart" />
         </View>  
        </View>
      );
    }

const styles = StyleSheet.create({

	Image:{
		width:Dimensions.get('window').width -10,
		height: Dimensions.get("window").height - 300,
		shadowColor:  "black",
   	 	shadowOpacity: 10,
   		 shadowRadius: 10,
   		 borderWidth:1,
   		 margin:10,
   		 shadowColor:"black",
   		 alignItems:"center",

	},
	name:{
		fontSize:30,
		padding:10,

	},
	price:
	{
		fontSize: 25,
		fontWeight:"bold",
		paddingLeft:5,
	},
	view:{
		alignItems:"center"
	}
});