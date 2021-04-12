import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from '../../screens/WelcomeScreen';
import LoginScreen, {loginparams} from '../../screens/Auth/LoginScreen';
import SignupScreen, { SignupParams } from '../../screens/Auth/SignupScreen';
import homescreen from '../../src/screens/homescreen';
import settings from '../../src/screens/settings';
import workout from '../../src/screens/workout';
import progress from '../../src/screens/progress';


export enum AppScreen {
    
    Welcome = 'Welcome',
   Login = 'Login',
   Signup = 'Signup',
   home = 'home',
   progress='progress',
   workout = 'workout',
   settings = 'settings',
}

const AuthStack = createStackNavigator<AuthStackParamLists>();

const screens = () => {
    return (
        <AuthStack.Navigator headerMode="none">
            <AuthStack.Screen name={AppScreen.home} component={homescreen}/>
            <AuthStack.Screen name={AppScreen.progress} component={progress}/>
            <AuthStack.Screen name={AppScreen.workout} component={workout}/>
            <AuthStack.Screen name={AppScreen.settings} component={settings}/>
        </AuthStack.Navigator>
    );
};

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={screens} />
      <Tab.Screen name="Settings" component={settings} />
    </Tab.Navigator>
  );
}

export default MyTabs;
