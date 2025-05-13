import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';
import SymbolOn from './assets/imgs/symbol-on.png';
import SymbolOff from './assets/imgs/symbol-off.png'

export default function App() {
  const [isActive, setisActive] = useState(false)

  function handleSymbol (){
    setisActive((oldValue:boolean) => {
      return !oldValue
    })
  }

  return (
    <View style={isActive ? styles.containerOn : styles.containerOff}>
      <TouchableOpacity onPress={handleSymbol}>
      <Image 
       source={isActive ? SymbolOn : SymbolOff}
       />
       </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerOff: {
  flex: 1,
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'center',

  }
});
