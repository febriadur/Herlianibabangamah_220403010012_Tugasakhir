import HomeScreen from "./screen/HomeScreen.tsx";
import {Text,TextInput,View,Button,Alert } from 'react-native';
import ProdukSepatu from "./screen/ProdukSepatu.tsx";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const tabs=createBottomTabNavigator();
const Mainnavigasi = ()=>{
  return (
    <tabs.Navigator>
      <tabs.Screen name="Home" component={HomeScreen}/>
      
      <tabs.Screen name="ProdukSepatu" component={ProdukSepatu}/>
      
    </tabs.Navigator>
  )
}
export default function App(){
  
  return(
    
   <NavigationContainer>
    <Mainnavigasi/>
   </NavigationContainer>
  );
}