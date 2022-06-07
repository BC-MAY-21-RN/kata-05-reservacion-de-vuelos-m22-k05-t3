import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import texts from '../../consts/text';
import VisibleSVG from '../../assets/icons/visible.svg';
import VisibleBlueSVG from '../../assets/icons/visibleblue.svg';
import styles from './style';

export default function InputComponent({
  title,
  changeForm,
  input,
  text,
  alert,
}) {
  const [marginBlue, setMarginBlue] = useState(text);
  const [iconisSelect, setIconIsSelect] = useState(true);
  return (
    <View style={styles.container}>
      <Text
        style={{
          ...styles.titleInput,
          ...(title === 'First Name' ? styles.font18 : styles.font16),
        }}>
        {title}{' '}
        {title !== 'First Name' ? (
          <Text style={!alert ? {} : styles.textpink}>
            {!alert ? '*' : texts.register[input + 'warning']}
          </Text>
        ) : null}
      </Text>
      <TextInput
        secureTextEntry={title === 'Password' ? iconisSelect : false}
        style={{
          ...styles.input,
          ...(marginBlue ? styles.blue : styles.gray),
        }}
        onChange={(e, a) => {
          changeForm(e.nativeEvent.text, input);
          e.nativeEvent.text.length > 0
            ? setMarginBlue(true)
            : setMarginBlue(false);
        }}
      />
      {title === 'Password' ? (
        <TouchableOpacity
          onPress={() => setIconIsSelect(!iconisSelect)}
          style={styles.icon}>
          {iconisSelect ? <VisibleSVG /> : <VisibleBlueSVG />}
        </TouchableOpacity>
      ) : null}
      {title === 'Password' ? (
        <Text style={styles.textBottom}>{texts.register.textinput3}</Text>
      ) : null}
    </View>
  );
}
