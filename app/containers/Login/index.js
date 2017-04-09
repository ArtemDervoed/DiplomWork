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
      email:{value:'', valid:false, errorText:'',},
      password:{value:'', valid:false, errorText:'',},
    };
  }
  onChangeField(event, value) {
    switch (event.target.name) {
      case 'email': {
        const mail = /[0-9a-z_]@[0-9a-z_^\.]+\.[a-z]{2,3}$/;
        if (mail.test(value)) {
          this.setState({
            email: {
              value: value,
              errorText: '',
              valid: true,
            },
          });
        } else {
          this.setState({
            email: {
              errorText: 'Не корректный email',
              valid: false,
            },
          });
        }
      }; break;
      case 'password': {
        if (value.length > 6) {
          this.setState({
            password: {
              value: value,
              errorText: '',
              valid: true,
            },
          });
        } else {
          this.setState({
            password: {
              errorText: 'Слишком короткий пароль',
              valid: false,
            },
          });
        }
      }; break;
      default:
        return state;
    }

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
    let isValid = true;
    let user = {
      role: this.state.value,
      email: (this.state.email.valid) ? this.state.email.value : false,
      password: (this.state.password.valid) ? this.state.password.value : false,
    };
    for (var field in user) {
      if (user.hasOwnProperty(field)) {
        if (user[field] === false) {
          isValid = false
          alert('Не все поля формы заполнены или заполнены не корректно');
        }
      }
    }
    if (isValid) {
      this.props.dispatch(login(user));
    }
  }
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
              <Tab label="Как преподаватель" value="teacher" />
              <Tab label="Как студент" value="student" />
            </Tabs>
          </MuiThemeProvider>
            <div className="text-field">
              <TextFieldInput
                fullWidth={true}
                errorText={this.state.email.errorText}
                hintText="Email"
                name="email"
                floatingLabelText="Email"
                onChange={this.onChangeField.bind(this)}
              />
              <TextFieldInput
                fullWidth={true}
                errorText={this.state.password.errorText}
                hintText="Пароль"
                name="password"
                floatingLabelText="Пароль"
                onChange={this.onChangeField.bind(this)}
                type="password"
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
