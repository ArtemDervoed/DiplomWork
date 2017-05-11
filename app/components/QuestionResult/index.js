import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {browserHistory} from 'react-router';
import Dialog from 'material-ui/Dialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Subheader from 'material-ui/Subheader';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import { Div, Header, Row, Img } from './style.js';
import ok from './ok.png';
import fail from './fail.png';
const style = {
  margin: 12,
};

class QuestionResult extends React.Component {
  state = {
   open: false,
 };

 handleOpen = () => {
   this.setState({open: true});
   this.props.sendAnswers();
 };

 handleClose = () => {
   this.setState({open: false});
   this.props.closeTest();

 };

 render() {
   const actions = [
     <FlatButton
       label="Ok"
       primary={true}
       keyboardFocused={true}
       onTouchTap={this.handleClose}
     />,
   ];

   return (
     <div>
       <RaisedButton label="Завершить" secondary={true} style={style} onTouchTap={this.handleOpen} />
       <Dialog
         title="Результаты теста"
         actions={actions}
         modal={false}
         open={this.state.open}
         onRequestClose={this.handleClose}
        >
         <div>
           <figure style={{textAlign:'center'}}>
              <Img  src={(this.props.quiz.result.status === 'failed') ? fail:ok}/>
            </figure>
           <Row>
             <Div>
               <Header>{'Результат: '}</Header>{this.props.quiz.result.status}
             </Div>
           </Row>
           <Row>
             <Div>
               <Header>{'Баллы: '}</Header>{this.props.quiz.result.score}
             </Div>
           </Row>
         </div>
       </Dialog>
     </div>
   );
 }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(QuestionResult);
