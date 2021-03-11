import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { Card, Button } from 'react-native-elements';
import { StyleSheet,FlatList,View, Text,TouchableOpacity,Image } from 'react-native';
import {NavigationContainer, useNavigation, useRoute} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';






export default function HomeScreen() {






	const navigation = useNavigation();
const route = useRoute();

const BASE_URL = '.assets';

const [products, setProducts] = useState([
  {
  	id:1,
    name: 'Khaki Suede Polish Work Boots',
    price: 149.99,
    img: "./assets/shoe1.jpeg"
  },
  {
  	id:2,
    name: 'Camo Fang Backpack Jungle',
    price: 39.99,
    img: `./assets/jacket1.jpeg`
  },
  {
  	id:3,
    name: 'Parka and Quilted Liner Jacket',
    price: 49.99,
    img: `./assets/jacket2.jpeg`
  },
  {
  	id:4,
    name: 'Cotton Black Cap',
    price: 12.99,
    img: "./assets/hat1.jpeg"
  },
]);


	return (
        <View>
        <FlatList 
     keyExtractor = {(item) => item.id}
     data = {products}
     renderItem = {({item}) => (
       	<TouchableOpacity onPress = {() => navigation.navigate("Details",{paramKey: item,})}>
       <View style={styles.row}>
       		<View style={styles.col}>
       				
           <Card>
           	<Image
        		style={styles.image}
     		   source={{uri: item.img}}
 		     />

            <Text style={{marginBottom: 10, marginTop: 20 }} h2>
                {item.name}
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
      
        )}
     />
        </View>
      );
}

const styles = StyleSheet.create({
  row: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
  },
  col: {
      flex: 1,
  },
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
