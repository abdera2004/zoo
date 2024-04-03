import { View, Text, Pressable, Image, StyleSheet, TextInput, ImageBackground } from 'react-native';
import Cabecalho from '../components/Cabecalho';
export default function Perfil({navigation}) {
  return (
    <View style={styles.container}>
      <Cabecalho titulo={'Perfil'}/>
      <ImageBackground source={require('../../assets/fundo-organico-de-selva-plana.jpg')} style={styles.fundo}>
        
        <View style={styles.fotoPerfil}>
          <Image style={styles.foto}/>
          <Text>NOME</Text>
        </View>

        <View style={styles.formulario}>

          <Text>NOME:</Text>
          <TextInput style={styles.input}/>

          <Text>IDADE:</Text>
          <TextInput style={styles.input}/>

          <Text>EMAIL:</Text>
          <TextInput style={styles.input}/>

          <Text>SENHA:</Text>
          <TextInput style={styles.input}/>
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
    flex: 1,
    width: '80%',
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent:'space-evenly',
  },
  input: {
    borderWidth: 1,
    borderRadius: 50,
    height: 50,
    width: '95%',
    textAlign: 'center',
    borderColor: '#604502',
    backgroundColor: 'white'
  },
})