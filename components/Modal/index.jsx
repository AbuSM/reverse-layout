import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    CheckBox,
    Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import swiper from '../../assets/swiper.png';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';

const screenWidth = Math.round(Dimensions.get('window').width);


const CustomModal = ({
    isActive,
    onClose = () => {}
}) => {

    const [active, setActive] = useState(false);

    return (
        <View>
            <Modal
                style={styles.modal}
                isVisible={isActive}
                onBackdropPress={() => onClose(false)}
                swipeDirection="down"
                onSwipeComplete={() => onClose(false)}
            >
                <View style={styles.modalView}>
                    <Image source={swiper} style={styles.swiper}/>
                    <Text style={styles.modalHeading}>
                        Войдите, чтобы
                    </Text>
                    <Text style={styles.modalHeading}>
                        начать работу
                    </Text>
                    <Text style={styles.modalSubHeading}>
                        Создание тендера, выбор победителя и контроль за выполнение работ
                    </Text>
                    <View style={styles.modalInput}>
                        <CustomInput type='email' label="E-mail"/>
                    </View>
                    <View style={styles.modalInput}>
                        <CustomInput type='password' label="Пароль"/>
                    </View>
                    <View style={styles.modalSubInput}>
                        <View style={styles.modalCheckContainer}>
                            <CheckBox style={styles.modalCheck} onValueChange={setActive} value={active}/>
                            <Text style={styles.modalCheckText}>Показать пароль</Text>
                        </View>
                        <TouchableOpacity style={styles.modalForgot}>
                            <Text style={styles.modalForgotText}>Забыли пароль?</Text>
                        </TouchableOpacity>
                    </View>
                    <CustomButton text="Войти" style={styles.modalLoginBtn}/>
                </View>
            </Modal>
        </View>
    )
};

const styles = StyleSheet.create({
    modal: {
        margin: 0,
    },
    swiper: {
        width: 30,
        height: 5,
        marginBottom: 29.2,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0,
        flexDirection: 'row'
    },
    modalView: {
        backgroundColor: 'white',
        height: 537,
        borderRadius: 20,
        flex: 0,
        bottom: -10,
        position: 'absolute',
        width: screenWidth,
        alignItems: 'center',
        paddingHorizontal: 32,
        paddingVertical: 8,
    },
    modalHeading: {
        fontSize: 21,
        fontFamily: 'Merriweather'
    },
    modalSubHeading: {
        color: '#89929D',
        textAlign: 'center',
        marginTop: 10,
        marginHorizontal: 20,
        fontFamily: 'Circle',
        fontSize: 14,
        lineHeight: 18
    },
    modalInput: {
        marginTop: 25
    },
    modalCheck: {
        height: 18,
        width: 18,
        borderRadius: 2,
        borderColor: '#89929D',
        borderWidth: 1
    },
    modalCheckText: {
        color: '#89929D',
        marginLeft: 10,
        fontFamily: 'Circle',
        fontSize: 14,
    },
    modalCheckContainer: {
        flexDirection: 'row',
    },
    modalForgot: {

    },
    modalForgotText: {
        includeFontPadding: true,
        textAlignVertical: 'bottom',
        textAlign: 'auto',
        color: '#3E4571',
        lineHeight: 18,
        fontSize: 14,
        fontFamily: 'Circle-Bold',
        paddingTop: 8
    },
    modalSubInput: {
        marginTop: 20,
        marginBottom: 20,
        width: '100%',
        flexDirection: 'row',
        flex: 0,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    modalLoginBtn: {
        marginTop: 10
    }
});

export default CustomModal;