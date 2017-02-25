import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import InfoRow from 'components/InfoRow/index.js';
import { userName, email, group, update, redirectHome } from './actions.js';
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
  applyGroup(newVale) {
    this.dispatch(group(newVale));
  }
  applyUpdate(newVale) {
    this.props.dispatch(redirectHome());
  }
  componentDidMount() {
    this.props.dispatch(update());
    // this.universities = this.props.registration.universities;
  }
  render() {
    return (
      <div>
        <H3>Информация о пользовтеле:</H3>
        <MuiThemeProvider>
          <InfoRow
            header="Имя пользователя"
            data={this.props.student.update.name}
            applyNewValue={this.applyUserName}/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <InfoRow
            header="Email"
            data={this.props.student.update.email}
            applyNewValue={this.applyEmail}/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <InfoRow
            header="Группа"
            data={this.props.student.group}
            applyNewValue={this.applyGroup}/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <div>
            <FlatButton
              label="Сохранить"
              secondary={true}
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

export default connect(mapStateToProps)(Student);
