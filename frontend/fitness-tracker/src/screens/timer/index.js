import React, { useState, useRef, useEffect } from 'react';
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
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import axios from 'axios';

const running = (props) => {
    const { route, navigation } = props;
    const [start, setStart] = useState(false);
    const { workout, username } = route.params;
    const time = useRef('00:00:00:00');

    const handlePress = () => {
        setStart(!start);
    };

    const handleSubmit = () => {
        const newWorkout = {
            username: username,
            description: workout,
            duration: time.current,
            date: new Date()
        };
        console.log(newWorkout);
        axios
            .post('http://localhost:5000/exercises/add', newWorkout)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
        navigation.navigate(AppScreens.home, { username });
    };
    return (
        <View style={styles.container}>
            <View style={styles.textInputContainer}>
                <Text style={styles.txtHello}>{workout.toUpperCase()}</Text>
                <View style={styles.container1}>
                    <Stopwatch msecs start={start} reset={false} getTime={(curTime) => (time.current = curTime)} />
                </View>
                <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <Text>{start ? 'Stop' : 'Start'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={handleSubmit}>
                    <Text>Done</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    btnSignupContainer: {
        alignItems: 'center'
    },
    container1: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '50%'
        // height: '30%'
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
        marginTop: 70,
        fontSize: 30,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'grey'
    },
    timer: {
        marginTop: 70,
        fontSize: 80,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black'
    },
    box: {
        width: Dimensions.get('window').width,
        height: 550,
        marginTop: 10,
        backgroundColor: 'white',
        width: '105%'
    },
    button: {
        width: '60%',
        alignItems: 'center',
        borderRadius: 25,
        height: 50,
        justifyContent: 'center',
        marginTop: 200,
        backgroundColor: '#6B2426'
    },
    button2: {
        width: '40%',
        alignItems: 'center',
        borderRadius: 25,
        height: 50,
        justifyContent: 'center',
        marginTop: 60,
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
        marginTop: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '80%'
    }
});

export default running;
