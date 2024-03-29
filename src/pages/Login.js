import { StyleSheet, Text, View, TextInput, ImageBackground, Pressable, Image } from 'react-native';
import * as Animado from 'react-native-animatable';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>

      <ImageBackground source={require('../../assets/fundo-zoo.jpg')} style={styles.fundo}>

        <Animado.Image animation="bounceInDown" duration={2000} delay={500} source={require('../../assets/logo zoo kids fundo transparente.png')} resizeMode='contain' style={{width: '90%', flex: 0.39}}></Animado.Image>

        <Animado.View animation="fadeInLeft" duration={2000} delay={1500} style={styles.formulario}>

          <ImageBackground source={require('../../assets/fundo-organico-de-selva-plana.jpg')} style={styles.fundoFormulario}>

          <View style={styles.textoEInput}>
            <TextInput style={styles.input} autoComplete='name' textContentType='name' placeholder='Digite o seu nome...' ></TextInput>
          </View>
          
          <View style={styles.textoEInput}>
            <TextInput style={styles.input} autoComplete='password' textContentType='password' placeholder='Digite sua senha...'></TextInput>
          </View>

          <View style={styles.textoEInput}>
            <Pressable style={styles.botao} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.textoFormulario}>LOGAR</Text>
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
    flex: 0.3,
    width: '60%',
    marginBottom: 5,
    borderRadius: 15,
    overflow: 'hidden',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 50,
    height: 40,
    marginBottom: 10,
    width: 200,
    paddingHorizontal: 2,
    textAlign: 'center'
  },
  textoFormulario: {
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center'
  },
  texto: {  
    color: 'white',
    fontWeight: 'bold'
  },
  fundo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
  },
  fundoFormulario: {
    resizeMode: 'contain',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
    padding: 20,
    overflow: 'hidden',
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    overflow: 'hidden',
    backgroundColor: 'green'
  },
});