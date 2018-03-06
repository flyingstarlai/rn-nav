import React from 'react';
import * as ReactNavigation from 'react-navigation';
import { connect } from 'react-redux';
import AppNavigation from './AppNavigation';

const ReduxNavigation = (props) => {
  const navigation = ReactNavigation.addNavigationHelpers({
    dispatch: props.dispatch,
    state: props.nav,
  });
  return <AppNavigation navigation={navigation} />;
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(ReduxNavigation);
