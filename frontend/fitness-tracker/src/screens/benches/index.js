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
        marginTop: 70,
        fontSize: 30,
        justifyContent: "center",
        alignItems: 'center',
        color: 'black',
    },
    box:{
      width: Dimensions.get('window').width,
      height: 550,
      marginTop:10 ,
      backgroundColor: 'white',
      width: '105%'
    },
    button: {
        width: "60%",
        alignItems: "center",
        borderRadius: 25,
        height: 50,
        justifyContent: "center",
        marginTop: 500,
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

const benches = (props) => {
    const { navigation } = props;
    let [b, setb] = useState(0);
    
    return (
        <ScrollView>
        <SafeAreaView style={styles.container}>
            
                <View style={styles.textInputContainer}> 
                
                <Text style={styles.txtHello}>Press start when ready</Text>

          <View style={styles.sep}> 
                 </View>

         
                 <TouchableOpacity style={styles.button}
           
               
            
            >
                <Text>start</Text>
              </TouchableOpacity>  
         
          </View>
            
          
        </SafeAreaView>
        </ScrollView>
    );
};

export default benches;