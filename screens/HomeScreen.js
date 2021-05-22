import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {useAuthorization} from '../components/AuthProvider';

const SignIn = ({navigation}) => {
  const {signIn} = useAuthorization();
  function navigateHome() {
    signIn('my_token');
    navigation.navigate('LoginScreen');
  }
  return <Button title="Sign IN" onPress={navigateHome} />;
};

const HomeScreen = props => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text>Son of a Coder Login Page</Text>
      </View>
      <View style={styles.actions}>
        <SignIn {...props} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  detailsContainer: {
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  button: {
    margin: 24,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  text: {
    textAlign: 'center',
  },
});

export default HomeScreen;