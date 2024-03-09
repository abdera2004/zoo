import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ImageBackground, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.formulario}>

        <ImageBackground source={require('../../assets/fundo-organico-de-selva-plana.jpg')} style={styles.fundo}>

        <View style={styles.textoEInput}>
          <Text style={styles.textoFormulario}>NOME</Text>
          <TextInput style={styles.input} autoComplete='name' textContentType='name' placeholder='Digite o seu nome...' ></TextInput>
        </View>
        
        <View style={styles.textoEInput}>
          <Text style={styles.textoFormulario}>SENHA</Text>
          <TextInput style={styles.input} autoComplete='password' textContentType='password' placeholder='Digite sua senha...'></TextInput>
        </View>

        <View style={styles.textoEInput}>
          <Pressable style={styles.botao}>
            <ImageBackground source={require('../../assets/madeira.jpg')} style={styles.fundo}>              
              <Text style={styles.textoFormulario}>LOGAR</Text>
            </ImageBackground>               
          </Pressable>
        </View>

        </ImageBackground>

      </View>

      <StatusBar style="auto" />
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
    flex: 0.4,
    width: '70%',
    flexDirection: 'column',
    borderWidth: 2,
    marginBottom: 5,
    borderRadius: 15,
    overflow: 'hidden',
  },
  input: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    marginBottom: 10,
    width: '80%'
  },
  textoFormulario: {
    color: 'red',
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
    justifyContent: 'center',
    resizeMode: 'contain',
    flex: 1,
  },
  textoEInput: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    width: '50%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    overflow: 'hidden'
  }
});