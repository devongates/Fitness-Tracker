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

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.txtHello}>Workout List</Text>

            <View style={styles.button}>
                <Button
                    title="Running"
                    onPress={() => {
                        navigation.navigate(AppScreens.running, { workout: 'running' });
                    }}
                />
            </View>
            <View style={styles.button}>
                <Button
                    title="Benches"
                    onPress={() => {
                        navigation.navigate(AppScreens.benches);
                    }}
                />
            </View>
            <View style={styles.button}>
                <Button
                    title="Squats"
                    onPress={() => {
                        navigation.navigate(AppScreens.squats);
                    }}
                />
            </View>
            <View style={styles.button}>
                <Button
                    title="Push ups"
                    onPress={() => {
                        navigation.navigate(AppScreens.pushups);
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
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
        height: 550,
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
