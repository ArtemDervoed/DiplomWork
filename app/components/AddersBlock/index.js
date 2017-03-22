import React from 'react';
import { connect } from 'react-redux';
import { Div, AdderRow, Subscrible } from './style';
import Adder from 'components/Adder/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PinCheckBox from 'components/PinCheckBox/index.js';
import {
  toggleVarA,
  toggleVarB,
  setClock,
  setSumm,
  setTransfer,
} from './actions.js';

class AddersBlock extends React.Component {
  render() {
    return (
      <AdderRow>
        <Div>
          <Adder
            clock={true}
            firstOperand={this.props.registerA.var0}
            secondOperand={this.props.registerB.var0}
          />
          <Adder
            clock={true}
            firstOperand={this.props.registerA.var1}
            secondOperand={this.props.registerB.var1}
          />
          <Adder
            clock={true}
            firstOperand={this.props.registerA.var2}
            secondOperand={this.props.registerB.var2}
          />
          <Adder
            clock={true}
            firstOperand={this.props.registerA.var3}
            secondOperand={this.props.registerB.var3}
          />
          <Adder
            clock={true}
            firstOperand={this.props.registerA.var4}
            secondOperand={this.props.registerB.var4}
          />
          <Adder
            clock={true}
            firstOperand={this.props.registerA.var5}
            secondOperand={this.props.registerB.var5}
          />
          <Adder
            clock={true}
            firstOperand={this.props.registerA.var6}
            secondOperand={this.props.registerB.var6}
          />
          <Adder
            clock={true}
            firstOperand={this.props.registerA.var7}
            secondOperand={this.props.registerB.var7}
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
