import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';

const TextFieldInput = property => {
  const { hintText, fullWidth, errorText, floatingLabelText, type, onChange, name } = property;
  return (
    <MuiThemeProvider>
      <TextField
        hintText={ hintText }
        errorText={ errorText }
        floatingLabelText={ floatingLabelText }
        type={ type }
        name ={ name }
        fullWidth={ fullWidth }
        onChange={ onChange }
        />
    </MuiThemeProvider>
  )
};

const	mapStateToProps	=	state	=> ({
  ...state,
});
export default connect(mapStateToProps)(TextFieldInput);
