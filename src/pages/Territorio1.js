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
            habitat: 'Floresta amazônica, mata atlântica, cerrado',
            vida: 'Entre 12 e 15 anos',
            comida: 'Carnívora, alimenta-se tipicamente de animais silvestres'
        },
        {
            id: '2',
            title: 'Onça Parda',
            imagem: require('../../assets/animais/onça parda.png'),
            habitat: 'Caatinga',
            vida: 'Entre 8 e 13 anos',
            comida: 'Carnívora, alimenta-se tipicamente de animais silvestres, como veados e invertebrados'
        },
        {
            id: '3',
            title: 'Jacaré',
            imagem: require('../../assets/animais/jacaré.png'),
            habitat: 'Pântanos',
            vida: 'Entre 30 e 75 anos',
            comida: 'Peixes, aves e mamíferos'
        },
        {
            id: '4',
            title: 'Elefante',
            imagem: require('../../assets/animais/elefante.png'),
            habitat: 'Savanas, florestas, desertos e pântanos',
            vida: 'Entre 48 e 70 anos',
            comida: 'Herbívoro, come frutas, casca de árvores e grãos'
        },
        {
            id: '5',
            title: 'Lobo-guará',
            imagem: require('../../assets/animais/lobo-guara.png'),
            habitat: 'Cerrado',
            vida: '15 anos',
            comida: 'Onívoro, alimenta-se tanto de animais quanto vegetais.'
        },
      ];

      const [modalVisible, setModalVisible] = useState(false);

      const [selectedAnimal, setSelectedAnimal] = useState(null);

      const renderItem = ({ item }) => (
        <View>
          <Image source={item.image} style={{ width: 100, height: 100 }} />
          <Pressable title="Ver Animal" onPress={() => { setSelectedAnimal(item); setModalVisible(true); }} />
          <Text>{item.habitat}</Text>
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
                                {selectedAnimal && (
                                <View style={{flex: 1, width: '100%', justifyContent: 'space-between'}}>
                                    <View style={{width: '100%', flex: 1}}>
                                        <Image source={selectedAnimal.imagem} style={{ width: '100%', height: 100, borderRadius: 10 }}/>
                                    </View>
                                    
                                    <View style={{width: '100%', flex: 1.5}}>
                                        <Text style={styles.titulo}>{selectedAnimal.title}</Text>
                                        <Text style={styles.textoModal}>Habitat: {selectedAnimal.habitat}</Text>
                                        <Text style={styles.textoModal}>Expectativa de vida: {selectedAnimal.vida}</Text>
                                        <Text style={styles.textoModal}>Alimentação: {selectedAnimal.comida}</Text>
                                    </View>

                                    <View style={styles.alinhamentoBotao}>
                                        <Pressable style={{height: 60, width: 60}} title="Fechar" onPress={() => setModalVisible(false)}>
                                            <Image
                                            source={require('../../assets/botoes/excluir.png')}
                                            style={{width: 52, height: 52}}
                                            />
                                        </Pressable>
                                    </View>
                                </View>
                                 )}
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
        padding: 10,
    },
    alinhamentoBotao: {
        width: '100%',
        flex: 0.8,
        alignItems: 'flex-end',
        backgroundColor: 'blue'
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white'
    },
    textoModal: {
        fontSize: 16,
        color: 'white',
    },
    alinhamentoBotao: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 5,
      },
});