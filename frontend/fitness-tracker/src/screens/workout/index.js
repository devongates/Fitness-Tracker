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
import { AppScreens, AuthStackParamLists } from '../../navigators/AuthFlowNavigator';

import { ScrollView } from 'react-native-gesture-handler';

const workout = (props) => {
    const { navigation } = props;
    const workouts = ['Running', 'Benches', 'Squats', 'Push Ups'];
    const [other, setOther] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.txtHello}>Workout List</Text>
            {workouts.map((workout, index) => {
                return (
                    <TouchableOpacity
                        style={styles.button}
                        key={index}
                        onPress={() => {
                            navigation.navigate(AppScreens.timer, { workout });
                        }}
                    >
                        <Button title={workout} />
                    </TouchableOpacity>
                );
            })}
            <View style={styles.container1}>
                <TextInput
                    placeholder="Other"
                    value={other}
                    style={styles.textInput}
                    onChangeText={(text) => setOther(text)}
                />
                <View style={styles.btn}>
                    <Button
                        title="Go"
                        onPress={() => {
                            navigation.navigate(AppScreens.timer, { workout: other });
                        }}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    btn: {
        position: 'absolute',
        left: 160,
        top: 71
    },
    container1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        width: '60%'
    },
    btnSignupContainer: {
        alignItems: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
        marginTop: 0,
        marginBottom: 50,
        fontSize: 30,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#b60f00'
    },
    box: {
        width: Dimensions.get('window').width,
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: 'white',
        width: '105%'
    },
    button1: {
        width: '60%',
        alignItems: 'center',
        borderRadius: 25,
        height: 50,
        justifyContent: 'center',
        marginTop: 40,
        backgroundColor: '#b60f00'
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
        marginTop: 100
    },
    sep: {
        marginTop: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '80%'
    }
});

export default workout;
