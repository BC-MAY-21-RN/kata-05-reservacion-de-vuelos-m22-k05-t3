import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import texts from '../../consts/text';
import VisibleSVG from '../../assets/icons/visible.svg';
import styles from './style';

export default function InputComponent({title}) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          ...styles.titleInput,
          ...(title === 'First Name' ? styles.font18 : styles.font16),
        }}>
        {title}
      </Text>
      <TextInput style={styles.input} />
      {title === 'Password' ? (
        <TouchableOpacity style={styles.icon}>
          <VisibleSVG />
        </TouchableOpacity>
      ) : null}
      {title === 'Password' ? (
        <Text style={styles.textBottom}>{texts.register.textinput3}</Text>
      ) : null}
    </View>
  );
}
