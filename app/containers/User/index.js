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
  constructor() {
    super();
    this.userUnfo = {
      userName:'llolkekcheburek',
      email:'228lol@mail.ru' 
    };
  }
  render() {
    return (
      <div>
      <MuiThemeProvider>
        <Header/>
      </MuiThemeProvider>
        <Section>
          <H1>Личный кабинет</H1>
          <UserInfo userUnfo={this.userUnfo} />
        </Section>
      </div>
    );
  }
}



const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(User);
