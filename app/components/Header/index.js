import React, {Component} from 'react';
import {connect}	from	'react-redux';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { logout, login, registration } from './actions.js';
import { Div } from './style.js';

class Login extends Component {
  static muiName = 'FlatButton';
  render() {
    return (
      <FlatButton {...this.props} label="Войти"/>
    );
  }
}
class Registration extends Component {
  static muiName = 'FlatButton';
  render() {
    return (
      <FlatButton {...this.props} label="Зарегистрироваться"/>
    );
  }
}
class Logout extends Component {
  static muiName = 'FlatButton';
  render() {
    return (
      <FlatButton {...this.props} label="Выйти"/>
    );
  }
}

class Header extends Component {
  state = {
    logged: {logged: JSON.parse(localStorage.getItem('auth_token')) !== null},
  };

  componentWillMount() {
    this.setState({logged: JSON.parse(localStorage.getItem('auth_token')) !== null});
  }
  componentDidMount() {
    this.setState({logged: JSON.parse(localStorage.getItem('auth_token')) !== null});
  }

  logoutUser() {
    this.props.dispatch(logout());
  }

  loginUser() {
    this.props.dispatch(login());
  }
  registrationUser() {
    this.props.dispatch(registration());
  }

  render() {
    let navBar = null;
    if (JSON.parse(localStorage.getItem('auth_token')) !== null) {
      navBar = <Logout onClick={this.logoutUser.bind(this)}/>
    }
    else {
      navBar = <Div>
        <Login onClick={this.loginUser.bind(this)}/>
        <Registration onClick={this.registrationUser.bind(this)}/>
      </Div>
    }
    return (
      <div>
        <AppBar
          title="BLACK&WHITE"
          iconElementLeft={<div></div>}
          iconElementRight={navBar}
        />
      </div>
    );
  }
}

const	mapStateToProps	=	(state, ownProps)	=> {
  return {...state};
};

export default connect(mapStateToProps)(Header);
