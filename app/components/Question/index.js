import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
const styles = {
  block: {
    maxWidth: 1600
  },
  radioButton: {
    marginBottom: 16,
    fontSize:14,
  },
  subheader: {
    fontSize:16,
    marginBottom: 10,
  },
  divider: {
    marginBottom: 10,
  }
};
class Question extends React.Component {
  render() {
    return (
      <div>
      <Divider style={styles.divider}/>
        <Subheader style={styles.subheader}>Первый вопрос</Subheader>
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
