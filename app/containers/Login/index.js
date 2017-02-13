/*
 *
 * Login
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header/index';
import {Link} from 'react-router';
import { login } from './actions.js';
import { Form, Button, Row, Label, H1} from './style.js'

export class Login extends React.Component {
  constructor() {
    super();
    this.role = '';
    this.email =  '';
    this.password = '';
  }
  onSubmit(event) {
    event.preventDefault();
    if (this.refs.teacher.checked) {
      this.role = 'teacher'
    }
    if (this.refs.user.checked) {
      this.role = 'user'
    }
    this.props.dispatch(login({
      role: this.role,
      email: this.refs.email.value,
      password: this.refs.password.value,
    })
  );}
  render() {
    return (
      <div>
        <Header/>
        <Form>
        <H1>Войти в учетную запись</H1>
          <input type="text" ref="email" name="email" placeholder="Логин"/>
          <input type="password" ref="password" name="password" placeholder="Пароль"/>
          <Row>
            <Label htmlFor="teacher">Учитель:<input id="teacher" type="radio" ref="teacher" value="user" name="role"/></Label>
            <Label htmlFor="user">Ученик:<input id="user" type="radio" ref="user" value="user" name="role"/></Label>
          </Row>
          <Button type="submit" onClick={this.onSubmit.bind(this)}>Войти</Button>
        </Form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const	mapStateToProps	=	state	=> ({
  ...state,
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
