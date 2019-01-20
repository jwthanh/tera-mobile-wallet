/**
 *
 * @format
 * @flow
 */
import { createStackNavigator } from 'react-navigation';
import NewAccount from '../screens/Account/NewAccount';

const NewAccountStackNavigator = createStackNavigator({
  NewAccount,
}, {
  initialRoute: 'NewAccount',
});

export default NewAccountStackNavigator;
