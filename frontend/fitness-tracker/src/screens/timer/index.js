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
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';

const running = (props) => {
    const { route, navigation } = props;
    let [b, setb] = useState(0);
    const [start, setStart] = useState(false);
    const { workout } = route.params;

    const handlePress = () => {
        setStart(!start);
    };
    return (
        <View style={styles.container}>
            <View style={styles.textInputContainer}>
                <Text style={styles.txtHello}>{workout.toUpperCase()}</Text>

                <View style={styles.sep}></View>

                <Stopwatch laps msecs start={start} reset={false} />

                <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <Text>{start ? 'Stop' : 'Start'}</Text>
                </TouchableOpacity>
            </View>
        </View>
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
        color: 'black'
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
        marginTop: 270,
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

export default running;
