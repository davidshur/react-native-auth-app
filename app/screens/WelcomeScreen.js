import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.background}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => console.log('hello')}
      >
        <View style={styles.logInButton}>
          <Text style={styles.buttonText}>LOG IN</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => console.log('hello')}
      >
        <View style={styles.signUpButton}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#d8315b',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  touchable: {
    height: 70,
    width: '80%',
    margin: 4,
    borderRadius: 10,
  },
  logInButton: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#1e1b18',
    flex: 1,
    borderRadius: 10,
  },
  signUpButton: {
    backgroundColor: '#3d348b',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: '500',
    fontSize: 18,
    color: '#fffaff',
  },
});

export default WelcomeScreen;
