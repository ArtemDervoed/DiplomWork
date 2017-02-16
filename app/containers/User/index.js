/*
 *
 * User info
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Section, H1 } from './style.js';
import RaisedButton from 'material-ui/RaisedButton';
import UserInfo from 'components/UserInfo/index.js';
// import { registration } from './actions.js';

export class User extends React.Component {
  render() {
    return (
      <div>
      <MuiThemeProvider>
        <Header/>
      </MuiThemeProvider>
        <Section>
          <H1>Личный кабинет</H1>
          <UserInfo header="Имя пользователя" data="User Userowich" />
          <UserInfo header="email" data="User@mail.ru" />
        </Section>
      </div>
    );
  }
}



const	mapStateToProps	=	state	=> ({
  ...state,
});
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(User);
