import React from 'react';
import { StyleSheet, Image, View} from 'react-native';
import logo from '../../assets/logo.png';

const Loading = () => {
    return (
        <View>
            <View>
                <Image source={logo} style={styles.loading} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
     loading: {
         width: 72,
         height: 72,
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center'
     }
});

export default Loading;