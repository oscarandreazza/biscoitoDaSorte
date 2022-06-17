import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

function List(props) {
  function fotoCurtida(likeada) {
    if (likeada === true) {
      return require('../likeada.png');
    } else {
      return require('../like.png');
    }
  }

  function curtidas(likes) {
    if (likes === 0) {
      return;
    } else if (likes == 1) {
      return <Text style={styles.curtidas}> {likes} curtida</Text>;
    } else {
      return <Text style={styles.curtidas}> {likes} curtidas</Text>;
    }
  }

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Image source={{uri: props.data.imgPerfil}} style={styles.imgPerfil} />
        <Text style={styles.nome}>{props.data.nome}</Text>
      </View>
      <Image
        resizeMode="cover"
        source={{uri: props.data.imgPublicacao}}
        style={styles.imgPublicacao}
      />
      <View style={styles.subCard}>
        <View style={styles.icons}>
          <TouchableOpacity onPress={props.event}>
            <Image
              source={fotoCurtida(props.data.likeada)}
              style={styles.iconsBtn}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={require('../comment.png')} style={styles.iconsBtn} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={require('../send.png')} style={styles.iconsBtn} />
          </TouchableOpacity>
        </View>

        <View>
          {curtidas(props.data.likes)}
          <View style={styles.subName}>
            <Text style={styles.nomeSub}>{props.data.nome}</Text>
            <Text style={styles.descricao}> {props.data.descricao}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginBottom: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
  },
  imgPerfil: {
    width: 44,
    height: 44,
    borderRadius: 25,
    margin: 7,
  },
  imgPublicacao: {
    height: 400,
    alignItems: 'center',
    marginBottom: 5,
  },
  nome: {
    color: '#000',
    fontSize: 18,
  },
  subCard: {
    height: 100,
  },
  icons: {
    flexDirection: 'row',
    paddingLeft: 3,
  },
  iconsBtn: {
    height: 27,
    width: 27,
    margin: 3,
  },
  curtidas: {
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
    marginLeft: 4,
  },
  nomeSub: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 3,
    marginLeft: 4,
  },
  descricao: {
    fontWeight: 'normal',
    marginLeft: 2,
  },
});

export default List;
