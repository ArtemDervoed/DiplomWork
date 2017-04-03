import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Subheader from 'material-ui/Subheader';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
  subheader: {
    fontSize:24,
  }
};
export class Question extends React.Component {
  render() {
    return (
      <div>
        <RadioButtonGroup name="shipSpeed">
          <RadioButton
            value="1"
            label="Ответ 1"
            style={styles.radioButton}
          />
          <RadioButton
            value="2"
            label="Ответ 2"
            style={styles.radioButton}
          />
          <RadioButton
            value="3"
            label="Ответ 3"
            style={styles.radioButton}
          />
          <RadioButton
            value="4"
            label="Ответ 4"
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



export default connect(mapStateToProps)(Question);
