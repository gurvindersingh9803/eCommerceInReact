import 'react-native-gesture-handler';
import React, {useState,useEffect} from 'react';
import { Card, Button } from 'react-native-elements';
import { StatusBar, StyleSheet,FlatList,View, Text,TouchableOpacity,Image,SafeAreaView,TextInput,Dimensions } from 'react-native';
import {NavigationContainer, useNavigation, useRoute} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import axios from 'axios'

export default function Category(){

	const[flag,setFlag] = useState(0);
	const STORAGE_KEY ="add_to_cart";
	var [toBeStored,setToBeStored] = useState([]);
	const navigation = useNavigation();
	const route = useRoute();
	const [search, setSearch] = useState(route.name);
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  const getPosts = async () => {
  try {
const userPosts = await axios.get("http://10.0.2.2:5000/exercises/")

    
    console.log(userPosts.data);
    setMasterDataSource(userPosts.data)
        setFilteredDataSource(userPosts.data)

  
  } catch (err) {
    console.error(err.message);
  }
};

  useEffect(() => {

  	getPosts()


  },[]);
  const saveData = async () => {
    try{
      await AsyncStorage.setItem(STORAGE_KEY,JSON.stringify(toBeStored));
      alert("Added to cart");
    }
    catch(e){
      alert("failed");
    }
  }

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


  const ItemView = ({item}) => {

    alert(item)

    return (
      // Flat List Item
      <SafeAreaView>
      <TouchableOpacity onPress = {() => navigation.navigate("Details",{paramKey: item,})}>
             <View style={styles.row}>

                <View style={styles.col}>

                    
                 <Card>
                 
                 <Image
                            style={styles.image}
                             source={{ uri: `http://10.0.2.2:5000/${item.productImage}`}}
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
                 <Button title="Add To Cart" onPress={() => {setToBeStored(item),saveData()}}>
                 </Button>
                  
              </Card>
                
                </View>
             
             </View>
             
             </TouchableOpacity>
             </SafeAreaView>
    );
  };



  




  const searchFilterFunction = () => {
  		
    // Check if searched text is not blank
    
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(
        function (item) {


          const itemData = item.category
            ? item.category.toUpperCase()
            : ''.toUpperCase();
          const textData = route.name.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      
    
  };

    
	 return (

    <SafeAreaView style={{flex: 1}}>
      
    
    
    
      <View style={styles.container}>
      	
      
       
        <FlatList


                  data={filteredDataSource.name}
                  keyExtractor={(item, index) => index.toString()}
                  ItemSeparatorComponent={ItemSeparatorView}
                  renderItem={ItemView}
                />
      </View>
    </SafeAreaView>
  );
};

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