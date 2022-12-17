/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  Button,
  Alert,
  Share
} from 'react-native';

import Caixa from './src/Audios/index';
import lupa from './assets/Imgs/lupa.png'
import Smzinho from './assets/Imgs/smzinho.jpg'

const width = Dimensions.get('screen').width;

export default function App() {

  return (
    <View style={estilos.container}>
  
      <StatusBar backgroundColor="#80C500" barStyle="dark-content" />
      <ScrollView>      

        <Image source={Smzinho} style={estilos.smz} />

        <View style={estilos.cabecalho}>
          <Text style={estilos.titulo}>FC Smzinho - Áudios</Text>
          
          <View style={estilos.caixaDePesquisa}>
            <Image source={lupa} />
            <TextInput
              style={estilos.pesquisar}
              // inputAccessoryViewID={}
              // onChangeText={}
              // value={}
              placeholder={"Pesquisar áudio"}
              placeholderTextColor={'#00000050'}
            />
          </View>   
        </View>

        <Caixa></Caixa>
      </ScrollView>
    </View>
);
};


const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
    //paddingHorizontal: 20,
  }, 
  smz: {
    width: width,
    height: 180,
  },
  cabecalho: {
    width: '100%',
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0A0E26',
    marginBottom: 10,
    marginTop: 10,
  },
  caixaDePesquisa: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  pesquisar: {
    padding: 2,
    marginLeft: 15,
  },
});
