import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';
import { changeRegisterState } from 'containers/Stand/actions.js';
import { changeAdderState } from 'containers/Stand/actions.js';

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
      this.props.dispatch(changeAdderState({
        name:this.props.name,
        part: {
          name: this.props.pinType.toLowerCase(),
          pin: this.props.pin.toLowerCase(),
          value:!this.props.checked,
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
