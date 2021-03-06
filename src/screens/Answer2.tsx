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
  BackHandler,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Animation from 'lottie-react-native';

import {hello} from './../index';

import anim from './../assets/dad-lottie.json';

export default class DetailsScreen extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <Fragment>
        <LinearGradient
          colors={['#ad5389', '#3c1053']}
          style={styles.linearGradient}>
          <Animation
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: '50%',
              alignSelf: 'center',
            }}
            loop={true}
            source={anim}
          />

          <Text style={styles.buttonText}>
            You're doing well! {'\n'}
            Have a great day!
          </Text>
          <Button
            onPress={() => {BackHandler.exitApp(); hello.stop()}}
            title="Bye, Grandpa!"
            color="#56ea"
          />
          <View
            style={{
              position: 'absolute',
              bottom: 10,
              width: Dimensions.get('screen').width,
              padding: 18,
            }}></View>
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
