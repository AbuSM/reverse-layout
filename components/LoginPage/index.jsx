import React, {useState} from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import screen from '../../assets/55.png';
import swiper from '../../assets/swiper.png';
import {LinearGradient} from 'expo-linear-gradient/build/index';
import Modal from 'react-native-modal';
import CustomInput from '../CustomInput';

const screenWidth = Math.round(Dimensions.get('window').width);

const LoginPage = () => {

    const [modal, setModal] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={[styles.heading, styles.bold]}>REVERSE</Text>
                <Text style={styles.subheading}>Тендеры в твоем кармане</Text>
            </View>
            <View>
                <Image source={screen} style={styles.images}/>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity>
                    <LinearGradient style={[styles.btn, styles.btnSignUp]}
                                    start={{x: 0, y: 0}}
                                    end={{x: 1, y: 0}}
                                    colors={['#08BD94', '#0599A2']}>
                        <Text style={[{color: 'white'}, styles.textCenter]}>Я новый пользователь</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModal(true)}>
                    <LinearGradient style={[styles.btn, styles.btnLogin]}
                                    colors={['#fff', '#fff']}>
                        <Text style={styles.textCenter}>У меня есть профиль. Войти</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Text style={styles.textCenter}>
                    Нажимая «Я новый пользователь» вы принимаете&nbsp;
                    <TouchableOpacity>
                        <Text >
                            условия соглашения
                        </Text>
                    </TouchableOpacity>
                </Text>
            </View>
            <View style={{flex: 1}}>
                <View>
                    <Modal
                        style={styles.modal}
                        isVisible={modal}
                        onBackdropPress={() => setModal(false)}
                        swipeDirection="down"
                        onSwipeComplete={() => setModal(false)}
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
                            <CustomInput placeholder="E-mail"/>
                            <CustomInput type='password' placeholder="Password"/>
                        </View>
                    </Modal>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 33,
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    head: {
        marginBottom: 34
    },
    images: {
        width: 216,
        height: 354,
    },
    btn: {
        height: 45,
        justifyContent: 'center',
        borderRadius: 10,
    },
    btnSignUp: {
        marginBottom: 11,
    },
    btnLogin: {
        borderWidth: 2,
        borderColor: '#E2E6EB',
        borderStyle: 'solid'
    },
    heading: {
        fontSize: 49,
        // fontFamily: 'Merriweather'
    },
    subheading: {
        fontSize: 16,
        // fontFamily: 'Circle-Regular'
    },
    buttons: {
        width: 310,
        marginTop: 40,
    },
    bold: {
        fontWeight: 'bold'
    },
    textCenter: {
        textAlign: 'center'
    },
    footer: {
        marginTop: 25
    },
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
        height: 432,
        borderRadius: 20,
        flex: 0,
        bottom: 0,
        position: 'absolute',
        width: screenWidth,
        alignItems: 'center',
        paddingHorizontal: 32,
        paddingVertical: 8,
    },
    modalHeading: {
        fontSize: 21,
        fontWeight: 'bold',
    },
    modalSubHeading: {
        color: '#89929D',
        textAlign: 'center',
        marginTop: 10,
    },
});

export default LoginPage;