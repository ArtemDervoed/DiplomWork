import React from 'react';
import { connect } from 'react-redux';
import { Div, Col, divContainer } from './style';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PinCheckBox from 'components/PinCheckBox/index.js';
import ToggleVar from 'components/Toggle/index';
import { changeRegisterState } from 'containers/Stand/actions';
class VariableBlock extends React.Component {


  toggleRegisterPin(name,pinType,pin,checked) {
    this.props.dispatch(changeRegisterState({
      name:name,
      pinType: pinType.toLowerCase(),
      pin: pin.toLowerCase(),
      value:checked,
      }
    ));
  }


  render() {
    return (
      <divContainer>
        <div>{this.props.header}</div>
        <Div>
          <ToggleVar
            label="0"
            name={this.props.name}
            pinType = "input"
            pin = "d_0"
            toggled={this.props.stand.registers[this.props.name]['input']['d_0']}
            toggle={this.toggleRegisterPin.bind(this)}
             />
           <ToggleVar
             label="1"
             name={this.props.name}
             pinType = "input"
             pin = "d_1"
             toggled={this.props.stand.registers[this.props.name]['input']['d_1']}
             toggle={this.toggleRegisterPin.bind(this)}
              />
            <ToggleVar
              label="2"
              name={this.props.name}
              pinType = "input"
              pin = "d_2"
              toggled={this.props.stand.registers[this.props.name]['input']['d_2']}
              toggle={this.toggleRegisterPin.bind(this)}
               />
             <ToggleVar
               label="3"
               name={this.props.name}
               pinType = "input"
               pin = "d_3"
               toggled={this.props.stand.registers[this.props.name]['input']['d_3']}
               toggle={this.toggleRegisterPin.bind(this)}
                />
            <ToggleVar
              label="4"
              name={this.props.name}
              pinType = "input"
              pin = "d_4"
              toggled={this.props.stand.registers[this.props.name]['input']['d_4']}
              toggle={this.toggleRegisterPin.bind(this)}
               />
             <ToggleVar
               label="5"
               name={this.props.name}
               pinType = "input"
               pin = "d_5"
               toggled={this.props.stand.registers[this.props.name]['input']['d_5']}
               toggle={this.toggleRegisterPin.bind(this)}
                />
            <ToggleVar
              label="6"
              name={this.props.name}
              pinType = "input"
              pin = "d_6"
              toggled={this.props.stand.registers[this.props.name]['input']['d_6']}
              toggle={this.toggleRegisterPin.bind(this)}
               />
           <ToggleVar
             label="7"
             name={this.props.name}
             pinType = "input"
             pin = "d_7"
             toggled={this.props.stand.registers[this.props.name]['input']['d_7']}
             toggle={this.toggleRegisterPin.bind(this)}
              />
        </Div>
      </divContainer>
      );
    }
  }

const	mapStateToProps	=	state	=> ({
  ...state,
});


export default connect(mapStateToProps)(VariableBlock);
