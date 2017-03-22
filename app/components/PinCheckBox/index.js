import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';

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
            onCheck={this.props.onCheck}
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
