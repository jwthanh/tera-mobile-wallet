/**
 *
 * @format
 * @flow
 * */
import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  root: {
    borderBottomColor: '#00000020',
    borderBottomWidth: 1,
  },
  input: {
    padding: moderateScale(13),
  },
});

export default styles;
