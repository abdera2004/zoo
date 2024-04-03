import { View, Text, Pressable, Image, StyleSheet, TextInput, ImageBackground } from 'react-native';
import Cabecalho from '../components/Cabecalho';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

export default function Perfil({navigation}) {

  const Carregar = () => {

    console.log('Recuperando dados');

    const resgateNome = async() => {
      AsyncStorage.getItem('nome');  
      .then(value => { 
      if (value !== null) { 
      console.log('Valor recuperado:', value); 
      } else { 
      console.log('Nenhum valor encontrado para a chave especificada'); 
      } 
      }) 
      .catch(error => { 
      console.error('Erro ao recuperar dados:', error); 
      }); 
    };

    const resgateIdade = async() => {
      AsyncStorage.getItem('idade');  
      .then(value => { 
      if (value !== null) { 
      console.log('Valor recuperado:', value); 
      } else { 
      console.log('Nenhum valor encontrado para a chave especificada'); 
      } 
      }) 
      .catch(error => { 
      console.error('Erro ao recuperar dados:', error); 
      }); 
    };

    const resgateEmail = async() => {
      AsyncStorage.getItem('email');  
      .then(value => { 
      if (value !== null) { 
      console.log('Valor recuperado:', value); 
      } else { 
      console.log('Nenhum valor encontrado para a chave especificada'); 
      } 
      }) 
      .catch(error => { 
      console.error('Erro ao recuperar dados:', error); 
      }); 
    };

    const resgateSenha = async() => {
      AsyncStorage.getItem('senha');  
      .then(value => { 
      if (value !== null) { 
      console.log('Valor recuperado:', value); 
      } else { 
      console.log('Nenhum valor encontrado para a chave especificada'); 
      } 
      }) 
      .catch(error => { 
      console.error('Erro ao recuperar dados:', error); 
      }); 
    };

};

  useEffect(() => {
    
    Carregar();
  }, []);

  return (
    <View style={styles.container}>
      <Cabecalho titulo={'Perfil'}/>
      <ImageBackground source={require('../../assets/fundo-organico-de-selva-plana.jpg')} style={styles.fundo}>
        
        <View style={styles.fotoPerfil}>
          <Image source={require('../../assets/usuario.png')} style={styles.foto}/>
          <Text style={styles.texto}>NOME</Text>
        </View>

        <View style={styles.formulario}>

          <Text style={styles.texto}>NOME</Text>
          <Text value={nome}></Text>

          <Text style={styles.texto}>IDADE</Text>
          <Text value={idade}></Text>

          <Text style={styles.texto}>EMAIL</Text>
          <Text value={email}></Text>

          <Text style={styles.texto}>SENHA</Text>
          <Text value={senha}></Text>

        </View>

      </ImageBackground>

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
  }
})