import React from 'react';
import { connect } from 'react-redux';
import { Div, AdderRow, Subscrible } from './style';
import Adder from 'components/Adder/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PinCheckBox from 'components/PinCheckBox/index.js';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

const style = {
  textAlign: 'center',
};

class AddersBlock extends React.Component {
  render() {
    return (
      <AdderRow>
      <Subheader style={style}>Регистр микрокоманды</Subheader>
      <Divider style={{marginBottom:25}} />
        <Div>
          <Adder
            state={this.props.stand.adders.adder0}
            name="adder0"
          />
          <Adder
            state={this.props.stand.adders.adder1}
            name="adder1"
          />
          <Adder
            state={this.props.stand.adders.adder2}
            name="adder2"
          />
          <Adder
            state={this.props.stand.adders.adder3}
            name="adder3"
          />
          <Adder
            state={this.props.stand.adders.adder4}
            name="adder4"
          />
          <Adder
            state={this.props.stand.adders.adder5}
            name="adder5"
          />
          <Adder
            state={this.props.stand.adders.adder6}
            name="adder6"
          />
          <Adder
            state={this.props.stand.adders.adder7}
            name="adder7"
          />
        </Div>
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
