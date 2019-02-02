/**
 *
 * @format
 * @flow
 */
import { createStackNavigator } from 'react-navigation';
import NewWallet from '../screens/Wallet/NewWallet';


const NewWalletStackNavigator = createStackNavigator({
  NewWallet,
}, {
  initialRoute: 'NewWallet',
});

export default NewWalletStackNavigator;
