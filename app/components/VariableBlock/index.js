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
          label="0"
          pinType = {this.props.name}
          pin = "v_0"
          toggled={this.props.state.v_0}
          parentType="variables" />
        <ToggleVar
          label="1"
          pinType = {this.props.name}
          pin = "v_1"
          toggled={this.props.state.v_1}
          parentType="variables" />
        <ToggleVar
          label="2"
          pinType = {this.props.name}
          pin = "v_2"
          toggled={this.props.state.v_2}
          parentType="variables" />
        <ToggleVar
          label="3"
          pinType = {this.props.name}
          pin = "v_3"
          toggled={this.props.state.v_3}
          parentType="variables" />
        <ToggleVar
          label="4"
          pinType = {this.props.name}
          pin = "v_4"
          toggled={this.props.state.v_4}
          parentType="variables" />
        <ToggleVar
          label="5"
          pinType = {this.props.name}
          pin = "v_5"
          toggled={this.props.state.v_5}
          parentType="variables" />
        <ToggleVar
          label="6"
          pinType = {this.props.name}
          pin = "v_6"
          toggled={this.props.state.v_6}
          parentType="variables" />
        <ToggleVar
          label="7"
          pinType = {this.props.name}
          pin = "v_7"
          toggled={this.props.state.v_7}
          parentType="variables" />
      </Div>
    </divContainer>
    );
  }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});


export default connect(mapStateToProps)(VariableBlock);
