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
            imagem: '',
            navegar: console.log('Teste 2'),
        },
        {
            id: '3',
            title: 'Território 3',
            imagem: '',
            navegar: '',
        },
        {
            id: '4',
            title: 'Território 4',
            imagem: '',
            navegar: '',
        },
        {
            id: '5',
            title: 'Território 5',
            imagem: '',
            navegar: '',
        },
        {
            id: '6',
            title: 'Território 6',
            imagem: '',
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
        height: 100,
        borderWidth: 2,
        borderColor: 'grey'
    },
    texto: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
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