import { StyleSheet, Text, View, TextInput, ImageBackground, Pressable } from 'react-native';

export default function Cadastro({navigation}) {
  return (
    <View style={styles.container}>

      <ImageBackground source={require('../../assets/fundo-zoo.jpg')} style={styles.fundo}>
      
        <View style={styles.formulario}>

          <View style={styles.textoView}>
            <Text style={styles.cadastro}>CADASTRAR</Text>
          </View>

          <View style={styles.textoEInput}>
            <TextInput style={styles.input} autoComplete='name' textContentType='name' placeholder='Digite o seu nome...' ></TextInput>
          </View>
          
          <View style={styles.textoEInput}>
            <TextInput style={styles.input} autoComplete='password' textContentType='password' placeholder='Digite sua senha...'></TextInput>
          </View>

          <View style={styles.textoEInput}>
            <Pressable style={styles.botao} onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.textoFormulario}>LOGAR</Text>
            </Pressable>
          </View>

        </View>

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
    flex: 1,
    width: '80%',
    flexDirection: 'column',
    borderWidth: 2,
    marginVertical: 10,
    borderRadius: 15,
    overflow: 'hidden',
  },
  input: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 50,
    height: 50,
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
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 5,
    width: '100%'
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
  cadastro: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 40,
  },
  textoView: {
    width: '100%',
    alignItems: 'center',
  }
});