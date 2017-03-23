import React from 'react';
import { connect } from 'react-redux';
import { Div, Col, divContainer } from './style';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PinCheckBox from 'components/PinCheckBox/index.js';
import ToggleVar from 'components/Toggle/index';

class VariableBlock extends React.Component {

render() {
  return (
    <divContainer>
      <div>{this.props.header}</div>
      <Div>
        <ToggleVar
        label="0" />
        <ToggleVar
        label="1" />
        <ToggleVar
        label="2" />
        <ToggleVar
        label="3" />
        <ToggleVar
        label="4" />
        <ToggleVar
        label="5" />
        <ToggleVar
        label="6" />
        <ToggleVar
        label="7" />
      </Div>
    </divContainer>
    );
  }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});


export default connect(mapStateToProps)(VariableBlock);
