import React, {useState} from 'react';
import {View, Text} from 'react-native';
import texts from '../../consts/text';
import InputComponent from '../../components/InputComponent';
import RegisterUser from '../../models/RegisterUser';
import Buttons from '../../components/Buttons';
import Terms from '../../components/Term';
import BottomText from '../../components/BottomText';
import styles from './styles';

export default function RegisterScreen() {
  const [form, setform] = useState(new RegisterUser());
  const [buttonsActive, setButtonsActive] = useState(false);
  const [alert, setAlert] = useState(false);

  const changeForm = (value, key) => {
    form.setValues({[key]: value});
    setButtonsActive(form.getBool());
    setform(
      new RegisterUser(
        form.valuesRegister.input1,
        form.valuesRegister.input2,
        form.valuesRegister.input3,
        form.valuesRegister.check1,
        form.valuesRegister.check2,
      ),
    );
    console.log(form);
  };

  const changeAlert = bool => {
    setAlert(bool);
  };

  return (
    <View>
      <Text style={styles.title}>{texts.register.title}</Text>
      <InputComponent
        title={texts.register.input1}
        changeForm={changeForm}
        input={'input1'}
        text={form.getValues().input1.length > 0}
        alert={alert}
      />
      <InputComponent
        title={texts.register.input2}
        changeForm={changeForm}
        input={'input2'}
        text={form.getValues().input2.length > 0}
        alert={alert}
      />
      <InputComponent
        title={texts.register.input3}
        changeForm={changeForm}
        input={'input3'}
        text={form.getValues().input3.length > 0}
        alert={alert}
      />
      <Terms
        text={texts.register.term1}
        isfirst={true}
        changeForm={changeForm}
        form={form.valuesRegister.check1}
        term={'check1'}
      />
      <Terms
        text={texts.register.term2}
        isfirst={false}
        changeForm={changeForm}
        form={form.valuesRegister.check2}
        term={'check2'}
      />
      <Buttons
        buttonsActive={buttonsActive}
        form={form.getValues()}
        changeAlert={changeAlert}
      />
      <BottomText />
    </View>
  );
}
