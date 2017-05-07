import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import { connect } from 'react-redux';
import {Div, Header} from './style';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
class ListItemText extends Checkbox {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={this.props.style}>
        <Div><Header>{'Название: '}</Header> {this.props.name}</Div>
        <Div><Header>{'Описание: '}</Header> {this.props.description}</Div>
        <Div><Header>{'Статус: '}</Header> {(this.props.status === 'started') ? 'Начат': (this.props.status === 'not_started') ? 'Не начат': 'Завершен'}</Div>
        {(this.props.hasTeacher)?
          <div>
            <Divider/>
            <Div>
              <Header>{'Преподаватель: '}</Header>{this.props.lastName } {this.props.firstName }
            </Div>
          </div>:''}

      </div>
    )
  }
};

const	mapStateToProps	=	state	=> ({
  ...state,
});
export default connect(mapStateToProps)(ListItemText);
