import React, {Component} from 'react';
import {connect}	from	'react-redux';
import { Section, Div, H1 } from './style.js';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const style = {
  margin: 12,
  height: 50,
  width: 250,
  marginTop: 40,
  marginLeft: 150,
  backgroundColor: 'rgba(0,0,0,.5)'
};

class TopLayout extends Component {
  render() {
    return (
      <Section>
        <Div>
          <H1>
            Приступить <br/> к выполнению <br/>работы
          </H1>
          <MuiThemeProvider>
             <FlatButton label="Начать" secondary={true} style={style}/>
          </MuiThemeProvider>
        </Div>
      </Section>
    );
  }
}
const	mapStateToProps	=	(state, ownProps)	=> {
  return {...state};
};

export default connect(mapStateToProps)(TopLayout);
