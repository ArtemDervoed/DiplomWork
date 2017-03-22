import React from 'react';
import { connect } from 'react-redux';
import { Div, Col, divContainer } from './style';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PinCheckBox from 'components/PinCheckBox/index.js';
import ToggleVar from 'components/Toggle/index';

class VariableBlockA extends React.Component {
onToggleRegisterAVariable0() {
  this.props.toggleRegisterAVariable0();
}
onToggleRegisterAVariable1() {
  this.props.toggleRegisterAVariable1();
}
onToggleRegisterAVariable2() {
  this.props.toggleRegisterAVariable2();
}
onToggleRegisterAVariable3() {
  this.props.toggleRegisterAVariable3();
}
onToggleRegisterAVariable4() {
  this.props.toggleRegisterAVariable4();
}
onToggleRegisterAVariable5() {
  this.props.toggleRegisterAVariable5();
}
onToggleRegisterAVariable6() {
  this.props.toggleRegisterAVariable6();
}
onToggleRegisterAVariable7() {
  this.props.toggleRegisterAVariable7();
}
  render() {
    return (
      <divContainer>
        <div>{this.props.header}</div>
        <Div>
          <ToggleVar
          toggled={this.props.registerA.var0}
          label="0"
          onClick={this.onToggleRegisterAVariable0.bind(this)} />
          <ToggleVar
          toggled={this.props.registerA.var1}
          label="1"
          onClick={this.onToggleRegisterAVariable1.bind(this)} />
          <ToggleVar
          toggled={this.props.registerA.var2}
          label="2"
          onClick={this.onToggleRegisterAVariable2.bind(this)} />
          <ToggleVar
          toggled={this.props.registerA.var3}
          label="3"
          onClick={this.onToggleRegisterAVariable3.bind(this)} />
          <ToggleVar
          toggled={this.props.registerA.var4}
          label="4"
          onClick={this.onToggleRegisterAVariable4.bind(this)} />
          <ToggleVar
          toggled={this.props.registerA.var5}
          label="5"
          onClick={this.onToggleRegisterAVariable5.bind(this)} />
          <ToggleVar
          toggled={this.props.registerA.var6}
          label="6"
          onClick={this.onToggleRegisterAVariable6.bind(this)} />
          <ToggleVar
          toggled={this.props.registerA.var7}
          label="7"
          onClick={this.onToggleRegisterAVariable7.bind(this)} />
        </Div>
      </divContainer>
    );
  }
}


const	mapStateToProps	=	state	=> ({
  ...state,
});


export default connect(mapStateToProps)(VariableBlockA);
