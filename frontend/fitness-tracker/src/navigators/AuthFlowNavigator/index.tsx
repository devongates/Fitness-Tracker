import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../../screens/WelcomeScreen';
import LoginScreen, { loginparams } from '../../screens/Auth/LoginScreen';
import SignupScreen, { SignupParams } from '../../screens/Auth/SignupScreen';
import homescreen from '../../screens/homescreen';
import settings from '../../screens/settings';
import workout from '../../screens/workout';
import progress from '../../screens/progress';
import running from '../../screens/running';
import benches from '../../screens/benches';
import pushups from '../../screens/pushups';
import squats from '../../screens/squats';

export enum AppScreens {
    Welcome = 'Welcome',
    Login = 'Login',
    Signup = 'Signup',
    home = 'home',
    progress = 'progress',
    workout = 'workout',
    settings = 'settings',
    running = 'running',
    benches = 'benches',
    pushups = 'pushups',
    squats = 'squats'
}

export type AuthStackParamList = {
    Login: loginparams;
    Signup: SignupParams;
    Welcome: undefined;
    home: undefined;
    progress: undefined;
    workout: undefined;
    settings: undefined;
    running: undefined;
    benches: undefined;
    pushups: undefined;
    squats: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthFlowNavigator: React.FunctionComponent = () => {
    return (
        <AuthStack.Navigator headerMode="none">
            <AuthStack.Screen name={AppScreens.Welcome} component={WelcomeScreen} />
            <AuthStack.Screen name={AppScreens.Login} component={LoginScreen} />
            <AuthStack.Screen name={AppScreens.Signup} component={SignupScreen} />
            <AuthStack.Screen name={AppScreens.home} component={homescreen} />
            <AuthStack.Screen name={AppScreens.progress} component={progress} />
            <AuthStack.Screen name={AppScreens.workout} component={workout} />
            <AuthStack.Screen name={AppScreens.settings} component={settings} />
            <AuthStack.Screen name={AppScreens.running} component={running} />
            <AuthStack.Screen name={AppScreens.pushups} component={pushups} />
            <AuthStack.Screen name={AppScreens.benches} component={benches} />
            <AuthStack.Screen name={AppScreens.squats} component={squats} />
        </AuthStack.Navigator>
    );
};

export default AuthFlowNavigator;
