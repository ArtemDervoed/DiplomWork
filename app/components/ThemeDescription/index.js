import React from 'react';
import { connect } from 'react-redux';
import { Div, Header, Row } from './style.js';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import {URL} from './../../app.js';
const styles = {
  margin:10,
  header:{ fontSize: 20}
}
class ThemeDescription extends React.Component {
  beginStand() {
    this.props.beginStand(this.props.currentStand.status_for_current_user);
  }
  beginTest() {
    this.props.beginTest(this.props.currentTest.status_for_current_user);
  }
  conversionStatus(status) {
    if (status === 'not_passed') {
      return 'Не закончен';
    }
    if (status === 'not_started') {
      return'Не начат';
    }
    if (status === 'passed') {
      return 'Завершен';
    }
    if (status === 'failed') {
      return 'Провален';
    }
    if (status === 'successfully') {
      return 'Успешно';
    }
    return 'Отсутствует';
  }

  render() {
    let convertedStandStatus = this.conversionStatus(this.props.currentStand.status_for_current_user);
    let convertedTestStatus = this.conversionStatus(this.props.currentTest.status_for_current_user);
    return (
      <div>
        <Subheader style={styles.header}>Текущая тема</Subheader>
        <Divider/>
        <Row>
          <Div>
            <Header>{'Название темы: '}</Header>{(this.props.currentTheme.name!==null)?this.props.currentTheme.name:'' }
          </Div>
        </Row>
        <Row>
          <Div>
            <Header>{'Описание темы: '}</Header>{this.props.currentTheme.description}
          </Div>
        </Row>
        <Row>
          <Div><Header>{'Статус темы: '}</Header>{(this.props.currentTheme.status === 'started') ? 'Начата': (this.props.currentTheme.status === 'not_started') ? 'Не начата': 'Завершена'}</Div>
        </Row>
        <Subheader style={styles.header} >Информация о стенде</Subheader>
        <Divider/>
        <Row>
          <Div>
            <Header>{'Стенд: '}</Header>{this.props.currentStand.name}
          </Div>
        </Row>
        <Row>
          <Div>
            <Header>{'Описание стенда: '}</Header>{this.props.currentStand.description}
          </Div>
        </Row>
        <Row>
          <Div><Header>{'Статус стенда: '}</Header>{convertedStandStatus}</Div>
        </Row>
        <Row>
          <FlatButton disabled={(this.props.currentStand.status_for_current_user === 'passed')? true: false} style={styles} onClick={this.beginStand.bind(this)}  label="Начать выполнение работы" primary={true} />
        </Row>
        <Subheader style={styles.header} >Теоретический материал</Subheader>
        <Divider/>
        <Row>
          <Div>
            <Header>{'Тест: '}</Header>{(this.props.currentTest.name!==null)?this.props.currentTest.name:''}
          </Div>
        </Row>
        <Row>
          <Div><Header>{'Статус теста: '}</Header>{convertedTestStatus}</Div>
        </Row>
        <Row>
            <FlatButton disabled={(this.props.currentTest.status_for_current_user === 'passed'? true: false)} onClick={this.beginTest.bind(this)}label="Начать тест" primary={true} />
        </Row>
        <Subheader>Теоретический материал</Subheader>
        <Divider/>
        <Row>
          <Div>
            <Header>{'Документ: '}</Header>{(this.props.currentTheory.name!==null)?this.props.currentTheory.name:''}
          </Div>
        </Row>
        <Row>
          <FlatButton  style={styles} label={<a style={{textDecoration:'none', color:'rgb(0, 188, 212)'}} href={URL + this.props.currentTheory.document.url}>Подробнее...</a>} primary={true} />
        </Row>
        <Divider/>
      </div>
    );
  }
}
const	mapStateToProps	=	state	=> ({
  ...state,
});


export default connect(mapStateToProps)(ThemeDescription);
