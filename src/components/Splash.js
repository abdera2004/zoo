import React, { useEffect } from 'react';
import { View, Animated, Easing, StyleSheet, ImageBackground } from 'react-native';

const SplashScreen = ({ navigation }) => {
    const spinValue = new Animated.Value(0);
  
    useEffect(() => {
      Animated.loop(
        Animated.timing(
          spinValue,
          {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: true,
          }
        )
      ).start();
      setTimeout(() => {
        navigation.navigate('Login'); // Navegar para a próxima tela após o tempo desejado
      }, 2000); // Tempo de exibição da tela de splash
    }, []);
  
    const spin = spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/zoo.png')} style={styles.fundo}>
            <Animated.Image
            style={[styles.logo, { transform: [{ rotate: spin }] }]}
            source={require('../../assets/carregando.png')} // Substitua pelo seu próprio ícone de carregamento
            />
        </ImageBackground>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: 100,
      height: 100,
    },
    fundo: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      },
  });
  
  export default SplashScreen;