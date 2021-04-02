import 'react-native-gesture-handler';
import React, {useState,useEffect} from 'react';
import { Card, Button } from 'react-native-elements';
import { StatusBar, StyleSheet,FlatList,View, Text,TouchableOpacity,Image,SafeAreaView,TextInput,Dimensions } from 'react-native';
import {NavigationContainer, useNavigation, useRoute} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import axios from 'axios'






const App = () => {
  var [toBeStored,setToBeStored] = useState([]);
  var [cart,setCart] = useState([]);
  const STORAGE_KEY ="add_to_cart";
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const route = useRoute();
    const navigation = useNavigation();
    const Tab = createMaterialTopTabNavigator();


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

     function addToCart(item){

        fetch("http://10.0.2.2:5000/cart/add", {
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

  

   

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(
        function (item) {
          const itemData = item.name
            ? item.name.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

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
                            source={{
                                    uri: `http://10.0.2.2:5000/${item.productImage}`
                                }}                           />

                  <Text style={{marginBottom: 10, marginTop: 20 }} h2>
                      {item.name}
                  </Text>
                  <Text style={styles.price} h4>
                      $ {item.price}
                  </Text>
                  <Text h6 style={styles.description}>
                      added 2h ago
                  </Text>
                 <Button title="Add To Cart" onPress={() => {addToCart(item)}}>
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

      
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search your favourite products here..."
        />
        <FlatList
                  data={filteredDataSource.products}
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
  col:{
    alignItems:"center"
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
    addtocart:{
      tintColor:"white",
      backgroundColor:"gray",
      fontSize:25,
    }
});

export default App;