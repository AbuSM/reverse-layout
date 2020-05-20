import React, {useState} from 'react';
import closeBtn from '../../assets/close.png';
import {
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text,
    Image,
    View,
} from 'react-native';


const CustomInput = ({
                         type = 'off',
                         placeholder = '',
                     }) => {
    const [text, setText] = useState('');
    const [inputStyle, setInputStyle] = useState(styles.inputStable);

    const handleChangeText = value => {
        setText(value)
    };

    const handleFocus = () => {
        setInputStyle(styles.inputEditing);
    };

    const handleBlur = () => {
        setInputStyle(styles.inputStable)
    };

    const handleClear = () => {
        setText('')
    };

    return (
        <View style={styles.view}>
            <TextInput autoCompleteType={type}
                       placeholder={placeholder}
                       style={[styles.input, inputStyle]}
                       placeholderTextColor={baseColor}
                       // clearButtonMode="while-editing"
                       onChangeText={handleChangeText}
                       onFocus={handleFocus}
                       onBlur={handleBlur}
                       value={text}
            />
            <TouchableOpacity onPress={handleClear} style={styles.clearBtn}>
                <Image source={closeBtn} style={styles.clearImage} />
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
        alignItems: 'center'
        // display: 'flex',
    },
    input: {
        height: 30,
        borderBottomWidth: 1,
        maxWidth: 310,
        width: '100%',
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
    },
    clearBtn: {

    }
});

export default CustomInput;