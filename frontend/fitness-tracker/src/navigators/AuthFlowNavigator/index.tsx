import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../../screens/WelcomeScreen';
import LoginScreen, { loginparams } from '../../screens/Auth/LoginScreen';
import SignupScreen, { SignupParams } from '../../screens/Auth/SignupScreen';

import homescreen from '../../screens/homescreen';
import settings from '../../screens/settings';
import workout from '../../screens/workout';
import progress from '../../screens/progress';
import timer from '../../screens/timer';

export enum AppScreens {
    Welcome = 'Welcome',
    Login = 'Login',
    Signup = 'Signup',
    home = 'home',
    progress = 'progress',
    workout = 'workout',
    settings = 'settings',
    timer = 'timer'
}

export type AuthStackParamList = {
    Login: loginparams;
    Signup: SignupParams;
    Welcome: undefined;
    home: undefined;
    progress: undefined;
    workout: undefined;
    settings: undefined;
    timer: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthFlowNavigator: React.FunctionComponent = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name={AppScreens.Welcome} component={WelcomeScreen} 
             options={{
                title: 'Raw Fitness',
                headerStyle: {
                  backgroundColor: '#6B2426',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: 'black'
                }
              }}
            />
            <AuthStack.Screen name={AppScreens.Login} component={LoginScreen}
            options={{
                title: 'Login',
                headerStyle: {
                  backgroundColor: '#6B2426',
                },
                headerTintColor: '#fff',
                headerLeft: () => {
                    return null;
                  },
                  headerTitleStyle: {
                    color: 'black'
                }
              }}
            />
            <AuthStack.Screen name={AppScreens.Signup} component={SignupScreen}
            options={{
                title: 'Create an Account',
                headerStyle: {
                  backgroundColor: '#6B2426',
                },
                headerTintColor: '#fff',
                headerLeft: () => {
                    return null;
                  },
                  headerTitleStyle: {
                    color: 'black'
                }
              }}
            
            />
            <AuthStack.Screen name={AppScreens.home} component={homescreen} 
            
            options={{
                title: 'Home',
                headerStyle: {
                  backgroundColor: '#6B2426',
                },
                headerTintColor: '#fff',
                headerLeft: () => {
                    return null;
                  },
                  headerTitleStyle: {
                    color: 'black'
                }
              }}
            
            />
            <AuthStack.Screen name={AppScreens.progress} component={progress} 
            
            options={{
                title: 'Progress',
                headerStyle: {
                  backgroundColor: '#6B2426',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: 'black'
                }
               
              }}
            
            />
            <AuthStack.Screen name={AppScreens.workout} component={workout} 
            
            options={{
                title: 'Workout List',
                headerStyle: {
                  backgroundColor: '#6B2426',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: 'black'
                }
               
              }}
            
            
            />
            <AuthStack.Screen name={AppScreens.settings} component={settings} 
            
            options={{
                title: 'Settings',
                headerStyle: {
                  backgroundColor: '#6B2426',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: 'black'
                }
               
              }}
            
            />
            <AuthStack.Screen name={AppScreens.timer} component={timer} 
            
            options={{
                title: '',
                headerStyle: {
                  backgroundColor: '#6B2426',
                },
                headerTintColor: '#fff', 
              }}
            
            />
        </AuthStack.Navigator>
    );
};

export default AuthFlowNavigator;
