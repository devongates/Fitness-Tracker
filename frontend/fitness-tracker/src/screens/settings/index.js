import React, { useState} from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { AppScreens, AuthStackParamLists } from '../../navigators/AuthFlowNavigator';

import { ScrollView } from 'react-native-gesture-handler';


const styles = StyleSheet.create({

    btnSignupContainer: {
        alignItems: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10
    },
    textInput: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
        marginTop: 10,
        padding: 18,
        width: '100%'
    },
    textInputContainer: {
        width: Dimensions.get('window').width,
        alignItems: 'center',
    },
    txtHello: {
        marginTop: 160,
        fontSize: 30,
        justifyContent: "center",
        alignItems: 'center',
        color: '#b60f00',
    },
    box:{
      width: Dimensions.get('window').width,
      height: 400,
      marginTop:40 ,
      backgroundColor: 'white',
      width: '105%'
    },
    button: {
        borderWidth: 2,
        width: "60%",
        alignItems: "center",
        borderRadius: 10,
        height: 50,
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#b60f00",
      },
      image: {
        marginBottom: 0,
        width: Dimensions.get('window').width,
        height: 300,

      },
      signup:{
          marginTop: 100,
      },
      sep:{
        marginTop: 20,  
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: "80%"
      }

});

const settings = (props) => {
    const { navigation } = props;

    return (
        <ScrollView>
        <SafeAreaView style={styles.container}>
        
           
            
             <View style={styles.textInputContainer}> 
                
                <Text style={styles.txtHello}>settings</Text>
                
             <View style={styles.sep}> 
                 </View>

             <TouchableOpacity style={styles.button}
              onPress={() =>{
                navigation.navigate(AppScreens.settings)
              }}
             >
              <Text>change password</Text>
               </TouchableOpacity>

              <View style={styles.sep}> 
                 </View>
                
                 <TouchableOpacity style={styles.button}
              onPress={() =>{
                navigation.navigate(AppScreens.settings)
              }}
             >
              <Text>edit workout</Text>
               </TouchableOpacity>
            
               <View style={styles.sep}> 
                 </View>

             </View>
         
            
            
             <View style={styles.signup}>
                <Button title="Sign out" onPress={() => navigation.navigate(AppScreens.Welcome)} />
             </View>
     </SafeAreaView>
    </ScrollView>
    );
};

export default settings;