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
import { AppScreens, AuthStackParamLists } from '../../navigators/AuthFlowNavigator';
import { ScrollView } from 'react-native-gesture-handler';

const homescreen = (props) => {
    const { navigation, route } = props;
    const { username } = route.params;

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <Text style={styles.txtHello}>{`Hello, ${username}.`}</Text>
                <View style={styles.textInputContainer}>
                    <View style={styles.sep}></View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate(AppScreens.workout, { username });
                        }}
                    >
                        <Text>Workout</Text>
                    </TouchableOpacity>

                    <View style={styles.sep}></View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate(AppScreens.progress, { username });
                        }}
                    >
                        <Text>Progress</Text>
                    </TouchableOpacity>

                    <View style={styles.sep}></View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate(AppScreens.settings);
                        }}
                    >
                        <Text>Settings</Text>
                    </TouchableOpacity>

                    <View style={styles.sep}></View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    btnSignupContainer: {
        alignItems: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        // alignContent: 'center',
        margin: 10,
        marginTop: 120
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
        marginBottom: 30,
        fontSize: 30,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#aaa'
    },
    box: {
        width: Dimensions.get('window').width,
        height: 550,
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
        margin: 40,
        backgroundColor: '#6B2426'
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
        margin: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        width: '80%'
    }
});

export default homescreen;
