import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header/index';
import Footer from 'components/Footer/index';
import DropDownMenuList from 'components/DropDownMenu/index';
import TopImgLine from 'components/TopImgLine/index.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextFieldInput from 'components/TextField/index.js'
import MenuItem from 'material-ui/MenuItem';
import { Section, H1 } from './style.js';
import {Tabs, Tab} from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
import { registration, fetchGroups } from './actions.js';
import Subheader from 'material-ui/Subheader';
const style = {
  margin: 12,
};

export class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 'student',
      firstName:{value:'', valid:false, errorText:'',},
      lastName:{value:'', valid:false, errorText:'',},
      email:{value:'', valid:false, errorText:'',},
      group:{value:'', valid:false, errorText:'',},
      phoneNumber:{value:'', valid:false, errorText:'',},
      scienceDegree:{value:'', valid:false, errorText:'',},
      password:{value:'', valid:false, errorText:'',},
      passwordConfirmation:{value:'', valid:false, errorText:'',},
    };
  }
  componentDidMount() {
    this.props.dispatch(fetchGroups());
  }
  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };
  onChangeField(event, value) {
    switch (event.target.name) {
      case 'firstName': {
        if (value.length !== 0) {
          this.setState({
            firstName: {
              value: value,
              errorText: '',
              valid: true,
            },
          });
        } else {
          this.setState({
            firstName: {
              errorText: 'Введите своё имя',
              valid: false,
            },
          });
        }
      }; break;
      case 'lastName': {
        if (value.length !== 0) {
          this.setState({
            lastName: {
              value: value,
              errorText: '',
              valid: true,
            },
          });
        } else {
          this.setState({
            lastName: {
              errorText: 'Введите свою фамилию',
              valid: false,
            },
          });
        }
      }; break;
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
      case 'phone': {
        const phone = /\d{5,20}/;
        if (phone.test(value)) {
          this.setState({
            phoneNumber: {
              value: value,
              errorText: '',
              valid: true,
            },
          });
        } else {
          this.setState({
            phoneNumber: {
              errorText: 'Номер телефона должен быть формата 12345678910',
              valid: false,
            },
          });
        }
      }; break;
      case 'scienceDegree': {
        if (value.length > 0) {
          this.setState({
            scienceDegree: {
              value: value,
              errorText: '',
              valid: true,
            },
          });
        } else {
          this.setState({
            scienceDegree: {
              errorText: 'Заполните поле',
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
      case 'passwordConfirmation': {
        if (this.state.password.value === value) {
          this.setState({
            passwordConfirmation: {
              value: value,
              errorText: '',
              valid: true,
            },
          });
        } else {
          this.setState({
            passwordConfirmation: {
              errorText: 'Пароли не совпадают',
              valid: false,
            },
          });
        }
      }; break;
      default:
        return state;
    }

  }
  onSubmit(event) {
    let isValid = true;
    let user = {};
    if (this.state.value === 'student') {
      user = {
        role: this.state.value,
        last_name: (this.state.lastName.valid) ? this.state.lastName.value : false,
        first_name:(this.state.firstName.valid) ? this.state.firstName.value : false,
        email: (this.state.email.valid) ? this.state.email.value : false,
        group_id: (this.state.group.valid) ? this.state.group.value : false,
        password: (this.state.password.valid) ? this.state.password.value : false,
        password_confirmation: (this.state.passwordConfirmation.valid) ? this.state.passwordConfirmation.value : false,
      };
    }
    if (this.state.value === 'teacher') {
      user = {
        role: this.state.value,
        last_name: (this.state.lastName.valid) ? this.state.lastName.value : false,
        first_name:(this.state.firstName.valid) ? this.state.firstName.value : false,
        email: (this.state.email.valid) ? this.state.email.value : false,
        science_degree: (this.state.scienceDegree.valid) ? this.state.scienceDegree.value : false,
        phone_number: (this.state.phoneNumber.valid) ? this.state.phoneNumber.value : false,
        password: (this.state.password.valid) ? this.state.password.value : false,
        password_confirmation: (this.state.passwordConfirmation.valid) ? this.state.passwordConfirmation.value : false,
      };
    }
    for (var field in user) {
      if (user.hasOwnProperty(field)) {
        if (user[field] === false) {
          isValid = false
          alert('Не все поля формы заполнены или заполнены не корректно');
        }
      }
    }
    if (isValid) {
      this.props.dispatch(registration(user));
    }
  }
  onToHome() {
    this.props.dispatch(redirectToHome());
  }
  injectValue(value) {
    this.setState({
      group: {
        value: value,
        valid: true
      }
    });
  }
  render() {
    let property = ''
    if (this.state.value === 'teacher') {
      property = (
        <div>
          <TextFieldInput
            fullWidth={true}
            errorText={this.state.phoneNumber.errorText}
            hintText="Телефон"
            name="phone"
            floatingLabelText="Телефон"
            onChange={this.onChangeField.bind(this)}
          />
          <TextFieldInput
            fullWidth={true}
            errorText={this.state.scienceDegree.errorText}
            name="scienceDegree"
            hintText="Ученая степень"
            floatingLabelText="Ученая степень"
            onChange={this.onChangeField.bind(this)}
          />
        </div>
      )
    }
    if (this.state.value === 'student') {
      property = (
        <DropDownMenuList
         injectValue={this.injectValue.bind(this)}
         ref="studentsGroup"
         header="Группа"
         data={this.props.registration.groups}
         onChange={this.onChangeField}
        />
      )
    }
    return (
      <div>
        <MuiThemeProvider>
          <Header/>
        </MuiThemeProvider>
        <Section>
        <H1>Зарегистрироваться</H1>
          <MuiThemeProvider>
            <Tabs value={this.state.value} onChange={this.handleChange} >
              <Tab label="Как преподаватель" value="teacher" />
              <Tab label="Как студент" value="student" />
            </Tabs>
          </MuiThemeProvider>
          <div className="text-field">
            <TextFieldInput
              fullWidth={true}
              errorText={this.state.lastName.errorText}
              hintText="Фамилия"
              name="lastName"
              floatingLabelText="Фамилия"
              onChange={this.onChangeField.bind(this)}
            />
            <TextFieldInput
              fullWidth={true}
              errorText={this.state.firstName.errorText}
              hintText="Имя"
              floatingLabelText="Имя"
              name="firstName"
              onChange={this.onChangeField.bind(this)}
            />
            <TextFieldInput
              fullWidth={true}
              errorText={this.state.email.errorText}
              hintText="Email"
              name="email"
              floatingLabelText="Email"
              onChange={this.onChangeField.bind(this)}
            />
            {
              property
            }
            <TextFieldInput
              fullWidth={true}
              errorText={this.state.password.errorText}
              hintText="Пароль"
              name="password"
              floatingLabelText="Пароль"
              onChange={this.onChangeField.bind(this)}
              type="password"
            />
            <TextFieldInput
              fullWidth={true}
              errorText={this.state.passwordConfirmation.errorText}
              hintText="Подтвердите пароль"
              floatingLabelText="Подтвердите пароль"
              onChange={this.onChangeField.bind(this)}
              name="passwordConfirmation"
              type="password"
            />
          </div>
          <MuiThemeProvider>
            <RaisedButton label="Зарегистрироваться" primary={true} style={style} onClick={this.onSubmit.bind(this)} />
          </MuiThemeProvider>
          <MuiThemeProvider>
            <RaisedButton label="Назад" primary={true} style={style}/>
          </MuiThemeProvider>
        </Section>
        <Footer/>
      </div>
    );
  }
}



const	mapStateToProps	=	state	=> ({
  ...state,
});
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
