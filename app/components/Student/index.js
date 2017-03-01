import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import InfoRow from 'components/InfoRow/index.js';
import { lastName, firstName, email, group, fetchStudent, redirectHome } from './actions.js';
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
  applyFirstName(newVale) {
    this.dispatch(firstName(newVale));
  }
  applyLastName(newVale) {
    this.dispatch(lastName(newVale));
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
    this.props.dispatch(fetchStudent());
  }
  render() {
    console.log(this);
    return (
      <div>
        <H3>Информация о пользовтеле:</H3>
        <MuiThemeProvider>
          <InfoRow
            header="Имя"
            data={this.props.student.firstName}
            applyNewValue={this.applyFirstName}/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <InfoRow
            header="Фамилия"
            data={this.props.student.lastName}
            applyNewValue={this.applyLastName}/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <InfoRow
            header="Email"
            data={this.props.student.email}
            applyNewValue={this.applyEmail}/>
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
