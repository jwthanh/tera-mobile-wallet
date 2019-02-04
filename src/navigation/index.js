/**
 * @format
 * @flow
 */
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Loading from '../screens/Loading';
import TabNavigator from './TabNativator';
import NewAccountStackModal from './NewAccountStackNavigator';
import NewWalletStackNavigator from './NewWalletStackNavigator';


const RootStack = createStackNavigator({
  TabNavigator,
  NewAccountStackModal,
},
{
  mode: 'modal',
  headerMode: 'none',
});

const RootSwitch = createSwitchNavigator({
  Loading,
  RootStack,
  NewWalletStackNavigator,
}, {
  initialRouteName: 'Loading',
});

export default createAppContainer(RootSwitch);
