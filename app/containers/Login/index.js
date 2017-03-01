import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header/index';
import Footer from 'components/Footer/index';
import {Link} from 'react-router';
import { login, redirectToHome } from './actions.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Section, H1 } from './style.js';
import {Tabs, Tab} from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
import TextFieldInput from 'components/TextField/index.js'
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
      email: '',
      password: ''
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };
  onChangeEmail(event, value) {
    this.setState({
      email: value,
    });
  }
  onChangePassword(event, value) {
    this.setState({
      password: value,
    });
  }
  onSubmit(event) {
    this.props.dispatch(login({
      role: this.state.value,
      email: this.state.email,
      password: this.state.password,
    })
  );}
  onToHome() {
    this.props.dispatch(redirectToHome());
  }

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
              <Tab label="Войти как преподаватель" value="teacher" />
              <Tab label="Войти как студент" value="student" />
            </Tabs>
          </MuiThemeProvider>
          <div className="text-field">
            <TextFieldInput
              fullWidth={true}
              hintText="Электронная почта"
              floatingLabelText="Электронная почта"
              onChange={this.onChangeEmail.bind(this)}
            /> <br/>
            <TextFieldInput
              fullWidth={true}
              hintText="Пароль"
              floatingLabelText="Пароль"
              type="password"
              onChange={this.onChangePassword.bind(this)}
            />
          </div>
          <MuiThemeProvider>
            <RaisedButton label="Войти" primary={true} style={style} onClick={this.onSubmit.bind(this)} />
          </MuiThemeProvider>
          <MuiThemeProvider>
            <RaisedButton label="Назад" primary={true} style={style} onClick={this.onToHome.bind(this)}/>
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
