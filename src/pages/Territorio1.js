import { Text, View, StyleSheet, Modal, ImageBackground, FlatList, Pressable, Image } from 'react-native';
import Navegacao from '../components/Navegacao';
import Cabecalho from '../components/Cabecalho';
import { useState } from 'react';

export default function Territorio1() {

    const Animais = [
        {
            id: '1',
            title: 'Onça Pintada',
            imagem: require('../../assets/animais/onça pintada.png'),
            description: 'oi'
        },
        {
            id: '2',
            title: 'Onça Parda',
            imagem: require('../../assets/animais/onça parda.png'),
            description: 'oi'
        },
        {
            id: '3',
            title: 'Jacaré',
            imagem: require('../../assets/animais/jacaré.png'),
            description: 'oi'
        },
        {
            id: '4',
            title: 'Elefante',
            imagem: require('../../assets/animais/elefante.png'),
            description: 'oi'
        },
      ];

      const [modalVisible, setModalVisible] = useState(false);

      const [selectedAnimal, setSelectedAnimal] = useState(null);

      const renderItem = ({ item }) => (
        <View>
          <Image source={item.image} style={{ width: 100, height: 100 }} />
          <Pressable title="Ver Animal" onPress={() => { setSelectedAnimal(item); setModalVisible(true); }} />
          <Text>{item.description}</Text>
        </View>
      );

  return (
        <View style={styles.container}>
            <Cabecalho titulo={'Território 1'} navegarPara={'Home'}/>
            <ImageBackground source={require('../../assets/fundo-organico-de-selva-plana.jpg')} style={styles.fundo}>
                <FlatList
                    data={Animais}
                    keyExtractor={item=>item.id}
                    renderItem={({item})=><Pressable onPress={() => {setSelectedAnimal(item); setModalVisible(true)}} style={styles.item}><ImageBackground resizeMode='stretch' source={item.imagem} style={styles.fundoFlatlist}><Text style={styles.texto}>{item.title}</Text></ImageBackground></Pressable>}
                />
            </ImageBackground>
            <Navegacao/>

            <Modal animationType="fade" transparent={true} visible={modalVisible}>
                <View style={styles.fundoModal}>
                    <View style={styles.conteudoModal}>
                        <ImageBackground source={require('../../assets/fundo/fundo modal.png')} style={styles.fundoModalConteudo}>
                            <View >
                                {selectedAnimal && (
                                <View>
                                    <Image source={selectedAnimal.imagem} style={{ width: '100%', height: 100 }} />
                                    <Text>{selectedAnimal.description}</Text>
                                    <Pressable title="Fechar" onPress={() => setModalVisible(false)} />
                                </View>
                                 )}
                            </View>
                        </ImageBackground>
                    </View>
                </View>
            </Modal>
        </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fundo: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
    },
    item: {
        marginVertical: 8,
        marginHorizontal: 16,
        width: 300,
        height: 130,
        borderRadius: 10,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#604502',
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#f8cd23',
        fontFamily: ''
    },
    fundoFlatlist: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    fundoModal: {
        flex: 1,
        backgroundColor: '#00000070',
        justifyContent: 'center',
        alignItems: 'center',
    },
    conteudoModal: {
        width: 276,
        height: 360,
        overflow: 'hidden',
        borderRadius: 10
     },
    fundoModalConteudo: {
        width: 276,
        height: 360,
        padding: 10  
    },
    alinhamentoBotao: {
        width: '100%',
        flex: 0.12,
        alignItems: 'flex-end'
    }
});