import 'react-native-gesture-handler';import { StatusBar } from 'expo-status-bar';import React, {useState} from 'react';import { StyleSheet, Text, View,FlatList, SafeAreaView, TouchableOpacity,Button,Image,Card } from 'react-native';import {NavigationContainer} from '@react-navigation/native';import { createStackNavigator } from '@react-navigation/stack';import Product from "./Product";import HomeScreen from "./Home";import DetailsScreen from "./DetailsScreen";export default function App() {//   const [students, setStudents] = useState([//     {id:"1", name:"Shaun", lname:"Micheal" },//     {id:"2", name:"John" , lname:"Simons"},//     {id:"3" , name: "Sam" , lname:"Williams"},//     {id:"4" , name: "Something", lname: "Something"}    //     ]);//   var [student,setStudent] = useState("");  const Stack = createStackNavigator();  //   const newSheet = (item) => {//     console.log(item);//   }// function DetailsScreen({route,navigation}) {//   return(//     <SafeAreaView style={styles.container}>//     <Button onPress={()  => navigation.navigate("Home")} title="Home" />//     <Text style={styles.show}>First name : {route.params.paramKey.name}</Text>//     <Text style={styles.show}>Last name : {route.params.paramKey.lname}</Text>//     <Text style={styles.show}>ID : {route.params.paramKey.id}</Text>//     </SafeAreaView>//     );// }// function HomeScreen({navigation}) {//   return(//     //   <SafeAreaView style={styles.container}>//     // <FlatList //     // keyExtractor = {(item) => item.id}//     // data = {students}//     // renderItem = {({item}) => (//     //   <TouchableOpacity onPress = {() => navigation.navigate("Details",{paramKey: item,})}>//     //   <View style={styles.cell}>//     //   <Image source={require("./assets/testImage.jpeg")}/>//     //   <Text style={styles.heading}> {item.name} </Text>//     //   </View>//     //   </TouchableOpacity>      //     //    )}//     // />//     //   <StatusBar style="auto" />//     // </SafeAreaView>//     <SafeAreaView style = { styles.row }>//       <View style = {styles.col}>//         <Product/>//       </View>//     </SafeAreaView>//     );// }  return (    <NavigationContainer>      <Stack.Navigator>        <Stack.Screen name = "Home"         component = {HomeScreen}        title = "STOPnSHOP"        >        </Stack.Screen>        <Stack.Screen name="Details" component={DetailsScreen} />      </Stack.Navigator>    </NavigationContainer>  );}const styles = StyleSheet.create({  container: {    flex: 1,    backgroundColor: '#fff',    alignItems: 'center',      },  heading: {    fontSize: 20,    width : 350,    height: 40,    padding:10,    alignItems: "center",    justifyContent:"center",    margin:3  },  show: {    flexDirection: "row",    fontSize: 20,    justifyContent: "center",    alignItems : "center",    padding:10,    borderWidth: 1,    width:350  },  image : {    width: 100,    height: 150,    shadowColor:  "black",    shadowOpacity: 1,    shadowRadius: 1,    padding: 5,  },  cell:{    shadowColor: "black",    shadowRadius: 1,    shadowOpacity: 1,    height: 160,    width: 360,  },  row:{   flex: 1,   flexDirection:"row",   justifyContent: "center",  },  col:{   flex:1,  },});