import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';

import { StyleSheet, Text, View,FlatList, SafeAreaView, TouchableOpacity,Image } from 'react-native';
import { Card, Button } from 'react-native-elements';
import {NavigationContainer, useNavigation, useRoute} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function Product({item}) {
    const navigation = useNavigation();
    const route = useRoute();
      return (
        
        <Card>
           
           <Image source = {require("./assets/testImage.jpeg")} style={styles.image}/>
            <Text style={{marginBottom: 10, marginTop: 20 }} h2>
                Name
            </Text>
            <Text style={styles.price} h4>
                $ 
            </Text>
            <Text h6 style={styles.description}>
                added 2h ago
            </Text>
           
            
        </Card>
        
      );
    
}


const styles = StyleSheet.create({
    name: {
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
    width: 350,
    height: 400,
    shadowColor:  "black",
    shadowOpacity: 1,
    shadowRadius: 1,
    padding: 5,

  },
});


