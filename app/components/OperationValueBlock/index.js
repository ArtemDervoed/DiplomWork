import React from 'react';
import { connect } from 'react-redux';
import { Div, SubDiv, Col } from './style';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PinCheckBox from 'components/PinCheckBox/index.js';
import ToggleVar from 'components/Toggle/index';

class OperationValueBlock extends React.Component {

  render() {
    return (
      <div>
        <div>Код операции</div>
        <div>Адрес слова МК</div>
        <Div>
          <ToggleVar label="2^0"/>
          <ToggleVar label="2^1"/>
          <ToggleVar label="2^2"/>
          <ToggleVar label="2^3"/>
        </Div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OperationValueBlock);
