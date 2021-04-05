import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList, AppScreens } from '../../navigators/AuthFlowNavigator';

type WelcomeScreenNavigationProps = StackNavigationProp<AuthStackParamList, AppScreens.Welcome>;

interface WelcomeScreenProps {
    navigation: WelcomeScreenNavigationProps;
}

const styles = StyleSheet.create({
    btnNextContainer: {
        alignSelf: 'flex-end',
        color: "#b60f00"
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10
    },
    welcome: {
        fontSize: 40,
        color: "#b60f00"
    },
    welcomeContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: '100%'
    },
    box:{
      width: 300,
      height: 200,
      marginTop:100 ,
      backgroundColor: 'purple',
    },
    image: {
        marginBottom: 0,
        width: Dimensions.get('window').width,
        height: 600,

      },

});

const WelcomeScreen: React.FunctionComponent<WelcomeScreenProps> = (props) => {
    const { navigation } = props;

    return (
        <SafeAreaView style={styles.container}>
             <Image style={styles.image} source={require("'../../../images/welcome.jpg")}/>

            <View style={styles.welcomeContainer}>
                <Text style={styles.welcome}>Welcome</Text>
                <Text>start your legacy with us</Text>
            </View>
            <View style={styles.btnNextContainer}>
                <Button color= "#b60f00" title="NEXT" onPress={() => navigation.navigate(AppScreens.Login)} />
            </View>
        </SafeAreaView>
    );
};

export default WelcomeScreen;
