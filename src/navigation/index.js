/**
 * @format
 * @flow
 */
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
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
  RootStack,
  NewWalletStackNavigator,
}, {
  initialRouteName: 'Loading',
});

export default createAppContainer(RootSwitch);
