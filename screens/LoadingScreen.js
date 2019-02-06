import React from 'react';
import { StyleSheet, Text, ImageBackground, Image, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ImageBackground source={require('../assets/images/couv.jpg')} style={styles.image}>
        <View style={styles.title_box}>
          <Text style={styles.title_1}>CLICK'N</Text>
          <Text style={styles.title_2}>PARK</Text>
        </View>
        <Image source={require('../assets/images/logo_transp.png')} style={styles.logo}/>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginTop: 20,
  },
  title_box: {
    backgroundColor: 'rgba(193, 200, 204, 0.8)',
    width: '100%',
    height: '30%',
    marginTop: '15%'
  },
  title_1: {
    color: 'rgb(205, 122, 20)',
    fontSize: 50,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Arial',
    textAlign: 'center',
    marginTop: 20,
  },
  title_2: {
    color: 'rgb(35, 106, 237)',
    fontSize: 50,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Arial',
    textAlign: 'center',
    marginTop: 15,
  },
});
