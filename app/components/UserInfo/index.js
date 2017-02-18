import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import InfoRow from 'components/InfoRow/index.js';
import { userName, email } from './actions.js';
const style = {
  margin: 12,
};
export class UserInfo extends React.Component {
  applyUserName(newVale) {
    this.dispatch(userName(newVale));
  }
  applyEmail(newVale) {
    this.dispatch(email(newVale));
  }
  render() {
    console.log(this);
    return (
      <div>
        <MuiThemeProvider>
          <InfoRow
            header="Имя пользователя"
            data={this.props.edit.userName}
            applyNewValue={this.applyUserName}/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <InfoRow
            header="Email"
            data={this.props.edit.email}
            applyNewValue={this.applyEmail}/>
        </MuiThemeProvider>
      </div>
    );
  }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(UserInfo);
