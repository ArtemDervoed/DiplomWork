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
    this.props.beginStand(this.props.routing.locationBeforeTransitions.pathname);
  }
  beginTest() {

  }
  readTheory() {

  }
  render() {
    let standSample = {
      name:this.props.data.stand_sample.name || ' ',
      description: this.props.data.stand_sample.description || ' ',
    }
    return (
      <div>
        <Subheader>Текущая тема</Subheader>
        <Divider/>
        <Row>
          <Div>
            <Header>{'Название темы: '}</Header>{(this.props.data.name!==null)?this.props.data.name:'' }
          </Div>
        </Row>
        <Row>
          <Div>
            <Header>{'Описание темы: '}</Header>{this.props.data.description}
          </Div>
        </Row>
        <Row>
          <Div><Header>{'Статус темы: '}</Header>{(this.props.data.status_for_current_user === 'started') ? 'Начат': (this.props.data.status_for_current_user === 'not_started') ? 'Не начат': 'Завершен'}</Div>
        </Row>
        <Subheader>Информация о стенде</Subheader>
        <Divider/>
        <Row>
          <Div>
            <Header>{'Стенд: '}</Header>{standSample.name || ''}
          </Div>
        </Row>
        <Row>
          <Div>
            <Header>{'Описание стенда: '}</Header>{standSample.description || ''}
          </Div>
        </Row>
        <Row>
          <FlatButton style={styles} onClick={this.beginStand.bind(this)}  label="Начать выполнение работы" primary={true} />
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
