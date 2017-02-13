/*
 *
 * Registration
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import { Section, H1 } from './style.js';
import {Tabs, Tab} from 'material-ui/Tabs';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};
injectTapEventPlugin();
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
      value: 'b',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
    console.log('click');
  };
  render() {
    return (
      <div>
        <Header/>
        <Section>
          <H1>Создать учетную запись</H1>
          <br />
          <MuiThemeProvider>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}>
              <Tab label="Зарегистрироваться как преподаватель" value="a" >
              <div className="text-field">
              <H1>Введите свои данные</H1>
              <TextField
                hintText="Имя пользователя"
              /><br />
              <br />
              <TextField
                hintText="Электронная почта"
              /><br />
              <TextField
                hintText="Номер телефона"
              /><br />
              <TextField
                hintText="Ученая степень"
              /><br />
              <TextField
                hintText="Университет"
              /><br />
              <TextField
                hintText="Парль"
                type="password"
              /><br />
              <TextField
                hintText="Подтверждение пароля"
                type="password"
              /><br />
              <RaisedButton label="Зарегистрироваться" primary={true} style={style} />
              </div>
              </Tab>
              <Tab label="Зарегистрироваться как студент" value="b">
                <div className="text-field">
                <H1>Введите свои данные</H1>
                <TextField
                  hintText="Имя пользователя"
                /><br />
                <br />
                <TextField
                  hintText="Электронная почта"
                /><br />
                <TextField
                  hintText="Парль"
                  type="password"
                /><br />
                <TextField
                  hintText="Подтверждение пароля"
                  type="password"
                /><br />
                <RaisedButton label="Зарегистрироваться" primary={true} style={style} />
                </div>
              </Tab>
            </Tabs>
          </MuiThemeProvider>
        </Section>
      </div>
    );
  }
}
// <div className="text-field">

// </div>

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
