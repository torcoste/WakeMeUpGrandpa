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
  Dimensions,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Animation from 'lottie-react-native';

import anim from './../assets/ring-lottie.json';

export default class HomeScreen extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <Fragment>
        <LinearGradient
          colors={['#ff9a9e', '#fad0c4']}
          style={styles.linearGradient}>
          <Text style={styles.buttonText}>
            VICTOR, {'\n'}
            WAKE UP!
          </Text>

          <Animation
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              flex: 1,
            }}
            loop={true}
            source={anim}
          />
          <View style={{position: "absolute", bottom: 10, width: Dimensions.get("screen").width, padding: 18}}>
          <Button
            onPress={() => this.props.navigation.navigate('Details')}
            title="Okay, I do"
            color="#56ea"
          /></View>
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
    lineHeight: 70,
  },
});
