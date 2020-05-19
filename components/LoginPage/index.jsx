import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import screen from '../../assets/55.png';
import {LinearGradient} from 'expo-linear-gradient';

class LoginPage extends Component{

    state = {
        modal: false
    };

    render() {
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
                            <Text style={{color: 'white'}}>Я новый пользователь</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({modal: true})}>
                        <LinearGradient style={[styles.btn, styles.btnLogin]}
                                        colors={['#fff', '#fff']}>
                            <Text>У меня есть профиль. Войти</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={styles.footer}>
                    <Text>
                        Нажимая «Я новый пользователь» вы принимаете&nbsp;
                        <TouchableOpacity>
                            <Text style={{color: '#3E4571', textDecoration: 'underline'}}>
                                условия соглашения
                            </Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: '33px',
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    head: {
        marginBottom: '34px'
    },
    images: {
        width: '216px',
        height: '354px',
    },
    btn: {
        height: '45px',
        justifyContent: 'center',
        borderRadius: '10px'
    },
    btnSignUp: {
        marginBottom: '11px',
    },
    btnLogin: {
        borderWidth: '2px',
        borderColor: '#E2E6EB',
        borderStyle: 'solid'
    },
    heading: {
        fontSize: '49pt',
        fontFamily: 'Merriweather'
    },
    subheading: {
        fontSize: '16pt',
        fontFamily: 'Circle-Regular'
    },
    buttons: {
        width: '310px',
        marginTop: '40px',
    },
    bold: {
        fontWeight: 'bold'
    },
    footer: {
        marginTop: '25px'
    }
});

export default LoginPage;