import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import InfoRow from 'components/InfoRow/index.js';
import { userName, email } from './actions.js';
import { H3 } from './style.js';
const style = {
  margin: 12,
};
const buttonStyle = {
  margin: 12,
  height: 50,
  width: 250,
  color: 'white',
  backgroundColor: 'rgba(0,0,0,.1)'
};
export class Student extends React.Component {
  applyUserName(newVale) {
    this.dispatch(userName(newVale));
  }
  applyEmail(newVale) {
    this.dispatch(email(newVale));
  }
  render() {
    return (
      <div>
        <H3>Информация о пользовтеле:</H3>
        <MuiThemeProvider>
          <InfoRow
            header="Имя пользователя"
            data={this.props.student.userName}
            applyNewValue={this.applyUserName}/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <InfoRow
            header="Email"
            data={this.props.student.email}
            applyNewValue={this.applyEmail}/>
        </MuiThemeProvider>
      </div>
    );
  }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(Student);
