import React from 'react';
import {StyleSheet, View} from 'react-native';
import Loading from './components/Loading';
import LoginPage from './components/LoginPage';
import {useFonts} from '@use-expo/font';

export default function App() {

    let [fontsLoaded] = useFonts({
        'Circle': require('./assets/fonts/Circe-Regular.ttf'),
        'Circle-Bold': require('./assets/fonts/Circe-Bold.ttf'),
        'Merriweather': require('./assets/fonts/Merriweather-Black.ttf')
    });
    if (!fontsLoaded) {
        return <Loading />
    } else {
        return (
            <View style={styles.container}>
                <LoginPage/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
