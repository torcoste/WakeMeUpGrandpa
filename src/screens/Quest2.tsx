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

import anim from './../assets/plane-lottie.json';

export default class DetailsScreen extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <Fragment>
        <LinearGradient
          colors={['#1c92d2', '#f2fcfe']}
          style={styles.linearGradient}>
          <Animation
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: "70%",
              alignSelf: "center"
            }}
            loop={true}
            source={anim}
          />

<Text style={styles.buttonText}>
From which language is the word ‘ketchup’ derived?
          </Text>
          <View
            style={{
              position: 'absolute',
              bottom: 10,
              width: Dimensions.get('screen').width,
              padding: 18,
              height: 270,
              justifyContent: "space-between"
            }}>
            <Button
              onPress={() => this.props.navigation.navigate('Answer2')}
              title="Chinese"
              color="#fa1"
            />
            <Button
              onPress={() => Alert.alert("That's wrong!")}
              title="Russian"
              color="#f6af8a"
            />
            <Button
              onPress={() => Alert.alert("That's wrong!")}
              title="Italian"
              color="#9072"
            />
            <Button
              onPress={() => Alert.alert("That's wrong!")}
              title="Francais"
              color="#0aaaea"
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
    fontSize: 30,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 24,
    color: '#ffffff',
    backgroundColor: 'transparent',
    lineHeight: 42,
  },
});
