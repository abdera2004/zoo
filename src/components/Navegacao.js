import {View, Image, ImageBackground, StyleSheet, Pressable, } from 'react-native';


export default function Navegacao() {

    return(
        
        <View style={styles.container}>

            <Image
                source={require('../../assets/logo zoo kids fundo transparente.png')}
                resizeMode='contain'
                style={{width: 200, height: 150, top: 10}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.12,
        backgroundColor: 'white'
    },
})