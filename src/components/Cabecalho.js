import {View, Image, StyleSheet, Pressable, ImageBackground, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

export default function Cabecalho({titulo, navegarPara}) {

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Pressable style={styles.botao} onPress={() => navigation.navigate(navegarPara)}>
                <FontAwesome5 name='arrow-left' size={30} color={'grey'}/>
            </Pressable>

            <Text style={styles.texto}>{titulo}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        flex: 0.07,
        borderBottomWidth: 1,
        borderColor: 'grey',
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    texto: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'grey'
    },
    botao: {
        marginRight: 20
    }
})