import React from 'react';
import { connect } from 'react-redux';
import { Div, AdderRow, Subscrible } from './style';
import Adder from 'components/Adder/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PinCheckBox from 'components/PinCheckBox/index.js';

class AddersBlock extends React.Component {
  render() {
    return (
      <AdderRow>
        <Div>
          <Adder
            clock={true}
          />
          <Adder
            clock={true}
          />
          <Adder
            clock={true}
          />
          <Adder
            clock={true}
          />
          <Adder
            clock={true}
          />
          <Adder
            clock={true}
          />
          <Adder
            clock={true}
          />
          <Adder
            clock={true}
          />          
        </Div>
        <Subscrible>{'Аппаратное управление'}</Subscrible>
      </AdderRow>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddersBlock);
