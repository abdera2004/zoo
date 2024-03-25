import { StyleSheet, Text, View, TextInput, ImageBackground, Pressable } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Animado from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';

export default function Cadastro({navigation}) {

  const onPressButton = () => {
    Armazenar()
    console.log('Função 1 executada');
    
    navigation.navigate('Login')
    console.log('Função 2 executada');
  };

  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const Armazenar = async() =>{
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

  const Buscar = async (key)=>{
    const value = await AsyncStorage.getItem(key)
    setNome(value)
    return value
  }

  const InputWithIcon = ({ iconName, ...rest }) => {
    return (
      <View style={styles.textoEInput}>
        <FontAwesome5 name={iconName} size={20} color="gray" style={{left: 10, position: 'absolute'}}/>
        <TextInput {...rest} style={styles.input} />
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <ImageBackground source={require('../../assets/fundo-zoo.jpg')} style={styles.fundo}>
      
        <Animado.View animation="fadeInLeft" duration={2000} style={styles.formulario}>

          <View style={styles.textoView}>
            <Text style={styles.cadastro}>CADASTRO</Text>
          </View>

          <InputWithIcon onChangeText={setNome} value={nome} id='nome' iconName="user-circle" autoComplete='name' textContentType='name' placeholder='Digite o seu nome...' />

          <InputWithIcon onChangeText={setIdade} value={idade} id='idade' iconName="birthday-cake" placeholder='Digite sua idade...' />

          <InputWithIcon onChangeText={setEmail} value={email} id='email' iconName="envelope" autoComplete='email' textContentType='emailAddress' placeholder='Digite o seu e-mail...' />

          <InputWithIcon onChangeText={setSenha} value={senha} id='senha' iconName="lock" autoComplete='password' textContentType='password' placeholder='Digite sua senha...' />

          <InputWithIcon id='senha' iconName="lock" autoComplete='password' textContentType='password' placeholder='Confirme sua senha...' />

          <View style={styles.textoEInput2}>
            <Pressable style={styles.botao} onPress={onPressButton}>
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
    backgroundColor: 'white',
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
    flex: 1
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
    backgroundColor: 'green',

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
    paddingBottom: 5
  }
});