import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList,
  Switch,
} from 'react-native';

import Header from './src/header';
import List from './src/list';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

function App() {
  const [feed, setFeed] = useState([
    {
      id: '1',
      nome: 'Oscar Andreazza',
      descricao: 'Estou aprendendo react native',
      imgPerfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
      likeada: false,
      likes: 4,
    },
    {
      id: '2',
      nome: 'Oscar Andreazza',
      descricao: 'Estou aprendendo react native',
      imgPerfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
      likeada: false,
      likes: 4,
    },
  ]);

  function curtiu() {
    const newFeed = Object.assign(feed);

    // const foundIndex = feed.findIndex(el => {
    //   return (el.id = id);
    // });
    //Em construção

    if (newFeed[0].likeada == false) {
      setFeed(newFeed[0].likes++);
      setFeed([{...newFeed[0], likeada: true}]);
    } else {
      setFeed(newFeed[0].likes--);
      setFeed([{...newFeed[0], likeada: false}]);
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={feed}
        renderItem={({item}) => <List data={item} event={curtiu} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
