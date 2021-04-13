import React, { useState } from 'react';
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
        borderColor: 'black',
        marginTop: 10,
        padding: 18,
        width: '100%'
    },
    textInputContainer: {
        width: Dimensions.get('window').width,
        alignItems: 'center'
    },
    txtHello: {
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center'
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
        backgroundColor: '#b60f00'
    },
    image: {
        marginBottom: 0,
        width: Dimensions.get('window').width,
        height: 300
    },
    signup: {
        marginTop: 200
    }
});

const LoginScreen: React.FunctionComponent<LoginScreenProps> = (props) => {
    const { navigation, route } = props;
    const { params } = route;
    let auth = props.children;
    const [username, setUsername] = useState<string>('');
    const [pass, setpass] = useState<string>('');

    let logged = true;
    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <Image style={styles.image} source={require("'../../../images/Raw_Fitness_Logo.jpg")} />

                <View style={styles.textInputContainer}>
                    <TextInput
                        value={username}
                        placeholder="username"
                        style={styles.textInput}
                        onChangeText={(text) => setUsername(text)}
                    />
                    <TextInput
                        placeholder="password"
                        secureTextEntry={true}
                        style={styles.textInput}
                        value={pass}
                        onChangeText={(leter) => setpass(leter)}
                    />

                    <View>
                        <View style={styles.textInputContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    if (username.length < 3) {
                                        alert('username must be atleast 3 characters');
                                    } else if (pass.length < 6) {
                                        alert('password must be atleast 6 characters');
                                    } else {
                                        alert('welcome!');
                                        navigation.navigate(AppScreens.home, { username });
                                    }
                                }}
                            >
                                <Text>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.signup}>
                    <Text style={styles.txtHello}> or</Text>
                    <Button title="Signup" onPress={() => navigation.navigate(AppScreens.Signup, { username })} />
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default LoginScreen;
