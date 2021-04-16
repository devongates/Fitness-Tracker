import React, { useState } from 'react';
import {
    ScrollView,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    Button,
    View,
    TouchableOpacity,
    Dimensions,
    Keyboard,
    Image
} from 'react-native';
import { AppScreens, AuthStackParamList } from '../../../navigators/AuthFlowNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';

type SignupScreenNavigationProps = StackNavigationProp<AuthStackParamList, AppScreens.Signup>;

export type SignupParams = {
    username: string;
};

interface SignupScreenProps {
    route: { params: SignupParams };
    navigation: SignupScreenNavigationProps;
}

const SignupScreen: React.FunctionComponent<SignupScreenProps> = (props) => {
    const { navigation, route } = props;

    const [username, setUsername] = useState<string>('');
    const [pass, setpass] = useState<string>('');
    const [passTwo, setPassTwo] = useState<string>('');
    const [email, setemail] = useState<string>('');

    const handlePress = () => {
        if (username.length < 3) {
            alert('username must be atleast 3 characters');
        } else if (pass.length < 6) {
            alert('password must be atleast 6 characters');
        } else if (pass !== passTwo) {
            alert("passwords don't match");
        } else {
            const newUser = {
                username: username,
                password: pass
            };
            axios
                .post('http://localhost:5000/users/add', newUser)
                .then((res) => console.log(res.data))
                .catch((err) => console.log(err));
            navigation.navigate(AppScreens.home, { username });
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.txtHello}>Create an Account</Text>
            <View style={styles.textInputContainer}>
                <TextInput
                    value={username}
                    placeholder="username"
                    placeholderTextColor="#808080"
                    style={styles.textInput}
                    onChangeText={(text) => setUsername(text)}
                />
                <TextInput
                    placeholder="password"
                    placeholderTextColor="#808080"
                    secureTextEntry={true}
                    style={styles.textInput}
                    textContentType={'oneTimeCode'}
                    blurOnSubmit={false}
                    onSubmitEditing={() => Keyboard.dismiss()}
                    value={pass}
                    onChangeText={(word) => setpass(word)}
                />
                <TextInput
                    placeholder="confirm password"
                    placeholderTextColor="#808080"
                    secureTextEntry={true}
                    style={styles.textInput}
                    textContentType={'oneTimeCode'}
                    value={passTwo}
                    onChangeText={(password) => setPassTwo(password)}
                />

                <TextInput placeholder="Email" placeholderTextColor="#808080" style={styles.textInput} />
                <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <Text>Signup</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.txtHello}>have an account?</Text>
                <Button title="Login" onPress={() => navigation.pop()} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    btnSignupContainer: {
        alignItems: 'center',
        backgroundColor: 'grey'
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
        borderColor: 'grey',
        color: 'grey',
        marginTop: 10,
        padding: 18,
        width: '100%'
    },
    textInputContainer: {
        width: Dimensions.get('window').width,
        alignItems: 'center'
    },
    txtHello: {
        marginTop: 30,
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    },
    box: {
        width: 300,
        height: 150,
        marginTop: 10,
        backgroundColor: 'white',
        width: '105%'
    },
    button: {
        borderWidth: 2,
        width: '60%',
        alignItems: 'center',
        borderRadius: 10,
        height: 50,
        justifyContent: 'center',
        marginTop: 40,
        backgroundColor: '#6B2426'
    },
    image: {
        marginBottom: 0,
        width: Dimensions.get('window').width,
        height: 300
    },
    signup: {
        marginTop: 200
    },
    open: {
        marginTop: 200
    }
});

export default SignupScreen;
