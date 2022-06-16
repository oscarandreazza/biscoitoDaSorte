import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

function List(props) {
  function carregaIcone(likeada) {
    return likeada ? require('../likeada.png') : require('../like.png');
  }

  function mostraLikes(likers) {
    if (likers === 0) {
      return;
    } else {
      return (
        <Text style={Styles.likes}>
          {likers} {likers > 1 ? 'curtidas' : 'curtida'}
        </Text>
      );
    }
  }

  return (
    <View>
      <View style={Styles.viewPerfil}>
        <Image source={{uri: props.data.imgperfil}} style={Styles.imgPerfil} />
        <Text style={Styles.nomeUser}>{props.data.nome}</Text>
      </View>
      <Image
        resizeMode="cover"
        source={{uri: props.data.imgPublicacao}}
        style={Styles.fotoPublicada}
      />
      <View style={Styles.areaBtn}>
        <TouchableOpacity style={Styles.btnSend}>
          <Image
            source={carregaIcone(props.data.likeada)}
            style={Styles.iconeLike}
          />
        </TouchableOpacity>

        <TouchableOpacity style={Styles.btnSend}>
          <Image source={require('../comment.png')} style={Styles.iconeLike} />
        </TouchableOpacity>

        <TouchableOpacity style={Styles.btnSend}>
          <Image source={require('../send.png')} style={Styles.iconeLike} />
        </TouchableOpacity>
      </View>

      {mostraLikes(props.data.likers)}

      <Text style={Styles.nomeRodape}>{props.data.nome}</Text>
      <Text style={Styles.descRodape}>{props.data.descricao}</Text>
    </View>
  );
}
const Styles = StyleSheet.create({
  viewPerfil: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  imgPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  nomeUser: {
    paddingLeft: 5,
    fontSize: 22,
    color: '#000',
  },
  fotoPublicada: {
    height: 400,
    alignItems: 'center',
  },
  areaBtn: {
    flexDirection: 'row',
    padding: 10,
  },
  iconeLike: {
    width: 25,
    height: 25,
  },
  btnSend: {
    paddingLeft: 7,
  },
  likes: {
    fontWeight: 'bold',
    marginLeft: 5,
    marginBottom: 1,
  },
  nomeRodape: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 5,
  },
  descRodape: {
    paddingLeft: 5,
    paddingBottom: 10,
    fontSize: 15,
  },
});

export default List;
