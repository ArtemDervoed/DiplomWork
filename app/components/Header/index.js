import React from 'react';
import {connect}	from	'react-redux';
import {Link} from 'react-router';
import {WrapperHeader, HeaderLogo, HeaderButton} from './style.js'
import {logout} from './actions.js';

class Header extends React.Component {
  logoutUser() {
    this.props.dispatch(logout());
  }
  render() {
    let navBar;
    if (this.props.auth.isAuthenticated) {
      navBar =
        <div>
          <HeaderButton><Link to={`/user`}>{this.props.auth.mail}</Link> </HeaderButton>
          <HeaderButton><a onClick={this.logoutUser.bind(this)}>Выйти</a> </HeaderButton>
        </div>
      ;
    } else {
      navBar =
        <div>
          <HeaderButton><Link to={`/registration`}>Зарегистрироваться</Link> </HeaderButton>
          <HeaderButton><Link to={`/login`}>Войти</Link> </HeaderButton>
        </div>
    }
    return (
      <WrapperHeader>
        <HeaderLogo><Link to={`/`}>black&white</Link></HeaderLogo>
        {navBar}
      </WrapperHeader>
    );
  }
}
const	mapStateToProps	=	(state, ownProps)	=> {
  return {...state};
};

export default connect(mapStateToProps)(Header);
