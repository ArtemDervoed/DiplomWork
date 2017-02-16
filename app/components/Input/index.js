/*
 *
 * Login
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { login } from './actions.js';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Label, Div } from './style.js';


export class Input extends React.Component {
  constructor(...args) {
    super();

  }
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
      <Div>
        <span>{this.props.header}</span>
        <div className="inputbox">
          <MuiThemeProvider>
            <Label>{this.props.data}</Label>
          </MuiThemeProvider>
          <MuiThemeProvider>
          <FloatingActionButton mini={true} onTouchTap={this.handleOpen} >
            <ContentAdd />
          </FloatingActionButton>
          </MuiThemeProvider>
            <MuiThemeProvider>
              <Dialog
              title="Изменить имя пользователя"
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
            <TextField
              fullWidth={true}
              hintText="Новое имя пользователя"
              ref="nameTeacher"
              floatingLabelText="Новое имя пользователя"
              />
            </Dialog>
          </MuiThemeProvider>
        </div>
      </Div>
    );
  }
}


const	mapStateToProps	=	state	=> ({
  ...state,
});

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }

export default connect(mapStateToProps)(Input);
