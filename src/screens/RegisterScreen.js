import React from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import texts from '../consts/text';
import colors from '../consts/colors';
import VisibleSVG from '../assets/icons/visible.svg';
import CheckSVG from '../assets/icons/check.svg';
import GoogleSVG from '../assets/icons/google.svg';

const InputComponent = ({title}) => {
  return (
    <View
      style={
        Dimensions.get('screen').height <= 640
          ? {marginTop: 7}
          : Dimensions.get('screen').height >= 641 &&
            Dimensions.get('screen').height < 730
          ? {marginTop: 15}
          : {marginTop: 18}
      }>
      <Text
        style={{
          marginLeft: 20,
          fontSize: title === 'First Name' ? 18 : 16,
          marginBottom: '1.23%',
          color: colors.titleInputs,
        }}>
        {title}
      </Text>
      <TextInput
        style={{
          ...{
            width: Dimensions.get('screen').width - 40,
            borderColor: colors.InputBorder,
            borderWidth: 1,
            fontSize: 17,
            marginLeft: 20,
            borderRadius: 2,
          },
          ...(Dimensions.get('screen').height <= 640
            ? {height: 40}
            : {height: 50}),
        }}
      />
      {title === 'Password' ? (
        <TouchableOpacity
          style={{
            ...{position: 'absolute', right: 35},
            ...(Dimensions.get('screen').height <= 640 ? {top: 40} : {top: 45}),
          }}>
          <VisibleSVG />
        </TouchableOpacity>
      ) : null}
      {title === 'Password' ? (
        <Text
          style={{
            marginLeft: 20,
            fontSize: 13,
            marginTop: '1.2%',
            color: colors.passwordtextvalidation,
          }}>
          {texts.register.textinput3}
        </Text>
      ) : null}
    </View>
  );
};

const Terms = ({text, isfirst}) => {
  return (
    <View
      style={{
        ...{
          marginLeft: 20,
          width: Dimensions.get('screen').width - 40,
          height: 20.1,
        },
        ...(Dimensions.get('screen').height <= 640
          ? {marginTop: isfirst ? 23 : 0, marginBottom: 7}
          : {marginTop: isfirst ? 25 : 0, marginBottom: 10}),
      }}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            width: 20,
            height: 20,
            borderColor: colors.termscolor,
            borderWidth: 1,
          }}>
          <CheckSVG />
        </TouchableOpacity>
        <Text style={{color: colors.termscolor, marginLeft: 10, fontSize: 16}}>
          {text}
        </Text>
      </View>
    </View>
  );
};

const Buttons = () => {
  return (
    <View
      style={
        Dimensions.get('screen').height <= 640
          ? {marginTop: 15}
          : Dimensions.get('screen').height >= 641 &&
            Dimensions.get('screen').height < 730
          ? {marginTop: 19}
          : {marginTop: 30}
      }>
      <TouchableOpacity
        style={{
          backgroundColor: colors.inactive,
          height: 40,
          width: Dimensions.get('screen').width - 60,
          marginLeft: 30,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: colors.white, fontSize: 18}}>
          {texts.register.button1}
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          alignSelf: 'center',
          marginVertical: '1.23%',
          color: colors.inactive,
          fontSize: 16,
        }}>
        Or
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: colors.inactive,
          height: 40,
          width: Dimensions.get('screen').width - 60,
          marginLeft: 30,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: colors.white, fontSize: 18}}>
          {texts.register.button2}
        </Text>
        <View style={{position: 'absolute', left: 28}}>
          <GoogleSVG />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default function RegisterScreen() {
  return (
    <View>
      <Text
        style={{
          ...{
            color: colors.bluetitle,
            marginLeft: 20,
            lineHeight: 25,
          },
          ...(Dimensions.get('screen').height <= 640
            ? {
                fontSize: 21,
                marginTop: 14,
                marginBottom: 12,
              }
            : Dimensions.get('screen').height >= 641 &&
              Dimensions.get('screen').height < 730
            ? {
                fontSize: 21,
                marginTop: 29,
                marginBottom: 18,
              }
            : {
                fontSize: 23,
                marginTop: 36,
                marginBottom: 22,
              }),
        }}>
        {texts.register.title}
      </Text>
      <InputComponent title={texts.register.input1} />
      <InputComponent title={texts.register.input2} />
      <InputComponent title={texts.register.input3} />
      <Terms text={texts.register.term1} isfirst={true} />
      <Terms text={texts.register.term2} isfirst={false} />
      <Buttons />
      <View
        style={{
          ...{width: '100%', height: 30, marginTop: '2.46%'},
          ...(Dimensions.get('screen').height <= 640
            ? {marginTop: '2.46%'}
            : {marginTop: 35}),
        }}>
        <View style={{flex: 1, flexDirection: 'row', alignSelf: 'center'}}>
          <Text
            style={{
              fontSize: 16,
              color: colors.termscolor,
              marginRight: 3,
            }}>
            {texts.register.bottomtext}
          </Text>
          <TouchableOpacity>
            <Text style={{color: colors.bluetitle, fontSize: 16}}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
