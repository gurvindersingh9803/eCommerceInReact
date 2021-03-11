import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Product from "./Product";


// class HomeScreen extends React.Component {
//     render() {
//       return (
//         <View>
//             <Product/>
//         </View>
//       );
//     }
// }


// export default HomeScreen;
export default function HomeScreen({navigation}) {

	return (
        <View>
            <Product/>
        </View>
      );
}