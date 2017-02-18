import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Label, Span, Div } from './style.js';


export class InfoRow extends React.Component {
  state = {
      open: false,
    };
    editProps = () => {
      this.props.applyNewValue(this.refs.data.input.value);
      this.setState({open: false})
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
        onTouchTap={this.editProps}
      />,
    ];
    return (
      <Div>
        <Span>{this.props.header}</Span>
        <div className="inputbox">
          <MuiThemeProvider>
            <Label onDoubleClick={this.handleOpen}>{this.props.data}</Label>
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
              ref="data"
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

export default connect(mapStateToProps)(InfoRow);
