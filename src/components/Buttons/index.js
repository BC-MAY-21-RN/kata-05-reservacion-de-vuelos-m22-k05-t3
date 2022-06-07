import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import texts from '../../consts/text';
import GoogleSVG from '../../assets/icons/google.svg';
import styles from './styles';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

async function onGoogleButtonPress() {
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

const createAccount = (email, password, userName) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {})
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
      }
      if (error.code === 'auth/invalid-email') {
      }
    });
};

function validate(password, mail, userName, changeAlert) {
  const regexpassword =
    /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[@$?+*-¿!#%&/()=¡\-_]){1})\S{8,16}$/;
  const regexmail =
    /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
  if (regexmail.test(mail) && regexpassword.test(password)) {
    createAccount(mail, password, userName);
  } else {
    changeAlert(true);
  }
}

export default function Buttons({buttonsActive, form, changeAlert}) {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '248866531483-grqieu7rngds72d02f2qu16kd9jptr8d.apps.googleusercontent.com',
    });
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          validate(form.input3, form.input2, form.input1, changeAlert)
        }
        style={{
          ...styles.touchable,
          ...(buttonsActive ? styles.buttonActive : null),
        }}>
        <Text style={styles.text}>{texts.register.button1}</Text>
      </TouchableOpacity>
      <Text style={styles.ortext}>Or</Text>
      <TouchableOpacity
        onPress={() =>
          onGoogleButtonPress()
            .then(() => {})
            .catch(() => {})
        }
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
