import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';
import {
  changeRegisterState,
  changeAdderState,
} from 'containers/Stand/actions.js';

const styles = {
  block: {
  },
  checkbox: {
    margin:0,
  },
  icon: {
    margin:0,
  },
};
class PinCheckBox extends React.Component {
  calculate(a,b,c) {
    let s = '';
    let p = '';
    if (a + b === 0) {
      s = false;
      p = false;
      if (c === true) {
        s = true;
        p = false;
      }
    }
    if (a + b === 1) {
      s = true;
      p = false;
      if (c === true) {
        s = false;
        p = true;
      }
    }
    if (a + b === 2) {
      s = false;
      p = true;
      if (c === true) {
        s = true;
        p = true;
      }
    }
    return {
      s:s,
      p:p,
    }
  }
  handleCheck() {
    if (this.props.parentType === 'register') {
      this.props.dispatch(changeRegisterState({
        name:this.props.name,
        part: {
          name: this.props.pinType.toLowerCase(),
          pin: this.props.pin.toLowerCase(),
          value:!this.props.checked,
        },
      }));
    }

    if (this.props.parentType === 'adder') {
      let a = '';
      let b = '';
      let c = '';
      if (this.props.pin === 'a') {
         a = !this.props.stand.adders[this.props.name].input.a;
         b = this.props.stand.adders[this.props.name].input.b;
         c = this.props.stand.adders[this.props.name].input.c;

      }
      if (this.props.pin === 'b') {
         b = !this.props.stand.adders[this.props.name].input.b;
         a = this.props.stand.adders[this.props.name].input.a;
         c = this.props.stand.adders[this.props.name].input.c;
      }
      if (this.props.pin === 'c') {
        a = this.props.stand.adders[this.props.name].input.a;
        b = this.props.stand.adders[this.props.name].input.b;
        c = !this.props.stand.adders[this.props.name].input.c;
      }

      this.props.dispatch(changeAdderState({
        name:this.props.name,
        part: {
          name: this.props.pinType.toLowerCase(),
          pin: this.props.pin.toLowerCase(),
          value:!this.props.checked,
          result:this.calculate(a,b,c)
        },
      }));
    }
  }
  render() {
    return (
       <div style={styles.block}>
        <MuiThemeProvider>
          <Checkbox
            label={this.props.label}
            checked={this.props.checked}
            style={styles.checkbox}
            iconStyle={styles.icon}
            disabled={this.props.disabled}
            labelPosition={this.props.labelPosition}
            onCheck={this.handleCheck.bind(this)}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});


export default connect(mapStateToProps)(PinCheckBox);
