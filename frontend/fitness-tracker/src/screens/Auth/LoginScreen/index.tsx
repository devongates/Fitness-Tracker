import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    Button,
    View,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';
import { AppScreens, AuthStackParamList } from '../../../navigators/AuthFlowNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
import { State } from 'react-native-gesture-handler';
import axios from 'axios';

type LoginScreenNavigationProps = StackNavigationProp<AuthStackParamList, AppScreens.Login>;

export type loginparams = {
    username: string;
};

interface LoginScreenProps {
    route: { params: loginparams };
    navigation: LoginScreenNavigationProps;
}

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

const LoginScreen: React.FunctionComponent<LoginScreenProps> = (props) => {
    const { navigation, route } = props;
    const { params } = route;
    let auth = props.children;
    const [username, setUsername] = useState<string>('');
    const [pass, setpass] = useState<string>('');
    const [users, setUsers] = useState([]);
    const [isValidLogin, setIsValidLogin] = useState(false);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        axios
            .get('http://localhost:5000/users')
            .then((res) => {
                setUsers(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    };

    const login = () => {
        users.forEach((user) => {
            if (user.username === username && user.password === pass) {
                setIsValidLogin(true);
            }
        });
        if (isValidLogin) {
            navigation.navigate(AppScreens.home, { username });
        } else {
            alert('Invalid login');
        }
    };

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={styles.open}></View>
                <View style={styles.textInputContainer}>
                    <TextInput
                        value={username}
                        placeholder="username"
                        placeholderTextColor="grey"
                        style={styles.textInput}
                        onChangeText={(text) => setUsername(text)}
                    />
                    <TextInput
                        placeholder="password"
                        placeholderTextColor="grey"
                        secureTextEntry={true}
                        style={styles.textInput}
                        value={pass}
                        onChangeText={(leter) => setpass(leter)}
                    />

                    <View>
                        <View style={styles.textInputContainer}>
                            <TouchableOpacity style={styles.button} onPress={login}>
                                <Text>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.signup}>
                    <Text style={styles.txtHello}>Don't have an account?</Text>
                    <Button title="Sign Up" onPress={() => navigation.navigate(AppScreens.Signup, { username })} />
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default LoginScreen;
