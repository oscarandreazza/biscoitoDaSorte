import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

function App() {
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('');

  let frases = [
    'Siga os bons e aprenda com eles.',
    'A vida trará coisas boas se tiver paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
  ];

  function quebraBiscoito() {
    setImg(require('./src/biscoitoAberto.png'));

    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    setTextoFrase(`"${frases[numeroAleatorio]}"`);
  }

  function reiniciarBiscoito() {
    setImg(require('./src/biscoito.png'));
    setTextoFrase('');
  }

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img}></Image>
      <Text style={styles.textoFrase}>{textoFrase}</Text>

      <TouchableOpacity style={styles.button} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTxt}>Querar biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, {borderColor: '#121212'}]}
        onPress={reiniciarBiscoito}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTxt, {color: '#121212'}]}>Reiniciar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 230,
    height: 230,
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  button: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 25,
    margin: 10,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
});

export default App;
