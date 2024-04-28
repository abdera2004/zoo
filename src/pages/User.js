//Cadastro do usuário

import { StyleSheet, Text, View, TextInput, ImageBackground, Pressable, Alert, Image,} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Animado from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import Axios from 'axios';
import Loading from '../components/Loading';
import {
  useFonts,
  ChangaOne_400Regular,
} from '@expo-google-fonts/changa-one';

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
       Carregar();
       console.log('Carregar executada');
       console.log('Navegação executada');
       Aparecer();
     }

   };

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

     AsyncStorage.setItem('nome', response.data.nomeUser)
     AsyncStorage.setItem('idade', response.data.idadeUser)
     AsyncStorage.setItem('email', response.data.emailUser)
     AsyncStorage.setItem('senha', response.data.senhaUser)
     AsyncStorage.setItem('id', response.data.id)
     
     .then(() => {
       console.log('Dados armazenados com sucesso!'); 
       }) 
       .catch(error => { 
       console.error('Erro ao armazenar dados:', error); 
       });


   } catch (error) {
     console.error('Erro ao criar o usuário', error );
     return false;
   }
   }

   const [mostrar, setMostrar] = useState(false);

   const Aparecer = () => {
       setMostrar(true)
       setTimeout(() => {
           setMostrar(false)
           navigation.navigate('Home')
       }, 3000)
   };

  useFonts({
    ChangaOne_400Regular,
  });

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
              
              <View style={[styles.section, {justifyContent: 'center'}]}>
                <Pressable onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.texto}>Já possui uma conta? Faça login</Text>
                </Pressable>
              </View>

              <View style={styles.sectionBotao}> 
                <Pressable onPress={onPressButton}>
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
      <Loading mostrar={mostrar}/>
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
    flex: 0.75,
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: 'hidden',
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
    margin: 20,
    borderRadius: 50,
    backgroundColor: 'white',
    width: '90%'
  },
  sectionBotao: {
    alignItems: 'center',
    margin: 10,
  },
  icone: {
    padding: 10,
    alignItems: 'center',
  },
  input: {
    fontSize: 20,
    width: '100%',
    color: '#8A501E',
    fontFamily: 'ChangaOne_400Regular',
  },
  botoes: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  titulo:{
    flex: 0.125,
    width: '100%',
    padding: 20,
  },
  textoTitulo: {
    fontSize: 30,
    borderBottomWidth: 2,
    fontFamily: 'ChangaOne_400Regular'
  },
  botao: {
    height: 100,
    width: 200,
  },
  texto: {
    fontFamily: 'ChangaOne_400Regular'
  }
});