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
      
        <Animado.View animation="fadeInLeft" duration={2000} style={styles.formulario}>

          <ImageBackground source={require('../../assets/fundo/fundo-formulario-cadastro.png')} style={styles.fundoFormulario}>

            <View style={styles.textoView}>
              <Text style={styles.cadastro}>CADASTRO</Text>
            </View>

            <View style={styles.section}>
              <FontAwesome5 name="user-circle" size={25} color="black" style={styles.icone}/>
              <TextInput style={styles.input} onChangeText={setNome} value={nome} id='nome' autoComplete='name' textContentType='name' placeholder='Digite o seu nome...' />
            </View>

            <View style={styles.section}>
              <FontAwesome5 name="birthday-cake" size={25} color="black" style={styles.icone}/>
              <TextInput style={styles.input} onChangeText={setIdade} value={idade} id='idade' placeholder='Digite sua idade...' />
            </View>

            <View style={styles.section}>
              <FontAwesome5 name="envelope" size={25} color="black" style={styles.icone}/>
            <TextInput style={styles.input} onChangeText={setEmail} value={email} id='email' autoComplete='email' textContentType='emailAddress' placeholder='Digite o seu e-mail...' />
            </View>

            <View style={styles.section}>
              <FontAwesome5 name="lock" size={25} color="black" style={styles.icone}/>
            <TextInput style={styles.input} onChangeText={setSenha} value={senha} id='senha' autoComplete='password' textContentType='password' placeholder='Digite sua senha...' />
            </View>

            <View style={styles.textoEInput2}>
              <Pressable onPress={onPressButton}>
                <Image
                  source={require('../../assets/botoes/placa cadastrar.png')}
                  style={styles.botao}
                />
              </Pressable>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formulario: {
    flex: 0.6,
    width: 220,
    flexDirection: 'column',
    borderWidth: 2,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#f8cd23',
    alignItems: 'center',
    justifyContent:'space-evenly',
  },
  fundoFormulario: {
    resizeMode: 'cover',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
    overflow: 'hidden',
  },
  input: {
    flex: 1,
    fontFamily: 'Comic Sans MS',
    fontSize: 10,
    height: '100%'
  },
  fundo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textoEInput2: {
    alignItems: 'center',
    width: '100%'
  },
  botao: {
    width: 200,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    flex: 0.25
  },
  cadastro: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 30,
    borderBottomWidth: 2,
    fontFamily: 'Comic Sans MS',
    marginStart: 10
  },
  textoView: {
    width: '100%',
    alignItems: 'flex-start',
    flex: 2,
  },
  icone: {
    padding: 10,
    height: 50,
    width: 50,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    borderWidth: 1,
    borderRadius: 50,
    flex: 1
  }
});