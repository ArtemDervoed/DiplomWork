import React from 'react';
import { connect } from 'react-redux';
import { Div, Col, divContainer } from './style';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PinCheckBox from 'components/PinCheckBox/index.js';
import ToggleVar from 'components/Toggle/index';

class VariableBlockB extends React.Component {
onToggleRegisterBVariable0() {
  this.props.toggleRegisterBVariable0();
}
onToggleRegisterBVariable1() {
  this.props.toggleRegisterBVariable1();
}
onToggleRegisterBVariable2() {
  this.props.toggleRegisterBVariable2();
}
onToggleRegisterBVariable3() {
  this.props.toggleRegisterBVariable3();
}
onToggleRegisterBVariable4() {
  this.props.toggleRegisterBVariable4();
}
onToggleRegisterBVariable5() {
  this.props.toggleRegisterBVariable5();
}
onToggleRegisterBVariable6() {
  this.props.toggleRegisterBVariable6();
}
onToggleRegisterBVariable7() {
  this.props.toggleRegisterBVariable7();
}
  render() {
    return (
      <divContainer>
        <div>{this.props.header}</div>
        <Div>
          <ToggleVar
          toggled={this.props.registerB.var0}
          label="0"
          onClick={this.onToggleRegisterBVariable0.bind(this)} />
          <ToggleVar
          toggled={this.props.registerB.var1}
          label="1"
          onClick={this.onToggleRegisterBVariable1.bind(this)} />
          <ToggleVar
          toggled={this.props.registerB.var2}
          label="2"
          onClick={this.onToggleRegisterBVariable2.bind(this)} />
          <ToggleVar
          toggled={this.props.registerB.var3}
          label="3"
          onClick={this.onToggleRegisterBVariable3.bind(this)} />
          <ToggleVar
          toggled={this.props.registerB.var4}
          label="4"
          onClick={this.onToggleRegisterBVariable4.bind(this)} />
          <ToggleVar
          toggled={this.props.registerB.var5}
          label="5"
          onClick={this.onToggleRegisterBVariable5.bind(this)} />
          <ToggleVar
          toggled={this.props.registerB.var6}
          label="6"
          onClick={this.onToggleRegisterBVariable6.bind(this)} />
          <ToggleVar
          toggled={this.props.registerB.var7}
          label="7"
          onClick={this.onToggleRegisterBVariable7.bind(this)} />
        </Div>
      </divContainer>
    );
  }
}


const	mapStateToProps	=	state	=> ({
  ...state,
});


export default connect(mapStateToProps)(VariableBlockB);
