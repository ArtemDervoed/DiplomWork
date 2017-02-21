/*
 *
 * Registration
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header/index';
import Footer from 'components/Footer/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import { Section, H1 } from './style.js';
import {Tabs, Tab} from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
import { registration } from './actions.js';

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

export class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'student',
    };
  }
  onSubmitTeacher() {
    this.props.dispatch(registration({
      role: this.state.value,
      name: this.refs.teachersName.input.value,
      email:  this.refs.teachersEmail.input.value,
      phoneNumber: this.refs.teachersPhoneNumber.input.value,
      scienceDegree: this.refs.teachersScienceDegree.input.value,
      universityId: this.refs.teachersUniversity.input.value,
      password: this.refs.teachersPassword.input.value,
      passwordConfirmation: this.refs.teachersPasswordConfirmation.input.value,
    })
  )};
  onSubmitStud() {
    console.log(this.props);
    this.props.dispatch(registration({
      role: this.state.value,
      name: this.refs.studentsName.input.value,
      email:  this.refs.studentsEmail.input.value,
      password: this.refs.studentsPassword.input.value,
      passwordConfirmation: this.refs.studentsPasswordConfirmation.input.value,
    })
  )};
  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };
  render() {
    return (
      <div>
      <MuiThemeProvider>
        <Header/>
      </MuiThemeProvider>
        <Section>
          <H1>Введите свои данные</H1>
          <MuiThemeProvider>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}>
              <Tab label="Зарегистрироваться как преподаватель" value="teacher" >
              <div className="text-field">
              <TextField
                fullWidth={true}
                ref="teachersName"
                hintText="Имя пользователя"
                floatingLabelText="Имя пользователя" />
              <br />
              <TextField
                fullWidth={true}
                ref="teachersEmail"
                hintText="Электронная почта"
                floatingLabelText="Электронная почта"
              /><br />
              <TextField
                fullWidth={true}
                ref="teachersPhoneNumber"
                hintText="Номер телефона"
                floatingLabelText="Номер телефона"
              /><br />
              <TextField
                fullWidth={true}
                ref="teachersScienceDegree"
                hintText="Ученая степень"
                floatingLabelText="Ученая степень"
              /><br />
              <TextField
                fullWidth={true}
                ref="teachersUniversity"
                hintText="Университет"
                floatingLabelText="Университет"
              /><br />
              <TextField
                fullWidth={true}
                ref="teachersPassword"
                floatingLabelText="Парль"
                hintText="Парль"
                type="password"
              /><br />
              <TextField
                fullWidth={true}
                ref="teachersPasswordConfirmation"
                floatingLabelText="Подтверждение пароля"
                hintText="Подтверждение пароля"
                type="password"
              /><br />
              <RaisedButton label="Зарегистрироваться" primary={true} style={style} onClick={this.onSubmitTeacher.bind(this)} />
              </div>
              </Tab>
              <Tab label="Зарегистрироваться как студент" value="student">
                <div className="text-field">
                <TextField
                  fullWidth={true}
                  ref="studentsName"
                  floatingLabelText="Имя пользователя"
                  hintText="Имя пользователя"
                />
                <br />
                <TextField
                  fullWidth={true}
                ref="studentsEmail"
                  hintText="Электронная почта"
                  floatingLabelText="Электронная почта"
                /><br />
                <TextField
                  fullWidth={true}
                  ref="studentsPassword"
                  hintText="Парль"
                  floatingLabelText="Парль"
                  type="password"
                /><br />
                <TextField
                  fullWidth={true}
                  ref="studentsPasswordConfirmation"
                  hintText="Подтверждение пароля"
                  floatingLabelText="Подтверждение пароля"
                  type="password"
                /><br />
                <RaisedButton label="Зарегистрироваться" primary={true} style={style} onClick={this.onSubmitStud.bind(this)} />
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

Registration.propTypes = {
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
// <form method="POST" action="https://serene-hamlet-19929.herokuapp.com/api/users" >
//   <input type="text" name="name" placeholder="Имя" />
//   <input type="text" name="email" placeholder="Мыло" />
//   <input type="password" name="password" placeholder="password" />
//   <input type="password" name="password_confirmation" placeholder="password again" />
//   <input type="submit" value="Отправить"/>
// </form>
export default connect(mapStateToProps, mapDispatchToProps)(Registration);
