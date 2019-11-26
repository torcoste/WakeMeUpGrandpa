/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    // title: "Home",
    headerTitle: () => <Text> Home </Text>,
    headerRight: () => (
      <Button
        onPress={() => Alert.alert('This is a button!')}
        title="Button"
        color="#000"
      />
    ),
  };

  usingHermes = typeof HermesInternal === 'object' && HermesInternal !== null;

  render() {
    return (
      <Fragment>
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.linearGradient}>
          <Text style={styles.buttonText}>
            VICTOR, {'\n'}
            WAKE UP!
          </Text>
        </LinearGradient>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  buttonText: {
    fontSize: 36,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 24,
    color: '#ffffff',
    backgroundColor: 'transparent',

  },
});
