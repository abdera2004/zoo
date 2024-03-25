import { StyleSheet, Text, View, TextInput, ImageBackground, Pressable } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Animado from 'react-native-animatable';

export default function Home({navigation}){

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo(a) {nome} ao Zoo Kids!</Text>
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
        fontSize: 32,
        fontWeight: 'bold',
        fontFamily: 'Snap ITC'
    },
});