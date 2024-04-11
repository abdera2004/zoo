import { StyleSheet, Text, View, ImageBackground, FlatList, Pressable } from 'react-native';
import * as Animado from 'react-native-animatable';
import Navegacao from '../../src/components/Navegacao';
import Cabecalho from '../components/Cabecalho';

export default function Home({navigation}) {

    const Territorios = [
        {
            id: '1',
            title: 'Território 1',
            imagem: require('../../assets/fundo/fundo 1 flatlist.png'),
        },
        {
            id: '2',
            title: 'Território 2',
            imagem: require('../../assets/fundo/fundo flatlist 2.png'),
        },
        {
            id: '3',
            title: 'Território 3',
            imagem: require('../../assets/fundo/fundo flatlist 3.png'),
        },
        {
            id: '4',
            title: 'Território 4',
            imagem: require('../../assets/fundo/fundo flatlisst 4.png'),
        },
        {
            id: '5',
            title: 'Território 5',
            imagem: require('../../assets/fundo/fundo flatlist 5.png'),
        },
        {
            id: '6',
            title: 'Território 6',
            imagem: require('../../assets/fundo/fundo flatlist 6.png'),
        },
      ];

    return(  
        <View style={styles.container}>
          <Cabecalho titulo={'Home'} navegarPara={'Login'}/>
            <ImageBackground source={require('../../assets/fundo-organico-de-selva-plana.jpg')} style={styles.fundo}>
              <FlatList
                style={{flex: 1}}
                data={Territorios}
                keyExtractor={item=>item.id}
                renderItem={({item})=><Animado.View animation="fadeInLeft" duration={2000}><Pressable onPress={() => navigation.navigate('Territorio1')} style={styles.item}><ImageBackground source={item.imagem} style={styles.fundo}><Text style={styles.texto}>{item.title}</Text></ImageBackground></Pressable></Animado.View>}
              />
            </ImageBackground>
          <Navegacao/>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        marginVertical: 8,
        marginHorizontal: 16,
        width: 300,
        height: 130,
        borderRadius: 10,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#604502',
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
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    titulo: {
      fontSize: 26,
      fontWeight: 'bold',
      fontFamily: 'Snap ITC'
    },
});