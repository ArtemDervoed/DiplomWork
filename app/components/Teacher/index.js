import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import InfoRow from 'components/InfoRow/index.js';
import { userName, email, phoneNumber, scienceDegree, university, update } from './actions.js';
import { H3 } from './style.js';
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
  applyUpdate(newVale) {
    this.props.dispatch(update(newVale));
  }
  applyScienceDegree(newVale) {
    this.dispatch(scienceDegree(newVale));
  }
  applyUniversity(newVale) {
    this.dispatch(university(newVale));
  }
  componentDidMount() {
    this.props.dispatch(update());
  }
  render() {
    return (
      <div>
        <H3>Информация о пользовтеле:</H3>
        <MuiThemeProvider>
          <InfoRow
            header="Имя пользователя"
            data={this.props.teacher.update.name}
            applyNewValue={this.applyUserName}/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <InfoRow
            header="Email"
            data={this.props.teacher.update.email}
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
          <InfoRow
            header="Университет"
            data={this.props.teacher.university}
            applyNewValue={this.applyUniversity}/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <div>
            <FlatButton
              label="Сохранить"
              secondary={false}
              style={buttonStyle}
              onClick={this.applyUpdate.bind(this)}/>
            <FlatButton
              label="Отмена"
              secondary={false}
              style={buttonStyle}/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(Teacher);
