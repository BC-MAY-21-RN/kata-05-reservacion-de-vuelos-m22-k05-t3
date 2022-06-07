import React, {useState} from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import CheckSVG from '../../assets/icons/check.svg';
import styles from './styles';

export default function Terms({text, isfirst, changeForm, term, form}) {
  const [check, setCheck] = useState(form);
  return (
    <View
      style={{
        ...styles.container,
        ...(Dimensions.get('screen').height <= 640
          ? {marginTop: isfirst ? 23 : 0, marginBottom: 7}
          : {marginTop: isfirst ? 25 : 0, marginBottom: 10}),
      }}>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            changeForm(!check, term);
            setCheck(!check);
          }}
          style={{
            ...styles.touchable,
            ...(check ? styles.touchableblue : null),
          }}>
          {check ? <CheckSVG /> : null}
        </TouchableOpacity>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}
