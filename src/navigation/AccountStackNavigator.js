/**
 *
 * @format
 * @flow
 */
import { createStackNavigator } from 'react-navigation';
import Account from '../screens/Account';


const AccountStackNavigator = createStackNavigator({
  Account,
}, {
  initialRoute: 'Account',
  navigationOptions: {
    tabBarLabel: 'Account',
  },
});

export default AccountStackNavigator;
