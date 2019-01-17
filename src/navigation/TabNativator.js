/**
 *
 * @format
 * @flow
 */
import { createBottomTabNavigator } from 'react-navigation';
import Account from '../screens/Account';
import Send from '../screens/Send';
import Dapps from '../screens/Dapps';
import Explorer from '../screens/Explorer';

const TabNavigator = createBottomTabNavigator({
  Account,
  Send,
  Dapps,
  Explorer,
});

export default TabNavigator;
