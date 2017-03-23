import React from 'react';
import { connect } from 'react-redux';
import { Div, Registers } from './style';
import Register from 'components/Register/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PinCheckBox from 'components/PinCheckBox/index.js';

class RegistersBlock extends React.Component {
  componentWillMount() {
    console.log(this);
  }
  render() {
    return (
      <Registers>
        <Register value={this.props.registerA} name="A"/>
        <Register value={this.props.registerB} name="B"/>
        <Register value={this.props.registerC} name="C"/>
      </Registers>
    );
  }
}


const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(RegistersBlock);
