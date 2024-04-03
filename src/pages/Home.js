import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Animado from 'react-native-animatable';
import Navbar from '../../src/components/Navegacao';
import Lp from '../components/ListaTerritorios';

export default function Home({navigation}){

  return (
    <View style={styles.container}>
     
      <ImageBackground source={require('../../assets/fundo formulario zoo kids.png')} style={styles.fundo}>

        <Lp/>

      </ImageBackground>
      <Navbar/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        fontFamily: 'Snap ITC'
    },
    fundo: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flex: 1,
    },
});