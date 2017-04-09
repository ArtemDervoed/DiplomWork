import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import InfoRow from 'components/InfoRow/index.js';
import SubjectsAccordList from 'components/SubjectsAccordList/index.js';
import { lastName, firstName, email, fetchStudent, redirectHome } from './actions.js';
import { H3 } from './style.js';
const style = {
  margin: 12,
};
const buttonStyle = {
  margin: 12,
  height: 50,
  width: 250,
  color: 'white',
  backgroundColor: 'rgb(0, 188, 212)'
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
    return (
      <div>
        <H3>Информация о пользовтеле:</H3>
        <MuiThemeProvider>
          <InfoRow
            title="Новое имя"
            floatingLabelText="Новое имя"
            hintText="Новое имя"
            header="Имя"
            data={this.props.student.firstName}
            applyNewValue={this.applyFirstName}/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <InfoRow
            title="Новая фамилия"
            floatingLabelText="Новая фамилия"
            hintText="Новая фамилия"
            header="Фамилия"
            data={this.props.student.lastName}
            applyNewValue={this.applyLastName}/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <InfoRow
            header="Группа"
            data={this.props.student.group}
            noChange={true}
            applyNewValue={this.applyGroup}/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <InfoRow
            title="Новый email"
            floatingLabelText="Новый email"
            hintText="Новый email"
            header="Email"
            data={this.props.student.email}
            applyNewValue={this.applyEmail}/>
        </MuiThemeProvider>
        <SubjectsAccordList
          studyings={this.props.student.studyings || []}/>
        <MuiThemeProvider>
          <div>
            <RaisedButton
              label="Сохранить"
              secondary={true}
              style={buttonStyle}
              onClick={this.applyUpdate.bind(this)}/>
            <RaisedButton
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
