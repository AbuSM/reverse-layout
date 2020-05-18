import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const Loading = () => {
    return (
        <View>
            <Text styles={styles.loading}>R</Text>
        </View>
    )
};

const styles = StyleSheet.create({
     loading: {
         width: '72px',
         height: '72px',
         fontSize: '40pt',
         border: '2px',
         borderRadius: '10% 10%',
         padding: '22px',
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center'
     }
});

export default Loading;