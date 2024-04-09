import { View, Text, Pressable, Image, StyleSheet, TextInput, ImageBackground, Modal } from 'react-native';
import Cabecalho from '../components/Cabecalho';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function Perfil({navigation}) {

     const recuperarNome = async() =>
     {
       try {
            const nome = await AsyncStorage.getItem('nome');
            return nome !== null ? nome : '';
         } catch (error) {
            console.error('Erro:', error);
            return false;
         }
     }

    const recuperarEmail = async() =>
  {
    try {
        const email = await AsyncStorage.getItem('email');
        return email !== null ? email : '';
    } catch (error) {
        console.error('Erro:', error);
        return false;
    } 
}

const recuperarSenha = async() =>
  {
    try {
        const senha = await AsyncStorage.getItem('senha');
        return senha !== null ? senha : '';
    } catch (error) {
        console.error('Erro:', error);
        return false;
    }
}

const recuperarIdade = async() =>
  {
    try {
        const idade = await AsyncStorage.getItem('idade');
        return idade !== null ? idade : '';
    } catch (error) {
        console.error('Erro:', error);
        return false;
    }
}
  //Executar funções assim que a página for carregada
   useEffect(() => {
    recuperarNome();
    recuperarEmail();
    recuperarIdade();
    recuperarSenha();
    console.log('Recuperando dados');
   }, []);

  const [modalVisible, setModalVisible] = useState(false);

  const [dados, setDados] = useState('');

  return (
    <View style={styles.container}>
      <Cabecalho titulo={'Perfil'}/>
      <ImageBackground source={require('../../assets/fundo-organico-de-selva-plana.jpg')} style={styles.fundo}>
        
        <View style={styles.fotoPerfil}>
          <Image source={require('../../assets/usuario.png')} style={styles.foto}/>
        </View>

        <View style={styles.formulario}>

          <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', flex: 0.5}}>
            <Image
              source={require('../../assets/botoes/botao-info.png')}
              style={{height: 100, width: 200,}}
            />
          </View>

            <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', flex: 1}}>
              <Text style={styles.texto}>NOME</Text>
              <Text>{dados.nome}</Text>

              <Text style={styles.texto}>IDADE</Text>
              <Text>{dados.idade}</Text>

              <Text style={styles.texto}>EMAIL</Text>
              <Text>{dados.email}</Text>

              <Text style={styles.texto}>SENHA</Text>
              <Text>{dados.senha}</Text>
            </View>

          <View style={styles.alinhamentoBotao}>
            <Pressable onPress={() => setModalVisible(true)}>
              <Image
                source={require('../../assets/botoes/editar.png')}
                style={{width: 52, height: 52}}
              />
            </Pressable>            
          </View>

          
        </View>

      </ImageBackground>

      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.fundoModal}>
          <View style={styles.conteudoModal}>
            <Text style={styles.textoModal}>Editar perfil</Text>

            <View style={styles.formularioModal}>
              <TextInput style={styles.inputModal} placeholder='Nome'/>

              <TextInput style={styles.inputModal} placeholder='Idade'/>

              <TextInput style={styles.inputModal} placeholder='Email'/>

              <TextInput style={styles.inputModal} placeholder='Senha'/>
            </View>

            <View style={styles.alinhamentoBotaoModal}>
              <Pressable style={[styles.botaoModal, {backgroundColor: '#054406'}]} onPress={() => setModalVisible(false)}>
                <Text style={{fontWeight: 'bold', color: 'white'}}>SALVAR</Text>
              </Pressable>

              <Pressable style={[styles.botaoModal, {backgroundColor: 'red'}]} onPress={() => setModalVisible(false)}>
                <Text style={{fontWeight: 'bold', color: 'white'}}>DESCARTAR</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  fundo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    paddingVertical: 10
  },
  formulario: {
    flex: 0.7,
    width: '80%',
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent:'space-evenly',
    backgroundColor: '#d9d9da',
    padding: 5,
    borderRadius: 10
  },
  input: {
    borderWidth: 1,
    borderRadius: 50,
    height: 40,
    width: '95%',
    textAlign: 'center',
    borderColor: '#604502',
    backgroundColor: 'white'
  },
  texto: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#858363'
  },
  foto: {
    height: 100,
    width: 100,
    borderRadius: 100
  },
  alinhamentoBotao: {
    width: '100%',
    alignItems: 'flex-end',
    flex: 0.2,
    padding: 8,
    marginBottom: 5
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
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: 'grey',
    paddingVertical: 10
  },
  textoModal: {
    fontSize: 40
  },
  inputModal: {
    borderRadius: 50,
    borderWidth: 1,
    width: 200,
    textAlign: 'center',

  },
  formularioModal: {
    justifyContent:'space-evenly',
    flex: 0.8,
  },
  botaoModal: {
    borderRadius: 50,
    borderWidth: 1,
    padding: 10,
    width: 120,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  alinhamentoBotaoModal: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 0.25
  },
  fundoFormulario: {
    resizeMode: 'contain',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
    padding: 20,
    overflow: 'hidden',
  },
})