import { StyleSheet, Text, View, TextInput, ImageBackground, Pressable, Image, Alert } from 'react-native';
import * as Animado from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useState} from 'react';

export default function Login({navigation}) {

   const [nome, setNome] = useState('');
   const [senha, setSenha] = useState('');

   const Login = async () => {
    try {
      // Recupera os dados do usuário do AsyncStorage
      const storedUsername = await AsyncStorage.getItem('nome');
      const storedPassword = await AsyncStorage.getItem('senha');

      // Verifica se o nome de usuário e senha correspondem aos armazenados no AsyncStorage
      if (nome === storedUsername && senha === storedPassword) {
        // Login bem-sucedido, você pode navegar para a próxima tela ou executar a lógica apropriada
        console.log('Login bem-sucedido');
        navigation.navigate('Home');
        setNome('');
        setSenha('');
      } else {
        // Caso contrário, exibe uma mensagem de erro
        Alert.alert('Erro!', 'Informações inválidas', [
          {text: 'Entendido'}
        ]);
      }
    } catch (error) {
      // Trata erros de AsyncStorage
      console.error('Erro ao recuperar os dados do AsyncStorage:', error);
    }
  };

  return (
    <View style={styles.container}>

      <ImageBackground source={require('../../assets/fundo/fundo-cadastro.png')} style={styles.fundo}>
        <Animado.View animation="fadeInDown" duration={2500} style={styles.cadastro}>
          <ImageBackground source={require('../../assets/fundo/fundo cadastro.png')} style={styles.fundoLogin}>

            <View style={styles.titulo}>
              <Text style={styles.textoTitulo}>LOGIN</Text>
            </View>

            <View style={styles.botoes}>

              <View style={styles.section}>
                <FontAwesome5 resizeMode="stretch" name="user-circle" size={25} color="#8A501E" style={styles.icone}/>
                <TextInput style={styles.input} onChangeText={setNome} value={nome} id='nome' autoComplete='name' textContentType='name' placeholder='Digite o seu nome...' />
              </View>

              <View style={styles.section}>
                <FontAwesome5 resizeMode="stretch" name="lock" size={25} color="#8A501E" style={styles.icone}/>
                <TextInput style={styles.input} onChangeText={setSenha} value={senha} id='senha' autoComplete='password' textContentType='password' placeholder='Digite sua senha...' />
              </View>

              
              <Pressable onPress={Login} style={styles.ajusteBotao}>
                <Image
                   source={require('../../assets/botoes/botao logar transparente.png')}
                   style={styles.botao}
                  resizeMode='contain'
                />
              </Pressable>
              
              <Text style={{fontSize: 24, fontWeight: 'bold'}}>OU</Text>

              <View style={styles.section}>
                <AntDesign resizeMode="stretch" name="google" size={25} color="#8A501E" style={styles.icone}/>
                <Pressable style={styles.inputBotao}>
                  <Text style={{fontWeight: 'bold'}}>ENTRAR COM O GOOGLE</Text>
                </Pressable>
              </View>

              <View style={styles.section}>
                <FontAwesome5 resizeMode="stretch" name="phone" size={25} color="#8A501E" style={styles.icone}/>
                <Pressable style={styles.inputBotao}>
                  <Text style={{fontWeight: 'bold'}}>ENTRAR COM O NÚMERO DE TELEFONE</Text>
                </Pressable>
              </View>

            </View>

          </ImageBackground>
        </Animado.View>
      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fundo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'flex-start',
    flex: 1,
  },
  cadastro:{
    flex: 0.6,
    width: '100%',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    overflow: 'hidden',
  },
  fundoLogin: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
  titulo:{
    flex: 0.125,
    width: '100%',
    padding: 20,
  },
  textoTitulo: {
    fontSize: 30,
    fontWeight: 'bold',
    borderBottomWidth: 2,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    borderRadius: 50,
    backgroundColor: 'white',
    width: '90%',
  },
  icone: {
    padding: 10,
    alignItems: 'center',
  },
  input: {
    fontSize: 20,
    width: '100%',
    color: '#8A501E',
  },
  inputBotao: {
    fontSize: 20,
    width: '100%',
    color: '#8A501E',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute'
  },
  botoes: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  botao: {
    height: 100,
    width: 200,
  },
});