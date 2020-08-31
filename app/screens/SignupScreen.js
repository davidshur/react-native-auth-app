import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

const SignupScreen = ({ navigation }) => {
  const [response, setResponse] = useState(null);
  const { register, setValue, handleSubmit, control } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  const onChange = arg => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  return (
    <View style={styles.background}>
      <ScrollView
        style={styles.scrollView}
        stkeyboardShouldPersistTaps="handled"
      >
        <View
          style={{
            height: 250,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={styles.title}>Hello!</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>Email</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            defaultValue=""
            name="email"
          />
          <Text style={styles.label}>Password</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            defaultValue=""
            name="password"
          />
          <Text style={styles.label}>Confirm Password</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            defaultValue=""
            name="passwordTwo"
          />
          <View
            style={{
              width: '100%',
              flex: 1,
              marginTop: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              style={styles.touchable}
              onPress={handleSubmit(onSubmit)}
            >
              <View style={styles.logInButton}>
                <Text style={styles.buttonText}>SIGN UP</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            height: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button
            onPress={() => navigation.navigate('Login')}
            title="Already have an account? Log in!"
            color="white"
          />
        </View>
        <View style={{ height: 300 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    margin: 10,
    color: '#fffaff',
    fontWeight: '700',
  },
  form: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 30,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#d8315b',
  },
  logInButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d8315b',
    flex: 1,
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: '500',
    fontSize: 18,
    color: '#fffaff',
  },
  label: {
    color: '#d8315b',
    fontWeight: '500',
    marginBottom: 20,
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#d8315b',
    borderRadius: 4,
  },
  touchable: {
    height: 70,
    width: '100%',
    borderRadius: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  input: {
    backgroundColor: '#f7f7f7',
    width: '100%',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});

export default SignupScreen;
