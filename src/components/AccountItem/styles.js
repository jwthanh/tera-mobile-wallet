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
    paddingVertical: moderateScale(8),
    paddingHorizontal: moderateScale(16),
  },
  header: {
    flexDirection: 'row',
  },
  accountId: {
    marginRight: moderateScale(8),
  },
  accountName: {
    marginRight: moderateScale(8),
  },
  body: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  bodyLeft: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  bodyRight: {
    alignItems: 'flex-end',
    flex: 1,
  },
  amount: {
    fontSize: moderateScale(36),
  },
  currencySymbol: {
    margin: moderateScale(8),
  },
  actionBtn: {

  },
});

export default styles;
