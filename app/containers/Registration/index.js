import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header/index';
import Footer from 'components/Footer/index';
import DropDownMenuList from 'components/DropDownMenu/index';
import TopImgLine from 'components/TopImgLine/index.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Section, H1 } from './style.js';
import {Tabs, Tab} from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
import { registration, fetchUniversities } from './actions.js';
import Subheader from 'material-ui/Subheader';
const style = {
  margin: 12,
};

export class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.group = 0;
    this.state = {
      value: 'student',
      group: null
    };
    this.universities = [];
  }
  componentDidMount() {
    this.props.dispatch(fetchUniversities());
  }
  onSubmitTeacher() {
    this.props.dispatch(registration({
      role: this.state.value,
      firstName: this.refs.teachersName.input.value,
      lastName: this.refs.teachersLastName.input.value,
      email:  this.refs.teachersEmail.input.value,
      phoneNumber: this.refs.teachersPhoneNumber.input.value,
      scienceDegree: this.refs.teachersScienceDegree.input.value,
      password: this.refs.teachersPassword.input.value,
      passwordConfirmation: this.refs.teachersPasswordConfirmation.input.value,
    })
  )};
  onSubmitStud() {
    this.props.dispatch(registration({
      role: this.state.value,
      firstName: this.refs.studentsName.input.value,
      lastName: this.refs.studentsLastName.input.value,
      email:  this.refs.studentsEmail.input.value,
      group:  this.state.group,
      password: this.refs.studentsPassword.input.value,
      passwordConfirmation: this.refs.studentsPasswordConfirmation.input.value,
    })
  )};
  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };
  injectValue(value) {
    this.setState({
      group: value,
    });
  }
  render() {
    return (
      <div>
      <MuiThemeProvider>
        <Header/>
      </MuiThemeProvider>
        <Section>
        <H1>Зарегистрироваться</H1>
          <MuiThemeProvider>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}>
              <Tab label="Как преподаватель" value="teacher" >
                <div className="text-field">
                <TextField
                  fullWidth={true}
                  ref="teachersLastName"
                  hintText="Фамилия"
                  floatingLabelText="Фамилия"
                /><br />
                <TextField
                  fullWidth={true}
                  ref="teachersName"
                  hintText="Имя"
                  floatingLabelText="Имя" />
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
                  ref="teachersPassword"
                  floatingLabelText="Пароль"
                  hintText="Пароль"
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
              <Tab label="Как студент" value="student">
                <div className="text-field">
                <TextField
                  fullWidth={true}
                  ref="studentsLastName"
                  hintText="Фамилия"
                  floatingLabelText="Фамилия"
                /><br />
                <TextField
                  fullWidth={true}
                  ref="studentsName"
                  floatingLabelText="Имя"
                  hintText="Имя"
                />
                <br />
                <TextField
                  fullWidth={true}
                  ref="studentsEmail"
                  hintText="Электронная почта"
                  floatingLabelText="Электронная почта"
                /><br />
                <DropDownMenuList
                  injectValue={this.injectValue.bind(this)}
                  ref="studentsGroup"
                  header="Группа"
                  data={this.props.registration.groups}
                  />
                <br />
                <TextField
                  fullWidth={true}
                  ref="studentsPassword"
                  hintText="Пароль"
                  floatingLabelText="Пароль"
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

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
