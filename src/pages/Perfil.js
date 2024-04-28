import { View, Text, Pressable, Image, StyleSheet, TextInput, ImageBackground, Modal, Alert } from 'react-native';
import Cabecalho from '../components/Cabecalho';
import Navegacao from '../components/Navegacao';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import * as Animado from 'react-native-animatable';
import {
  useFonts,
  ChangaOne_400Regular,
} from '@expo-google-fonts/changa-one';
import Axios from 'axios';

export default function Perfil({navigation}) {

     const recuperarNome = async() =>
     {
       try {
            const nome = await AsyncStorage.getItem('nome');
            if (nome !== null) {
            setNome(nome);
            }
         } catch (error) {
            console.error('Erro:', error);
            return false;
         }
     }

    const recuperarEmail = async() =>
  {
    try {
        const email = await AsyncStorage.getItem('email');
        if (email !== null) {
          setEmail(email);
        }
    } catch (error) {
        console.error('Erro:', error);
        return false;
    } 
}

const recuperarSenha = async() =>
  {
    try {
        const senha = await AsyncStorage.getItem('senha');
        if (senha !== null) {
          setSenha(senha);
        }
    } catch (error) {
        console.error('Erro:', error);
        return false;
    }
}

const recuperarIdade = async() =>
  {
    try {
        const idade = await AsyncStorage.getItem('idade');
        if (idade !== null) {
          setIdade(idade);
        }
    } catch (error) {
        console.error('Erro:', error);
        return false;
    }
}

const recuperarID = async() =>
  {
    try {
        const valor = await AsyncStorage.getItem('id');
        if (valor !== null) {
          setId(valor);
        }
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
    recuperarID();
    console.log('Recuperando dados');
   }, []);

  const [modalVisible, setModalVisible] = useState(false);

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [id, setId] = useState('');

  const Carregar = async () => {
    const dadosUser = {
      'nomeUser': nome,
      'emailUser': email,
      'senhaUser': senha,
      'idadeUser': idade,
      'idUser': id
    };
    console.log(dadosUser)

  const axiosConfig = {
    headers: {
/*         'Accept': 'application/json',
*/         'Content-Type': 'application/x-www-form-urlencoded'
    }
  };
  try {
    const response = await Axios.post('http://localhost/bdzookids/userUpdate', dadosUser, axiosConfig );
    console.log(response.data)

    AsyncStorage.setItem('nome', response.data.nomeUser)
    AsyncStorage.setItem('idade', response.data.idadeUser)
    AsyncStorage.setItem('email', response.data.emailUser)
    AsyncStorage.setItem('senha', response.data.senhaUser)
    
    .then(() => {
      console.log('Dados atualizados com sucesso!'); 
      }) 
      .catch(error => { 
      console.error('Erro ao armazenar dados:', error); 
      });


  } catch (error) {
    console.error('Erro ao criar o usuário', error );
    return false;
  }
  }

  const Deletar = async () => {
    const dadosUser = {
      'idUser': id
    };

    const axiosConfig = {
      headers: {
  /*         'Accept': 'application/json',
  */         'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    try {
      const response = await Axios.post('http://localhost/bdzookids/userDestroy', dadosUser, axiosConfig );
      console.log(response.data)
  
      AsyncStorage.setItem('nome', response.data.nomeUser)
      AsyncStorage.setItem('idade', response.data.idadeUser)
      AsyncStorage.setItem('email', response.data.emailUser)
      AsyncStorage.setItem('senha', response.data.senhaUser)
      AsyncStorage.setItem('id', response.data.idUser)
      
      .then(() => {
        console.log('Usuário deletado com sucesso!');
        navigation.navigate('User')
        }) 
        .catch(error => { 
        console.error('Erro ao deletar usuário:', error); 
        });
  
  
    } catch (error) {
      console.error('Erro ao criar o usuário', error );
      return false;
    }
  }

  useFonts({
    ChangaOne_400Regular,
  });

  const AparecerMensagem = () => {

    Alert.alert('Atenção!', 'Esta ação é irreversível, deseja realmente apagar o seu perfil?', [
      {text: 'Cancelar'},
      {text: 'Sim', onPress: () => Deletar}
    ]);
  }

  return (
      
    <View style={styles.container}>
      <Cabecalho titulo={"Perfil"} navegarPara={'Home'}/>
      <ImageBackground source={require('../../assets/fundo-organico-de-selva-plana.jpg')} style={styles.fundo}>
        
        <Animado.View animation="flipInX" style={styles.fotoPerfil}>
          <Image source={require('../../assets/usuario.png')} style={styles.foto}/>
        </Animado.View>

        <Animado.View animation="flipInX" delay={500} duration={1000} style={styles.formulario}>

          <ImageBackground source={require('../../assets/fundo/fundo modal.png')} style={styles.fundoFormulario}>

          <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', flex: 0.5}}>
            <Image
              source={require('../../assets/botoes/botao-info.png')}
              style={{height: 100, width: 200,}}
            />
          </View>

            <View style={{width: '100%', paddingVertical: 40, justifyContent: 'space-between', alignItems: 'flex-start', flex: 1}}>
              <Text style={styles.texto}>NOME: {nome}</Text>

              <Text style={styles.texto}>IDADE: {idade}</Text>

              <Text style={styles.texto}>EMAIL: {email}</Text>

              <Text style={styles.texto}>SENHA: {senha}</Text>
            </View>

          <View style={styles.alinhamentoBotao}>
            <Pressable onPress={() => setModalVisible(true)}>
              <Image
                source={require('../../assets/botoes/editar.png')}
                style={{width: 52, height: 52}}
              />
            </Pressable>            
          </View>
          </ImageBackground>
        </Animado.View>

        <Pressable style={styles.botaoDeletar} onPress={AparecerMensagem}>
          <Text style={styles.textoBotaoDeletar}>DELETAR PERFIL</Text>
        </Pressable>

      </ImageBackground>

      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.fundoModal}>
          <View style={styles.conteudoModal}>
            <Text style={styles.textoModal}>Editar perfil</Text>

            <View style={styles.formularioModal}>

              <Text style={styles.texto}>Nome</Text>
              <TextInput style={styles.inputModal} placeholder='Nome' id='nome' value={nome} onChangeText={setNome}/>

              <Text style={styles.texto}>Idade</Text>
              <TextInput style={styles.inputModal} placeholder='Idade' id='idade' value={idade} onChangeText={setIdade} keyboardType='numeric'/>

              <Text style={styles.texto}>E-mail</Text>
              <TextInput style={styles.inputModal} placeholder='Email' id='email' value={email} onChangeText={setEmail}/>

              <Text style={styles.texto}>Senha</Text>
              <TextInput style={styles.inputModal} placeholder='Senha' id='senha' value={senha} onChangeText={setSenha}/>
            </View>

            <View style={styles.alinhamentoBotaoModal}>
              <Pressable style={[styles.botaoModal, {backgroundColor: '#054406'}]} onPress={Carregar}>
                <Text style={{color: 'white', fontFamily: 'ChangaOne_400Regular'}}>SALVAR</Text>
              </Pressable>

              <Pressable style={[styles.botaoModal, {backgroundColor: 'red'}]} onPress={() => setModalVisible(false)}>
                <Text style={{color: 'white', fontFamily: 'ChangaOne_400Regular'}}>FECHAR</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Navegacao/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  fundoFormulario: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  formulario: {
    flex: 0.7,
    width: '80%',
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent:'space-evenly',
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10
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
    fontSize: 24,
    color: 'black',
    fontFamily: 'ChangaOne_400Regular'
  },
  foto: {
    height: 100,
    width: 100,
    borderRadius: 100
  },
  alinhamentoBotao: {
    width: '100%',
    alignItems: 'flex-end',
    flex: 0.25,
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
    fontSize: 40,
    fontFamily: 'ChangaOne_400Regular'
  },
  inputModal: {
    borderRadius: 50,
    borderWidth: 1,
    width: 200,
    textAlign: 'center',
    marginBottom: 5,
    fontFamily: 'ChangaOne_400Regular'
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
    alignItems: 'center',
    marginTop: 10
  },
  alinhamentoBotaoModal: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 0.25
  },
  botaoDeletar: {
    borderRadius: 50,
    backgroundColor: 'red',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '5%',
    borderWidth: 1
  },
  textoBotaoDeletar: {
    fontFamily: 'ChangaOne_400Regular'
  }
})