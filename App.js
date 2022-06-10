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

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;

function App() {
  const [button, setButton] = useState('Iniciar');
  const [number, setNumber] = useState('00:00:00');
  const [lastTime, setLastTime] = useState(null);

  function start() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
      setButton('Iniciar');
    } else {
      timer = setInterval(() => {
        ss++;
        if (ss == 60) {
          ss = 0;
          mm++;
        }
        if (mm == 60) {
          mm = 0;
          hh++;
        }

        let format =
          (hh < 10 ? `0` + hh : hh) +
          ':' +
          (mm < 10 ? '0' + mm : mm) +
          ':' +
          (ss < 10 ? '0' + ss : ss);

        setNumber(format);
      }, 100);
      setButton('Pausar');
    }
  }
  function clear() {
    setLastTime(number);

    if (timer !== null) {
      clearInterval(timer);
      timer = null;
      setButton('Iniciar');
    }

    setNumber('00:00:00');
    ss = 0;
    mm = 0;
    hh = 0;
  }

  return (
    <View style={styles.container}>
      <Image source={require('./src/crono.png')} />
      <Text style={styles.timer}>{number}</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={start}>
          <Text style={styles.btnText}>{button}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={clear}>
          <Text style={styles.btnText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.registerArea}>
        <Text style={styles.registerText}>
          {lastTime ? 'Ultimo tempo: ' + lastTime : ''}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aeef',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    marginTop: -160,
    fontSize: 45,
    fontWeight: 'bold',
    color: '#FFF',
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 130,
    height: 40,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 20,
    borderRadius: 9,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef',
  },
  registerArea: {
    marginTop: 50,
  },
  registerText: {
    fontSize: 25,
    color: '#fff',
    fontStyle: 'italic',
  },
});

export default App;
