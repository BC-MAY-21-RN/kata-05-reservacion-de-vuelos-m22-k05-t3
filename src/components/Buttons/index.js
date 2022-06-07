import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import texts from '../../consts/text';
import GoogleSVG from '../../assets/icons/google.svg';
import styles from './styles';

export default function Buttons({buttonsActive}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          ...styles.touchable,
          ...(buttonsActive ? styles.buttonActive : null),
        }}>
        <Text style={styles.text}>{texts.register.button1}</Text>
      </TouchableOpacity>
      <Text style={styles.ortext}>Or</Text>
      <TouchableOpacity
        style={{
          ...styles.touchable,
          ...(buttonsActive ? styles.buttonActive : null),
        }}>
        <Text style={styles.text}>{texts.register.button2}</Text>
        <View style={styles.icon}>
          <GoogleSVG />
        </View>
      </TouchableOpacity>
    </View>
  );
}
