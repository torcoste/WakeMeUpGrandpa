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

import anim from './../assets/cosmo-lottie.json';

export default class DetailsScreen extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <Fragment>
        <LinearGradient
          colors={['#7F00FF', '#E100FF']}
          style={styles.linearGradient}>
          <Animation
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: "50%",
              alignSelf: "center",
              marginTop: 24
            }}
            loop={true}
            source={anim}
          />

<Text style={styles.buttonText}>
Who was the first person to travel into outer space?
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
              onPress={() => Alert.alert("That's wrong!")}
              title="Nil Armstrong"
              color="#560"
            />
            <Button
              onPress={() => Alert.alert("That's wrong!")}
              title="Steve Jobs"
              color="#56e78a"
            />
            <Button
              onPress={() => this.props.navigation.navigate('Answer1')}
              title="Yuriy Gagarin"
              color="#972"
            />
            <Button
              onPress={() => Alert.alert("That's wrong!")}
              title="Vladimir Putin"
              color="#0aea"
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
