import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Header, Row} from './style.js';
export default class DialogWindow extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton
          label="Задание"
          primary={true}
          style={{width:138, marginBottom:20}}
          onTouchTap={this.handleOpen}
        />
        <Dialog
          title="Ваше инддивидуальное задание"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <Row>
          <Header>Вариант: </Header>{this.props.task.variant}
        </Row>
        <Row>
          <Header>Первый операнд: </Header>{this.props.task.operand_1}
        </Row>
        <Row>
          <Header>Второй операнд: </Header>{this.props.task.operand_2}
        </Row>
        <Row>
          <Header>Тип операции: </Header>{this.props.task.operation_type}
        </Row>
        <Row>
          <Header>Код операции: </Header>{this.props.task.operation_code}
        </Row>
        </Dialog>
      </div>
    );
  }
}
