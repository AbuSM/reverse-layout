import React, {useState} from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import screen from '../../assets/55.png';
import CustomButton from '../CustomButton';
import Modal from '../Modal';
import close from '../../assets/close.png';

const LoginPage = () => {

    const [modal, setModal] = useState(false);

    return (
        <ScrollView>
            <Image source={close} style={styles.closeBtn}/>
            <View style={styles.container}>
                <View style={styles.head}>
                    <Text style={styles.heading}>REVERSE</Text>
                    <Text style={[styles.subheading, styles.textCenter]}>Тендеры в твоем кармане</Text>
                </View>
                <View>
                    <Image source={screen} style={styles.images}/>
                </View>
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
                            <Text style={styles.textUnderline} onPress={() => {}}>
                                условия соглашения
                            </Text>
                    </Text>
                </View>
                <View style={{flex: 1}}>
                    <Modal isActive={modal} onClose={setModal}/>
                </View>
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