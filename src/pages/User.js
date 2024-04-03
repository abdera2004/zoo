//Cadastro do usuário

import { StyleSheet, Text, View, TextInput, ImageBackground, Pressable, Alert } from 'react-native';
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
       console.log('Dados armazenados com sucesso');

       navigation.navigate('Perfil')
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
     const response = await Axios.post('http:localhost/bdzookids/userInsert', dadosUser, axiosConfig );
     console.log(response.data)
   } catch (error) {
     console.error('Erro ao criar o usuário', error );
     return false;
   }
   }
  return (
    <View style={styles.container}>

      <ImageBackground source={require('../../assets/fundo-app-zoo-kids.png')} style={styles.fundo}>
      
        <Animado.View animation="fadeInLeft" duration={2000} style={styles.formulario}>

          <View style={styles.textoView}>
            <Text style={styles.cadastro}>CADASTRO</Text>
          </View>

          <TextInput style={styles.input} onChangeText={setNome} value={nome} id='nome' autoComplete='name' textContentType='name' placeholder='Digite o seu nome...' />

          <TextInput style={styles.input} onChangeText={setIdade} value={idade} id='idade' placeholder='Digite sua idade...' />

          <TextInput style={styles.input} onChangeText={setEmail} value={email} id='email' autoComplete='email' textContentType='emailAddress' placeholder='Digite o seu e-mail...' />

          <TextInput style={styles.input} onChangeText={setSenha} value={senha} id='senha' autoComplete='password' textContentType='password' placeholder='Digite sua senha...' />

          <View style={styles.textoEInput2}>
            <Pressable style={styles.botao} onPress={() => onPressButton()}>
              <Text style={styles.textoFormulario}>CADASTRAR</Text>
            </Pressable>
          </View>

        </Animado.View>

      </ImageBackground>

    </View>

  );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formulario: {
    flex: 0.8,
    width: '80%',
    flexDirection: 'column',
    borderWidth: 2,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#f8cd23',
    alignItems: 'center',
    justifyContent:'space-evenly',
    paddingHorizontal: 20
  },
  input: {
    borderWidth: 1,
    borderRadius: 50,
    height: 50,
    width: '95%',
    textAlign: 'center',
    borderColor: '#604502'
  },
  textoFormulario: {
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20
  },
  texto: {  
    color: 'white',
    fontWeight: 'bold'
  },
  fundo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  fundoBotao: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    flex: 1,
  },
  textoEInput: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  textoEInput2: {
    alignItems: 'center',
    width: '100%'
  },
  botao: {
    width: 200,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    overflow: 'hidden',
    backgroundColor: '#11390F',

  },
  cadastro: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 40,
    borderBottomWidth: 2,
  },
  textoView: {
    width: '100%',
    alignItems: 'flex-start',
    paddingBottom: 5,
  },
  fundoModal: {
    flex: 1,
    backgroundColor: '#00000090',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalPrincipal: {
    height: '30%',
    width: '70%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});