import React from 'react';
import { connect } from 'react-redux';
import { Div, Header, Row } from './style.js';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  margin:10
}
class ThemeDescription extends React.Component {
  constructor(props) {
    super(props);
  }
  beginStand() {
    this.props.beginStand(this.props.currentStand.status_for_current_user);
  }
  beginTest() {
    this.props.beginTest(this.props.currentTest.status_for_current_user);
  }

  render() {
    return (
      <div>
        <Subheader>Текущая тема</Subheader>
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
          <Div><Header>{'Статус темы: '}</Header>{(this.props.currentTheme.status === 'started') ? 'Начат': (this.props.currentTheme.status === 'not_started') ? 'Не начат': 'Завершен'}</Div>
        </Row>
        <Subheader>Информация о стенде</Subheader>
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
          <Div><Header>{'Статус стенда: '}</Header>{(this.props.currentStand.status_for_current_user === 'not_passed') ? 'Начат': (this.props.currentStand.status_for_current_user === 'not_started') ? 'Не начат': 'Завершен'}</Div>
        </Row>
        <Row>
          <FlatButton disabled={(this.props.currentStand.status_for_current_user === 'passed'? true: false)} style={styles} onClick={this.beginStand.bind(this)}  label="Начать выполнение работы" primary={true} />
        </Row>
        <Subheader>Теоретический материал</Subheader>
        <Divider/>
        <Row>
          <Div>
            <Header>{'Тест: '}</Header>{this.props.currentTest.name}
          </Div>
        </Row>
        <Row>
          <Div><Header>{'Статус теста: '}</Header>{(this.props.currentTest.status_for_current_user === 'not_passed') ? 'Начат': (this.props.currentStand.status_for_current_user === 'not_started') ? 'Не начат': 'Завершен'}</Div>
        </Row>
        <Row>
          <FlatButton disabled={(this.props.currentTest.status_for_current_user === 'passed'? true: false)} onClick={this.beginTest.bind(this)}label="Начать тест" primary={true} />
        </Row>
        <Subheader>Теоретический материал</Subheader>
        <Divider/>
        <Row>
          <Div>
            <Header>{'Документ: '}</Header>{this.props.currentTheory.name}
          </Div>
        </Row>
        <Row>
          <FlatButton  style={styles} label={<a style={{textDecoration:'none', color:'rgb(0, 188, 212)'}} href={'https://tranquil-escarpment-14615.herokuapp.com' + this.props.currentTheory.document.url}>Подробнее...</a>} primary={true} />
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
