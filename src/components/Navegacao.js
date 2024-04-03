import {View, Image, StyleSheet, Pressable, } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Navegacao({navigation}) {

    return(
        
        <View style={styles.container}>
            
            <Pressable>
                <FontAwesome5 name='home' size={40}/>
            </Pressable>

            <Pressable>
                <Image
                    source={require('../../assets/logo zoo kids apenas texto fundo transparente.png')}
                    resizeMode='contain'
                    style={{width: 200, height: 150,}}
                />
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Perfil')}>
                <FontAwesome5 name='user-alt' size={40}/>
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
        paddingHorizontal: 5
    },
})