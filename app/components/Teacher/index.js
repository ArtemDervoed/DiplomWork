import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import InfoRow from 'components/InfoRow/index.js';
import { firstName, lastName, email, phoneNumber, scienceDegree, fetchTeacher, redirectHome, fetchGroup } from './actions.js';
import StudentsTable from 'components/StudentsTable/index.js';
import TeacherSubjectsList from 'components/TeacherSubjectsList/index.js';
import { H3, ButttonsRow, Column } from './style.js';
const style = {
  margin: 12,
};
const buttonStyle = {
  margin: 12,
  height: 50,
  width: 200,
  backgroundColor: 'rgb(0, 188, 212)'
};

export class Teacher extends React.Component {
  onSubjectClick(subjectId, groupId) {
    this.props.dispatch(fetchGroup({subjectId, groupId}))
  }
  applyFirstName(newVale) {
    this.dispatch(firstName(newVale));
  }
  applyLastName(newVale) {
    this.dispatch(lastName(newVale));
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
    return (
      <div style={{width: '100%'}}>
        <H3>Информация о пользовтеле:</H3>
        <ButttonsRow>
        <Column>
          <MuiThemeProvider>
            <InfoRow
              title="Новое имя"
              floatingLabelText="Новое имя"
              hintText="Новое имя"
              header="Имя"
              data={this.props.teacher.firstName}
              applyNewValue={this.applyFirstName}/>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <InfoRow
              hintText="Новая фамилия"
              title="Новая фамилия"
              floatingLabelText="Новая фамилия"
              header="Фамилия"
              data={this.props.teacher.lastName}
              applyNewValue={this.applyLastName}/>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <InfoRow
              hintText="Новый email"
              floatingLabelText="Новый email"
              title="Новый email"
              header="Email"
              data={this.props.teacher.email}
              applyNewValue={this.applyEmail}/>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <InfoRow
              hintText="Новый номер телефона"
              floatingLabelText="Новый номер телефона"
              title="Новый номер телефона"
              header="Номер телефона"
              data={this.props.teacher.phoneNumber}
              applyNewValue={this.applyPhoneNumber}/>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <InfoRow
              hintText="Новая ученая степень"
              floatingLabelText="Новая ученая степень"
              title="Новая ученая степень"
              header="Ученая степень"
              data={this.props.teacher.scienceDegree}
              applyNewValue={this.applyScienceDegree}/>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <ButttonsRow>
              <FlatButton
                label="Сохранить"
                secondary={false}
                style={buttonStyle}
                />
              <FlatButton
                label="Отмена"
                secondary={false}
                style={buttonStyle}/>
            </ButttonsRow>
          </MuiThemeProvider>
        </Column>
        <Column>
          <MuiThemeProvider>
            <TeacherSubjectsList
              onSubjectClick={this.onSubjectClick.bind(this)}
              subjects={this.props.teacher.subjects}
              header="Список предметов"
            />
          </MuiThemeProvider>
        </Column>
        </ButttonsRow>
        <StudentsTable />
      </div>
    );
  }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(Teacher);
