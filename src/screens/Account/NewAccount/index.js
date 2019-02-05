/**
 *
 * @format
 * @flow
 * */
import * as React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';
import XInput from '../../../components/XInput';

const leftNavButton = (navigation: Object) => (
  <TouchableOpacity onPress={() => {
    const onCancel = navigation.getParam('onCancel');
    onCancel();
    navigation.goBack(null);
  }}
  >
    <Text style={{ paddingHorizontal: 8 }}>Cancel</Text>
  </TouchableOpacity>
);

const rightNavButton = (navigation: Object) => (
  <TouchableOpacity onPress={() => {
    const onSave = navigation.getParam('onSave');
    console.log(onSave());
    navigation.goBack(null);
  }}
  >
    <Text style={{ paddingHorizontal: 8 }}>Save</Text>
  </TouchableOpacity>
);

type Props = {
  navigation: {
    setParams: Function,
    getParam: Function,
  },
};

type State = {

}

class NewAccount extends React.Component<Props, State> {
  static navigationOptions = ({ navigation }: Object) => ({
    title: 'New Account',
    headerLeft: leftNavButton(navigation),
    headerRight: rightNavButton(navigation),
  });

  state = {};

  componentDidMount(): void {
    const { navigation } = this.props;
    navigation.setParams({
      onSave: this.onSave,
      onCancel: this.onCancel,
    });
  }

  onSave = (): string => this.accountNameComponent.value()

  onCancel = (): void => {
    this.accountNameComponent.clear();
  }

  accountNameComponent: XInput;

  render(): React.Node {
    return (
      <View style={styles.root}>
        <XInput
          ref={(input) => {
            if (input) {
              this.accountNameComponent = input;
            }
          }}
          placeholder="Enter account name..."
          autoFocus
        />
      </View>
    );
  }
}

export default NewAccount;
