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
import { NavigationContainer } from '@react-navigation/native';
import AuthFlowNavigator from './src/navigators/AuthFlowNavigator';
import MyTabs from './src/navigators/index1';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

export default function App() {
    const [Auth, setAuth] = useState(false);
    const scheme = useColorScheme();
    if (Auth === false) {
        return (
            <AppearanceProvider>
                <NavigationContainer theme={DarkTheme}>
                    <AuthFlowNavigator />
                </NavigationContainer>
            </AppearanceProvider>
        );
    } else {
        return (
            <NavigationContainer>
                <MyTabs />
            </NavigationContainer>
        );
    }
}
