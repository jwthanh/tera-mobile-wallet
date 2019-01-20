/**
 *
 * @format
 * @flow
 */
import { createBottomTabNavigator } from 'react-navigation';
import AccountStackNavigator from './AccountStackNavigator';
import Send from '../screens/Send';
import Dapps from '../screens/Dapps';
import Explorer from '../screens/Explorer';

const TabNavigator = createBottomTabNavigator({
  AccountStackNavigator,
  Send,
  Dapps,
  Explorer,
}, {
  tabBarOptions: {
    allowFontScaling: false,
  },
});

export default TabNavigator;
