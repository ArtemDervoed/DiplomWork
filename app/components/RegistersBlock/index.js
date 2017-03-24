import React from 'react';
import { connect } from 'react-redux';
import { Div, Registers } from './style';
import Register from 'components/Register/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PinCheckBox from 'components/PinCheckBox/index.js';

class RegistersBlock extends React.Component {
  render() {
    return (
      <Registers>
        <Register
          state={this.props.stand.registers.a}
          name='A'/>
        <Register
          state={this.props.stand.registers.b}
          name='B'/>
        <Register
          state={this.props.stand.registers.c}
          name='C'/>
      </Registers>
    );
  }
}


const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(RegistersBlock);
