import {View, Image, StyleSheet, Pressable, ImageBackground, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Cabecalho({titulo}) {

    return(
        
        <View style={styles.container}>
            <Pressable style={styles.botao}>
                 <FontAwesome5 name='arrow-left' size={30} color={'#858363'}/>
            </Pressable>

            <Text style={styles.texto}>{titulo}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        flex: 0.08,
        borderBottomWidth: 1,
        borderColor: 'grey',
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    texto: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#858363'
    },
    botao: {
        marginRight: 10
    }
})