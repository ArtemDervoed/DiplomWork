import React from 'react';
import { connect } from 'react-redux';
import { Div, SubDiv, Col } from './style';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import {
  changeChart
} from 'containers/Stand/actions';
const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginTop: 20,
  },
};
const impulses = {
  c1: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
  c2: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
  c3: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
  c4: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,],
}
class ControlPanel extends React.Component {
  changeCI(event) {
    switch (event.target.value) {
      case 'c1': {
        this.props.dispatch(changeChart(impulses.c1));
      } break;
      case 'c2': {
        this.props.dispatch(changeChart(impulses.c2));
      } break;
      case 'c3': {
        this.props.dispatch(changeChart(impulses.c3));
      } break;
      case 'c4': {
        this.props.dispatch(changeChart(impulses.c4));
      } break;
      default: return;
  }
}
  render() {
    return (
      <div>
        <Subheader style={{textAlign: 'center',}}>Синхроимпульсы</Subheader>
        <Divider />
        <RadioButtonGroup
        style={{display:'flex', flexDirection: 'column', alignSelf: 'center', marginLeft: 30}}
        onChange={this.changeCI.bind(this)}
        name="Синхроимпульсы">
          <RadioButton
            value="c1"
            label="Cи1"
            style={styles.radioButton}
          />
          <RadioButton
            value="c2"
            label="Cи2"
            style={styles.radioButton}
          />
          <RadioButton
            value="c3"
            label="Cи3"
            style={styles.radioButton}
          />
          <RadioButton
            value="c4"
            label="Cи4"
            style={styles.radioButton}
          />
        </RadioButtonGroup>
      </div>
    );
  }
}


const	mapStateToProps	=	state	=> ({
  ...state,
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
