import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthFlowNavigator from './src/navigators/AuthFlowNavigator';
import MyTabs from './src/navigators/index1';

export default function App() {
   
    const[Auth, setAuth] = useState(false);

    if(Auth === false){

    return (
        <NavigationContainer>
            <AuthFlowNavigator/>
        </NavigationContainer>
    );
}
    else{
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}

}
