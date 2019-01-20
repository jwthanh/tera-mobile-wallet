/**
 * @format
 * @flow
 */
import { createAppContainer, createStackNavigator } from 'react-navigation';
import TabNavigator from './TabNativator';
import NewAccountStackModal from './NewAccountStackNavigator';


const RootStack = createStackNavigator({
  TabNavigator,
  NewAccountStackModal,
},
{
  mode: 'modal',
  headerMode: 'none',
});

export default createAppContainer(RootStack);
