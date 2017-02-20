import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header/index';
import Footer from 'components/Footer/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Section, H1 } from './style.js';
import RaisedButton from 'material-ui/RaisedButton';
import Student from 'components/Student/index.js';
import Teacher from 'components/Teacher/index.js';
// import { registration } from './actions.js';

export class User extends React.Component {
  constructor() {
    super();
    this.userUnfo = {
      userName:'llolkekcheburek',
      email:'228lol@mail.ru',
      phoneNumber:'88005553535'
    };
  }
  render() {
    let user = null;
    if (JSON.parse(localStorage.getItem('user')) === 'student') {
      user = <Student userUnfo={this.userUnfo}/>
    }
    if (JSON.parse(localStorage.getItem('user')) === 'teacher') {
      user = <Teacher userUnfo={this.userUnfo}/>
    }
    return (
      <div>
      <MuiThemeProvider>
        <Header/>
      </MuiThemeProvider>
        <Section>
          <H1>Личный кабинет</H1>
          {user}
        </Section>
        <Footer/>
      </div>
    );
  }
}



const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(User);
