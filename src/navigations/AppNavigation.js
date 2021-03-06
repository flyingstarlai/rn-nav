import { StackNavigator } from 'react-navigation';
import LoginScreen from '../containers/LoginScreen';

const PrimaryNav = StackNavigator({
  LoginScreen: { screen: LoginScreen },
}, {
  headerMode: 'none',
  initialRouteName: 'LoginScreen',
});

export default PrimaryNav;
