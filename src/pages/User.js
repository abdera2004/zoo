//Cadastro do usuário

import { StyleSheet, Text, View, TextInput, ImageBackground, Pressable, Alert, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Animado from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import Axios from 'axios';

export default function User({navigation}) {

  //Constante feita para executar várias funções ao mesmo tempo.
   const onPressButton = () => {

    //Se os campos estiverem vazios, o botão "cadastrar" não irá fazer nada.
     if(nome == '' || idade == '' || email == '' || senha == ''){
      
       Alert.alert('Erro!', 'Preencha os campos!', [
         {text: 'Entendido'}
       ]);
       console.log('Os campos devem ser preenchidos');
       //Caso contrário, ele vai enviar as informações dos campos para o banco de dados, armazenar localmente e navegar para a página de login.
     } else{
       Carregar()
       console.log('Carregar executada');

       armazenarLocalmente();
      
       navigation.navigate('Login');
       console.log('Navegação executada');      
     }

   };

   const armazenarLocalmente = async() =>{
     AsyncStorage.setItem('nome', nome)
     AsyncStorage.setItem('idade', idade)
     AsyncStorage.setItem('email', email)
     AsyncStorage.setItem('senha', senha)
     .then(() => {
       console.log('Dados armazenados com sucesso!'); 
       }) 
       .catch(error => { 
       console.error('Erro ao armazenar dados:', error); 
       });
   }

   const [nome, setNome] = useState('')
   const [idade, setIdade] = useState('')
   const [email, setEmail] = useState('')
   const [senha, setSenha] = useState('')

   const Carregar = async () => {
     const dadosUser = {
       'nomeUser': nome,
       'emailUser': email,
       'senhaUser': senha,
       'idadeUser': idade,
     };

   const axiosConfig = {
     headers: {
 /*         'Accept': 'application/json',
 */         'Content-Type': 'application/x-www-form-urlencoded'
     }
   };

   try {
     const response = await Axios.post('http://localhost/bdzookids/userInsert', dadosUser, axiosConfig );
     console.log(response.data)
   } catch (error) {
     console.error('Erro ao criar o usuário', error );
     return false;
   }
   }

  return (
    <View style={styles.container}>

      <ImageBackground source={require('../../assets/fundo/fundo-cadastro.png')} style={styles.fundo}>

        <Animado.View animation="fadeInDown" duration={2000} delay={500} style={styles.imagem}>
          <Image
          source={require('../../assets/logo zoo kids fundo transparente.png')}
          resizeMode='contain' style={{flex: 0.8}}
          />
        </Animado.View>

        <Animado.View animation="fadeInUp" duration={2500} delay={500} style={styles.cadastro}>
          <ImageBackground source={require('../../assets/fundo/fundo cadastro.png')} style={styles.fundoCadastro}>

            <View style={styles.titulo}>
              <Text style={styles.textoTitulo}>CADASTRO</Text>
            </View>

            <View style={styles.botoes}>
              <View style={styles.section}>
                <FontAwesome5 resizeMode="stretch" name="user-circle" size={25} color="#8A501E" style={styles.icone}/>
                <TextInput style={styles.input} onChangeText={setNome} value={nome} id='nome' autoComplete='name' textContentType='name' placeholder='Digite o seu nome...' />
              </View>

              <View style={styles.section}>
                <FontAwesome5 resizeMode="stretch" name="birthday-cake" size={25} color="#8A501E" style={styles.icone}/>
                <TextInput style={styles.input} onChangeText={setIdade} value={idade} id='idade' placeholder='Digite sua idade...' />
              </View>

              <View style={styles.section}>
                <FontAwesome5 resizeMode="stretch" name="envelope" size={25} color="#8A501E" style={styles.icone}/>
                <TextInput style={styles.input} onChangeText={setEmail} value={email} id='email' autoComplete='email' textContentType='emailAddress' placeholder='Digite o seu e-mail...' />
              </View>

              <View style={styles.section}>
                <FontAwesome5 resizeMode="stretch" name="lock" size={25} color="#8A501E" style={styles.icone}/>
                <TextInput style={styles.input} onChangeText={setSenha} value={senha} id='senha' autoComplete='password' textContentType='password' placeholder='Digite sua senha...' />
              </View>

              <View style={styles.botaoCadastrar}>
                <Pressable onPress={onPressButton} style={styles.ajusteBotao}>
                  <Image
                    source={require('../../assets/botoes/botao cadastrar.png')}
                    style={styles.botao}
                    resizeMode='contain'
                  />
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
    justifyContent: 'flex-start',
  },
  fundo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    flex: 1,
  },
  fundoCadastro: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
  cadastro:{
    flex: 0.7,
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: 'hidden'
  },
  imagem: {
    flex: 0.5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    borderRadius: 50,
    backgroundColor: 'white'
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
  botoes: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-evenly',
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
  botao: {
    height: 100,
    width: 200,
  },
  botaoCadastrar: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 5,
  },
});