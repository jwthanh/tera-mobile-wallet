/**
 *
 * @format
 * @flow
 */
import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';


const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    height: moderateScale(100),
    margin: moderateScale(8),
    borderRadius: moderateScale(22),
    shadowColor: '#00000070',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
});

export default styles;
