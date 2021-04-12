import React,  { useState } from 'react';
import { ScrollView,SafeAreaView, StyleSheet, Text, TextInput, Button, View, TouchableOpacity, Image } from 'react-native';
import { AppScreens, AuthStackParamList } from '../../../navigators/AuthFlowNavigator';
import { StackNavigationProp } from '@react-navigation/stack';

type SignupScreenNavigationProps = StackNavigationProp<AuthStackParamList, AppScreens.Signup>;

export type SignupParams = {
    username: string;
};

interface SignupScreenProps {
    route: { params: SignupParams };
    navigation: SignupScreenNavigationProps;
}

const styles = StyleSheet.create({
    btnLoginContainer: {
      marginTop: 200 ,
        alignSelf: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10
    },
    txtSignupScreen: {
        fontSize: 30
    },
    txtSignupScreenContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtUsername: {
        fontSize: 25,
        color: 'grey'
    },
    textInputContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 100,
    },
    textInput: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
        marginTop: 10,
        padding: 18,
        width: '100%'
    },
    loginBtn: {
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
        marginBottom: 40,
      },
});

const SignupScreen: React.FunctionComponent<SignupScreenProps> = (props) => {
    const { navigation, route } = props;
    
    const [username, setUsername] = useState<string>('');
    const [pass, setpass] = useState<string>('');
    const [email, setemail] = useState<string>('');

    let logged = true;

    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
            <Text style={styles.txtUsername}>Create an Account</Text>
            <View style={styles.textInputContainer}>

            <TextInput
                value={username}
                placeholder="username"
                style={styles.textInput}
                onChangeText={(text) => setUsername(text)
                }
            />
            <TextInput placeholder="password" secureTextEntry={true} style={styles.textInput}
            value={pass}
            onChangeText={(word) => setpass(word)
            }
            />
              <TextInput placeholder="confirm password" secureTextEntry={true} style={styles.textInput}
              value={email}
              onChangeText={(em) => setemail(em)}
              />

                <TextInput placeholder="Email" style={styles.textInput} />
           <TouchableOpacity
           style = {styles.loginBtn}
           onPress={() =>{
            if(username.length < 3){alert("username must be atleast 3 characters");}
            else if(pass.length < 6){alert("password must be atleast 6 characters")}
            else{alert("Welcome!");
            navigation.navigate(AppScreens.home)
          }
        }}
           >
               <Text> Signup</Text>
            </TouchableOpacity>
        
            </View>
            <View style={styles.btnLoginContainer}>
                <Text>have an account?</Text>
                <Button title="Login" onPress={() => navigation.pop()} />
            </View>
        </SafeAreaView>
        </ScrollView>
    );
};

export default SignupScreen;
