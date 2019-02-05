/**
 *
 * @format
 * @flow
 * */
import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  root: {
    borderColor: 'blue',
    borderRadius: moderateScale(4),
    borderWidth: 1,
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(8),
  },
  title: {
    color: 'blue',
  },
});

export default styles;
