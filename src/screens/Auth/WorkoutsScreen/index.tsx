import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { AppScreens, AuthStackParamList } from '../../../navigators/AuthFlowNavigator';
import { StackNavigationProp } from '@react-navigation/stack';

type WorkoutsScreenNavigationProps = StackNavigationProp<AuthStackParamList, AppScreens.Login>;

interface WorkoutsScreenProps {
    navigation: WorkoutsScreenNavigationProps;
}

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
        borderColor: 'white',
        marginTop: 10,
        padding: 18,
        width: '100%'
    },
    textInputContainer: {
        width: '100%'
    },
    txtHello: {
        fontSize: 30
    },

    button: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#3385ff',
        marginTop: 20,
        padding: 9,
        width: '37%',
        justifyContent: 'center',
        alignSelf: 'center'
    },

    box:{
      width: 300,
      height: 150,
      marginTop:10 ,
      backgroundColor: '#3385ff',
      width: '105%'
    },

});

const WorkoutsScreen: React.FunctionComponent<WorkoutsScreenProps> = (props) => {
    const { navigation } = props;

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.txtHello}>Workout List</Text>

            <View style={styles.button}>
            <Button
            title='Running'
            />
            </View>
            <View style={styles.button}>
            <Button
            title='Benches'
            />
            </View>
            <View style={styles.button}>
            <Button
            title='Squats'
            />
            </View>
            <View style={styles.button}>
            <Button
            title='Push ups'
            />
            </View>
        </SafeAreaView>
    );
};

export default WorkoutsScreen;
