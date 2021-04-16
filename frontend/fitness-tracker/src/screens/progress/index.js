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
import axios from 'axios';

const progress = (props) => {
    const { navigation, route } = props;
    const { username } = route.params;
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/exercises')
            .then((res) => {
                const _workouts = res.data;
                const filteredWorkouts = _workouts.filter((workout) => {
                    return workout.username === username;
                });
                setWorkouts(filteredWorkouts);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={styles.textInputContainer}>
                    <Text style={styles.txtHello}>Progress</Text>
                    <View style={styles.sep}></View>
                    {workouts.map((workout) => {
                        const { _id, description, duration, date } = workout;
                        const newDate = new Date(date);
                        const day = newDate.getDate();
                        const month = newDate.getMonth() + 1;
                        const year = newDate.getFullYear();

                        return (
                            <View key={_id} style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                                <View style={{ flex: 1, alignSelf: 'stretch' }}>
                                    <Text style={styles.txtHello}>{description}</Text>
                                </View>
                                <View style={{ flex: 1, alignSelf: 'stretch' }}>
                                    <Text style={styles.txtHello}>{duration.slice(3, 8)}</Text>
                                </View>
                                <View style={{ flex: 1, alignSelf: 'stretch' }}>
                                    <Text style={styles.txtHello}>{`${month}/${day}/${year}`}</Text>
                                </View>
                            </View>
                        );
                    })}
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
        marginTop: 40,
        backgroundColor: '#b60f00'
    },
    image: {
        marginBottom: 0,
        width: Dimensions.get('window').width,
        height: 300
    },
    signup: {
        marginTop: 100,
        fontSize: 20
    },
    sep: {
        marginTop: 20,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        width: '80%'
    },
    button3: {
        borderWidth: 2,
        width: '40%',
        alignItems: 'center',
        borderRadius: 20,
        height: 45,
        justifyContent: 'center',
        marginTop: 600,
        backgroundColor: '#b60f00'
    }
});

export default progress;
