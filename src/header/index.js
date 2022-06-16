import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image source={require('../logo.png')} style={styles.logo} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../send.png')} style={styles.send} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 55,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 17,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 2,
  },
  send: {
    width: 23,
    height: 23,
  },
  logo: {},
});

export default Header;
