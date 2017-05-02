import React, {Component} from 'react';
import {connect}	from	'react-redux';
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { logout, login, registration, goToUserRoom, goToHome } from './actions.js';
import { Div, Span } from './style.js';
const style = {
  height: 52,
  minWidth: 1024,
}
const titleStyle = {
  margin: 0,
  height: 'inherit',
  lineHeight: '55px',
}

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
class User extends Component {
  static muiName = 'User';
  render() {
    return (
      <FlatButton {...this.props} label="Личный кабинет"/>
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
  goToUser() {
    this.props.dispatch(goToUserRoom());
  }

  render() {
    let navBar = null;
    if (JSON.parse(localStorage.getItem('auth_token')) !== null) {
      navBar = <Div>
                 <Logout onClick={this.logoutUser.bind(this)}/>
                 <User onClick={this.goToUser.bind(this)}/>
               </Div>
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
          style = {style}
          titleStyle={titleStyle}
          title={<Span><Link to='/'>Your Study Cloud</Link></Span>}
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
