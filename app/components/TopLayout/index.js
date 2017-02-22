import React, {Component} from 'react';
import {connect}	from	'react-redux';
import { Section, Div_container,Div_content, H1 } from './style.js';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const style = {
  marginTop: 40,
  height: 70,
  width: 350,
  letterSpacing: 2,
};

class TopLayout extends Component {
  render() {
    return (
      <Section>
        <Div_container>
          <Div_content>
            <H1>
              Приступить <br/> к выполнению <br/>работы
            </H1>
            <MuiThemeProvider>
               <FlatButton
               icon={<h2>Начать</h2>}
               secondary={true}
               style={style}
               hoverColor="rgba(0,0,0,.3)"
               backgroundColor="rgba(0,0,0,.5)"/>
            </MuiThemeProvider>
          </Div_content>
        </Div_container>
      </Section>
    );
  }
}
const	mapStateToProps	=	(state, ownProps)	=> {
  return {...state};
};

export default connect(mapStateToProps)(TopLayout);
