import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient/build/index';


const CustomButton = ({
    text = '',
    onClick = () => {},
    style = ''
}) => {

    const handleOnClick = () => {
        onClick();
    };

    return (
        <View style={styles.view}>
            <TouchableOpacity onPress={handleOnClick}>
                <LinearGradient style={[style, styles.btn]}
                                start={{x: 0, y: 0}}
                                end={{x: 1, y: 0}}
                                colors={['#08BD94', '#0599A2']}>
                    <Text style={styles.text}>{text}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    view: {
        width: '100%',
    },
    btn: {
        paddingVertical: 14.5,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Circle-Bold',
        fontSize: 16
    }
});

export default CustomButton;