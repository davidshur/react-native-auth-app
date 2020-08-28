import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={{ flex: 2 }} />
      <View style={styles.brandBox}>
        <Text style={styles.brandWork}>WORK</Text>
        <Text style={styles.brandFlow}>FLOW</Text>
      </View>
      <View style={{ flex: 2 }} />
      <View
        style={{
          width: '100%',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => navigation.navigate('Login')}
        >
          <View style={styles.logInButton}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => navigation.navigate('Signup')}
        >
          <View style={styles.signUpButton}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  brandBox: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    padding: 30,
    borderRadius: 100,
  },
  brandWork: {
    color: '#3d348b',
    fontSize: 30,
    fontWeight: '700',
  },
  brandFlow: {
    color: '#d8315b',
    fontSize: 30,
    fontWeight: '300',
  },
  background: {
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
    backgroundColor: '#3d348b',
    flex: 1,
    borderRadius: 10,
  },
  signUpButton: {
    backgroundColor: '#d8315b',
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
