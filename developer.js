import React from "react";
import {View, Image, Text, StyleSheet, Linking, TouchableOpacity} from 'react-native';
import avatar from './assets/avatar.png';

const Developer = () => {

    return(
        <View style={styles.rodape}>
            <TouchableOpacity onPress={()=>{Linking.openURL('https://www.portfoliodanielrodrigues.com.br')}} title='daniel' style={styles.botaofake}>
            <Image source={avatar} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    rodape: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      backgroundColor: '#ebebeb',
      borderRadius: 10,
      marginVertical: 10,
      marginLeft: '3%',
      marginRight: '3%', 
      width: '96%',
      height: 50,
    },
    botaofake: {
        position:'absolute',
        zIndex: 2,
        bottom: 10,
        left: 20,
    }
  });
  
export default Developer