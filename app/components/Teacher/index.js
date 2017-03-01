import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import InfoRow from 'components/InfoRow/index.js';
import { userName, email, phoneNumber, scienceDegree, fetchTeacher, redirectHome } from './actions.js';
import { H3 } from './style.js';
import StudentsTable from 'components/StudentsTable/index.js';
const style = {
  margin: 12,
};
const buttonStyle = {
  margin: 12,
  height: 50,
  width: 250,
  backgroundColor: 'rgba(0,0,0,.1)'
};

export class Teacher extends React.Component {
  applyUserName(newVale) {
    this.dispatch(userName(newVale));
  }

  applyEmail(newVale) {
    this.dispatch(email(newVale));
  }

  applyPhoneNumber(newVale) {
    this.dispatch(phoneNumber(newVale));
  }

  applyScienceDegree(newVale) {
    this.dispatch(scienceDegree(newVale));
  }
  componentDidMount() {
    this.props.dispatch(fetchTeacher())
  }
  render() {
    console.log('render', this);
    return (
      <div>
        <H3>Информация о пользовтеле:</H3>
        <MuiThemeProvider>
          <InfoRow
            header="Имя пользователя"
            data={this.props.teacher.userName}
            applyNewValue={this.applyUserName}/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <InfoRow
            header="Email"
            data={this.props.teacher.email}
            applyNewValue={this.applyEmail}/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <InfoRow
            header="Номер телефона"
            data={this.props.teacher.phoneNumber}
            applyNewValue={this.applyPhoneNumber}/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <InfoRow
            header="Ученая степень"
            data={this.props.teacher.scienceDegree}
            applyNewValue={this.applyScienceDegree}/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <div>
            <FlatButton
              label="Сохранить"
              secondary={false}
              style={buttonStyle}
              />
            <FlatButton
              label="Отмена"
              secondary={false}
              style={buttonStyle}/>
          </div>
        </MuiThemeProvider>
        <StudentsTable/>
      </div>
    );
  }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(Teacher);
