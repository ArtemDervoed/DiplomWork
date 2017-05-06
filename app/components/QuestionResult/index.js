import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Subheader from 'material-ui/Subheader';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

class QuestionResult extends React.Component {
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
       <RaisedButton label="Dialog" onTouchTap={this.handleOpen} />
       <Dialog
         title="Dialog With Actions"
         actions={actions}
         modal={false}
         open={this.state.open}
         onRequestClose={this.handleClose}
       >
         The actions in this window were passed in as an array of React objects.
       </Dialog>
     </div>
   );
 }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(QuestionResult);
