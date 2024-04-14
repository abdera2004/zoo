import {View, Image, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Loading from '../components/Loading';

export default function Navegacao() {

    const navigation = useNavigation();

    return(
        
        <View style={styles.container}>
            
            <Pressable onPress={() => navigation.navigate('Home')}>
                <Image
                    source={require('../../assets/navbar/home.png')}
                    style={{height: 48, width: 48}}
                />
            </Pressable>

            <Pressable>
                <Image
                    source={require('../../assets/logo zoo kids apenas texto fundo transparente.png')}
                    resizeMode='contain'
                    style={{width: 200, height: 150,}}
                />
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Perfil')}>
                <Image
                    source={require('../../assets/navbar/user.png')}
                    style={{height: 48, width: 48}}
                />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 0.08,
        backgroundColor: '#858363',
        borderTopWidth: 1,
        borderColor: 'grey',
        flexDirection: 'row',
        paddingHorizontal: 5,
    },
})