import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header/index';
import Footer from 'components/Footer/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Section, H1, Content } from './style.js';
import RaisedButton from 'material-ui/RaisedButton';
import Student from 'components/Student/index.js';
import Teacher from 'components/Teacher/index.js';
import DataList from 'components/List/index.js';
import ContentSend from 'material-ui/svg-icons/content/send';

class User extends React.Component {
  constructor() {
    super();
    this.state = {open: false};
    this.sideListState = false;
    this.userInfo = {
      userName:'llolkekcheburek',
      email:'228lol@mail.ru',
      phoneNumber:'88005553535',
      scienceDegree:'88005553535'
    };
  }
  handleOpen() {
    this.setState({open: true});
  }
  handleClose() {
    this.setState({open: false});
  }
  render() {
    let user = null;
    let header = '';
    if (JSON.parse(localStorage.getItem('user')) === 'student') {
      user = <Student userInfo={this.userInfo}/>
      header ='Предметы'
    }
    if (JSON.parse(localStorage.getItem('user')) === 'teacher') {
      user = <Teacher userInfo={this.userInfo}/>
      header ='Группы'
    }
    return (
      <div>
      <MuiThemeProvider>
        <Header/>
      </MuiThemeProvider>
        <Section>
          <H1>Личный кабинет</H1>
          <Content>
          {
            user
          }
          </Content>
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
