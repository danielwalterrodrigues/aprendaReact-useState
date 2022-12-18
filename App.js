import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';  // é preciso importar a função lá do React antes de usá-la
import Developer from './developer';
// para trabalhar com imagens internas do projeto, é preciso importar as urls delas pra uma variável
import Imgtubarao from './assets/tubarao.png';
import Imgfalcao from './assets/falcao.png';
import mcjhenny from './assets/woman-avatar.png';

export default function App() {
  const [teamo, setTeamo] = useState(''); // Assim eu crio a variavel "teamo" e a função que vai manipulá-la "setTeamo"
  return (
    <>
    <View style={styles.container}>
      <View style={styles.viewtit}>
        <Text style={styles.tit}>AprendaReact - UseState</Text>
      </View>
      <View style={styles.item}>
        <View style={styles.teamo}>
          {teamo && <Text>{teamo}</Text>}
            { teamo === '' && <Text style={styles.istyping}>McJehnny is typing...</Text> }
        </View>
        <Image source={mcjhenny} style={styles.jhenny}></Image>
      </View>
      <View style={styles.item}>
        <TouchableOpacity onPress={()=>{setTeamo('Tubarão...')}} style={styles.botaoT}>
          <Image source={Imgtubarao}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.item}>
        <TouchableOpacity onPress={()=>{setTeamo('Te amo, Falcão!')}} style={styles.botaoF}>
          <Image source={Imgfalcao}></Image>
        </TouchableOpacity>
      </View>
     
      <Developer />
      {/* Esse DEVELOPER é o meu rodapé com o meu jabázinho. Vcoê pode simplesmente removê-lo, se quiser :-( */}
      
      <StatusBar style="auto" />
      
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#FFF',
  },
  tit: {
    fontSize: 20,
  },
  viewtit: {
    marginBottom: 30,
  },
  item : {
    display: 'flex',
    width: '100%',
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  botaoT: {
    backgroundColor: '#E0FCA3',
    borderColor: "#52A20D",
    borderWidth: 3,
    padding: 20,
    margin:20,
    borderRadius: 15,
  },
  botaoF: {
    backgroundColor: '#FFCB6B',
    borderColor: "#B76F1D",
    borderWidth: 3,
    padding: 20,
    margin:20,
    borderRadius: 15,
  },
  teamo: {
    color: '#999',
    backgroundColor: '#ebebeb',
    width:250,
    paddingVertical: 10,
    paddingHorizontal:20,
    borderRadius: 15,
    marginTop: 40,
    height: 40,
  },
  jhenny: {
    width: 70,
    height: 70,
    backgroundColor: '#FFE5D5',
    borderRadius: 50,
    margin: 20,
    borderWidth: 1,
    borderColor: '#FF7663',
  },
  istyping: {
    position: 'absolute',
    top:25,
    left:20,
    fontSize:10,
    marginTop:15,
    marginBottom: 7,
    color: '#9b9b9b',
  }


});
