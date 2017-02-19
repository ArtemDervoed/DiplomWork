import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import InfoRow from 'components/InfoRow/index.js';
import { userName, email, phoneNumber } from './actions.js';
const style = {
  margin: 12,
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
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(Teacher);
