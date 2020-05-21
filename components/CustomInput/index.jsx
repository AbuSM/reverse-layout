import React, {useState, useEffect} from 'react';
import closeBtn from '../../assets/clear.png';
import {
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text,
    Image,
    View,
    KeyboardAvoidingView
} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

const CustomInput = ({
                         type = 'off',
                         label = ''
                     }) => {
    const [state, setState] = useState({
        inputStyle: styles.inputStable,
        isFocused: false,
        text: undefined,
        props: {}
    });

    useEffect(() => {
        let props = {};
        switch (type) {
            case 'password':
                props = {
                    secureTextEntry: true,
                };
                break;
            case 'off':
                props = {
                    autoCapitalize: 'sentences',
                };
                break;
            case 'email':
                props = {
                    autoCapitalize: 'none',
                    autoCorrect: false
                };
                break;
            default:
                return
        }
        setState({
            ...state,
            props
        })
    }, [type]);

    const handleChangeText = value => {
        setState({...state, text: value});
    };

    const handleFocus = () => {
        setState({
            ...state,
            inputStyle: styles.inputEditing,
            isFocused: true
        })
    };

    const handleBlur = () => {
        setState({
            ...state,
            inputStyle: styles.inputStable,
            isFocused: false
        })
    };

    const handleClear = () => {
        setState({
            ...state,
            text: undefined
        })
    };

    const validateEmail = (email) => {
        let re = /^\S+@\S+$/;
        return re.test(String(email).toLowerCase());
    };

    const labelStyle = {
        width: '100%',
        position: 'absolute',
        left: 0,
        top: !state.isFocused && !state.text ? 0 : -17,
        fontSize: !state.isFocused && !state.text ? 16 : 12,
        fontWeight: !state.isFocused && !state.text ? 'bold' : 'normal',
        color: !state.isFocused ? '#89929D' : focusColor,
        fontFamily: 'Circle-Bold'
    };

    return (
        <View style={styles.view}>
            <Text style={labelStyle}>
                {label}
            </Text>
            <TextInput {...state.props}
                       style={[styles.input, state.inputStyle]}
                       onChangeText={handleChangeText}
                       onFocus={handleFocus}
                       onBlur={handleBlur}
                       value={state.text}
            />
            <TouchableOpacity onPress={handleClear} style={styles.clearBtn}>
                <Image source={closeBtn} style={styles.clearImage}/>
            </TouchableOpacity>
        </View>
    )
};

const baseColor = '#E2E6EB';
const focusColor = '#07AA9C';

const styles = StyleSheet.create({
    view: {
        width: '100%',
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    input: {
        height: 30,
        borderBottomWidth: 1,
        maxWidth: 310,
        width: '100%',
        fontFamily: 'Circle-Bold'
    },
    inputStable: {
        borderColor: baseColor,
    },
    inputEditing: {
        borderColor: focusColor,
    },
    clearImage: {
        width: 8,
        height: 8,
        position: 'absolute',
        right: 0,
    },
    clearBtn: {}
});

export default CustomInput;