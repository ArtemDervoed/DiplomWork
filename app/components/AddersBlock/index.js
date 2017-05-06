import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Div, AdderRow, Subscrible, Row } from './style';
import Adder from 'components/Adder/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PinCheckBox from 'components/PinCheckBox/index.js';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

const style = {
  textAlign: 'center',
};

class FastTransfer extends Component {
  render() {
    return (
      <div>
        <Subheader style={style}>Блок ускореного переноса</Subheader>
        <Row>
          <PinCheckBox
          checked={this.props.alu.attrib.s_0}
          label="S0"
          />
          <PinCheckBox
          checked={this.props.alu.attrib.s_1}
          label="S1"
          />
          <PinCheckBox
          checked={this.props.alu.attrib.s_2}
          label="S2"
          />
          <PinCheckBox
          checked={this.props.alu.attrib.s_3}
          label="S3"
          />
          <PinCheckBox
          checked={this.props.alu.attrib.m}
          label="M"
          />
          <PinCheckBox
          checked={this.props.alu.attrib.c_0}
          label="C0"
          />
        </Row>
        <Divider style={{marginBottom:25,marginTop:10 }} />
      </div>
    );
  }
}


class AddersBlock extends React.Component {
  render() {
    return (
      <AdderRow>
      <Subheader style={style}>Регистр микрокоманды</Subheader>
      <Divider style={{marginBottom:25}} />
      {
          (this.props.stand.hard) ? <FastTransfer alu={this.props.stand.alu}/>:<div></div>
      }
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
