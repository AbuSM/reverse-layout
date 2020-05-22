import React, {useState} from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import screen from '../../assets/55.png';
import CustomButton from '../CustomButton';
import Modal from '../Modal';
import close from '../../assets/close.png';
import Swiper from 'react-native-swiper';

const LoginPage = () => {

    const [modal, setModal] = useState(false);

    return (
        <ScrollView style={{flex: 1, height: '100%'}}>
            <Image source={close} style={styles.closeBtn}/>
            <View style={styles.container}>
                <View style={styles.head}>
                    <Text style={styles.heading}>REVERSE</Text>
                    <Text style={[styles.subheading, styles.textCenter]}>Тендеры в твоем кармане</Text>
                </View>
                <Swiper style={styles.wrapper}
                        dotStyle={styles.dotStyle}
                        activeDotStyle={styles.activeDotStyle}
                >
                    <View style={styles.slide}>
                        <Image source={screen} style={styles.images}/>
                    </View>
                    <View style={styles.slide}>
                        <Image source={screen} style={styles.images}/>
                    </View>
                    <View style={styles.slide}>
                        <Image source={screen} style={styles.images}/>
                    </View>
                </Swiper>
                <View style={styles.buttons}>
                    <CustomButton text="Я новый пользователь" style={styles.btnSignUp}/>
                    <TouchableOpacity onPress={() => setModal(true)}>
                        <View style={[styles.btn, styles.btnLogin]}>
                            <Text style={styles.textCenter}>У меня есть профиль. Войти</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.textCenter}>
                        Нажимая «Я новый пользователь» вы принимаете&nbsp;
                        <Text style={styles.textUnderline} onPress={() => {
                        }}>
                            условия соглашения
                        </Text>
                    </Text>
                </View>
                <Modal isActive={modal} onClose={setModal}/>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    closeBtn: {
        position: 'absolute',
        height: 10.77,
        width: 10.77,
        top: 58.7,
        right: 30.8,
    },
    container: {
        paddingHorizontal: 33,
        paddingTop: 99,
        flex: 1,
        alignItems: 'center',
        fontFamily: 'Circle',
    },
    head: {
        marginBottom: 34
    },
    images: {
        width: 160,
        height: 320,
        marginBottom: 26
    },
    wrapper: {
        maxHeight: 354
    },
    dotStyle: {
        width: 5,
        height: 5,
        backgroundColor: '#BFBFC3',
    },
    activeDotStyle: {
        width: 5,
        height: 5,
        backgroundColor: 'black',
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        fontFamily: 'Merriweather'
    },
    subheading: {
        fontSize: 16,
    },
    buttons: {
        width: 310,
        marginTop: 40,
    },
    bold: {
        fontFamily: 'Circle-Bold'
    },
    textCenter: {
        textAlign: 'center',
        fontFamily: 'Circle'
    },
    textUnderline: {
        textDecorationLine: 'underline',
        color: '#3E4571'
    },
    footer: {
        marginTop: 25,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
    },

});

export default LoginPage;