import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

function Header() {
  return (
    <View style={styles.header}>
      <View>
        <TouchableOpacity>
          <Image source={require('../logo.png')} style={styles.logo} />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Image source={require('../send.png')} style={styles.send} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 55,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 17,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 2,
  },
  logo: {},
  send: {
    width: 30,
    height: 30,
  },
});

export default Header;
