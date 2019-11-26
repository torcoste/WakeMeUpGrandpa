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

import anim from './../assets/dad-lottie.json';

export default class DetailsScreen extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <Fragment>
        <LinearGradient
          colors={['#06beb6', '#48b1bf']}
          style={styles.linearGradient}>
          <Animation
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: "50%",
              alignSelf: "center"
            }}
            loop={true}
            source={anim}
          />

<Text style={styles.buttonText}>
  Great job! {"\n"}
Keep it up, Victor!
          </Text>
          <View
            style={{
              position: 'absolute',
              bottom: 10,
              width: Dimensions.get('screen').width,
              padding: 18,
            }}>
            <Button
              onPress={() => this.props.navigation.navigate('Quest2')}
              title="Ok, I will!"
              color="#56ea"
            />
          </View>
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
