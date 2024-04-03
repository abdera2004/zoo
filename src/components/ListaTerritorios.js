import { StyleSheet, Text, View, ImageBackground, FlatList, Pressable} from 'react-native';

export default function ListaTerritorios({navigation}) {

    const Territorios = [
        {
            id: '1',
            title: 'Território 1',
            imagem: require('../../assets/Território 1.png'),
            navegar: console.log('Teste')
        },
        {
            id: '2',
            title: 'Território 2',
            imagem: require('../../assets/Território 2.png'),
            navegar: console.log('Teste 2'),
        },
        {
            id: '3',
            title: 'Território 3',
            imagem: require('../../assets/Território 3.png'),
            navegar: '',
        },
        {
            id: '4',
            title: 'Território 4',
            imagem: require('../../assets/Território 4.png'),
            navegar: '',
        },
        {
            id: '5',
            title: 'Território 5',
            imagem: require('../../assets/Território 5.png'),
            navegar: '',
        },
        {
            id: '6',
            title: 'Território 6',
            imagem: require('../../assets/Território 6.png'),
            navegar: '',
        },
      ];

    return(

        <View>
            <FlatList
                data={Territorios}
                keyExtractor={item=>item.id}
                renderItem={({item})=><Pressable onPress={item.navegar} style={styles.item}><ImageBackground source={item.imagem} style={styles.fundo}><Text style={styles.texto}>{item.title}</Text></ImageBackground></Pressable>}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    item: {
        marginVertical: 8,
        marginHorizontal: 16,
        width: 300,
        height: 110,
        borderRadius: 10,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#604502'
    },
    texto: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#f8cd23',
        fontFamily: ''
    },
    fundo: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flex: 1,
      },
})