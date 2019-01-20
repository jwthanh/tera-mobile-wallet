/**
 *
 * @format
 * @flow
 */
import { createStackNavigator } from 'react-navigation';
import Account from '../screens/Account';
import NewAccount from '../screens/Account/NewAccount';

const AccountStackNavigator = createStackNavigator({
  Account,
  NewAccount,
}, {
  initialRoute: 'Account',
  navigationOptions: {
    tabBarLabel: 'Account',
  },
});

export default AccountStackNavigator;
