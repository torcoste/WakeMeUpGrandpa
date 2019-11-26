/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from '../app.json';
import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './screens/Home';
import Details from './screens/Details';
import Quest1 from './screens/Quest1';
import Quest2 from './screens/Quest2';
import Answer1 from './screens/Answer1';
import Answer2 from './screens/Answer2';

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Details: Details,
    Quest1: Quest1,
    Quest2: Quest2,
    Answer1: Answer1,
    Answer2: Answer2,
  },
  {
    initialRouteName: 'Home',
    header: null,
    headerMode: 'none',
  },
);

AppRegistry.registerComponent(appName, () => createAppContainer(AppNavigator));
