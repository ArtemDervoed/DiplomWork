/*
 *
 * Login
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header/index';
import Footer from 'components/Footer/index';
import {Link} from 'react-router';
import { login } from './actions.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import { Section, H1 } from './style.js';
import {Tabs, Tab} from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
const style = {
  margin: 12,
};
const styles = {
    headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};
const textareaStyle = {
    width:400,
};
export class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 'student',
    };
    this.role = this.state.value;
    this.email =  '';
    this.password = '';
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };
  onSubmitTeacher(event) {
    this.props.dispatch(login({
      role: this.state.value,
      email: this.refs.emailTeacher.input.value,
      password: this.refs.passwordTeacher.input.value,
    })
  );}
  onSubmitStud(event) {
    this.props.dispatch(login({
      role: this.state.value,
      email: this.refs.emailStud.input.value,
      password: this.refs.passwordStud.input.value,
    })
  );}
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Header/>
        </MuiThemeProvider>
        <Section>
        <H1>Войти</H1>
          <MuiThemeProvider>
            <Tabs value={this.state.value} onChange={this.handleChange} >
              <Tab label="Войти как преподаватель" value="teacher" >
              <div className="text-field">
              <TextField
                fullWidth={true}
                hintText="Электронная почта"
                ref="emailTeacher"
                floatingLabelText="Электронная почта"
              /><br />
              <TextField
                fullWidth={true}
                hintText="Парль"
                type="password"
                floatingLabelText="Пароль"
                ref="passwordTeacher"
              /><br />
              <RaisedButton
                onClick={this.onSubmitTeacher.bind(this)}
                label="Войти"
                primary={true}
                style={style} />
              </div>
              </Tab>
              <Tab label="Войти как студент" value="student">
                <div className="text-field">
                <TextField
                  fullWidth={true}
                  hintText="Электронная почта"
                  ref="emailStud"
                  floatingLabelText="Электронная почта"
                /><br />
                <TextField
                  fullWidth={true}
                  hintText="Парль"
                  type="password"
                  floatingLabelText="Пароль"
                  ref="passwordStud"
                /><br />
                <RaisedButton
                  onClick={this.onSubmitStud.bind(this)}
                  label="Войти"
                  primary={true}
                  style={style} />
                </div>
              </Tab>
            </Tabs>
          </MuiThemeProvider>
        </Section>
        <Footer/>
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
