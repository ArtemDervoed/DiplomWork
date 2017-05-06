import React from 'react';
import { connect } from 'react-redux';
import { Div, SubDiv, Row } from './style';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PinCheckBox from 'components/PinCheckBox/index.js';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
const style = {
  textAlign: 'center',
};
class ALU extends React.Component {
  render() {
    return (
      <Div>
        <Subheader style={style}>АЛУ</Subheader>
        <Divider />
        <Row>
          <PinCheckBox
          checked={this.props.stand.alu.attrib.s_0}
          label="S0"
          />
          <PinCheckBox
          checked={this.props.stand.alu.attrib.s_1}
          label="S1"
          />
          <PinCheckBox
          checked={this.props.stand.alu.attrib.s_2}
          label="S2"
          />
          <PinCheckBox
          checked={this.props.stand.alu.attrib.s_3}
          label="S3"
          />
          <PinCheckBox
          checked={this.props.stand.alu.attrib.m}
          label="M"
          />
          <PinCheckBox
          checked={this.props.stand.alu.attrib.c_0}
          label="C0"
          />
        </Row>
        <Subheader style={style}>Регистр микрокоманды</Subheader>
        <Divider />
        <Row>
          <PinCheckBox
          checked={this.props.stand.alu.commands['0000'].r_0}
          label="0"
          />
          <PinCheckBox
          checked={this.props.stand.alu.commands['0000'].r_1}
          label="1"
          />
          <PinCheckBox
          checked={this.props.stand.alu.commands['0000'].r_2}
          label="2"
          />
          <PinCheckBox
          checked={this.props.stand.alu.commands['0000'].r_3}
          label="3"
          />
          <PinCheckBox
          checked={this.props.stand.alu.commands['0000'].r_4}
          label="4"
          />
          <PinCheckBox
          checked={this.props.stand.alu.commands['0000'].r_5}
          label="5"
          />
          <PinCheckBox
          checked={this.props.stand.alu.commands['0000'].r_6}
          label="6"
          />
          <PinCheckBox
          checked={this.props.stand.alu.commands['0000'].r_7}
          label="7"
          />
        </Row>
        <Row>
          <PinCheckBox
          checked={this.props.stand.alu.commands['0001'].r_0}
          label="0"
          />
          <PinCheckBox
          checked={this.props.stand.alu.commands['0001'].r_1}
          label="1"
          />
          <PinCheckBox
          checked={this.props.stand.alu.commands['0001'].r_2}
          label="2"
          />
          <PinCheckBox
          checked={this.props.stand.alu.commands['0001'].r_3}
          label="3"
          />
          <PinCheckBox
          checked={this.props.stand.alu.commands['0001'].r_4}
          label="4"
          />
          <PinCheckBox
          checked={this.props.stand.alu.commands['0001'].r_5}
          label="5"
          />
          <PinCheckBox
          checked={this.props.stand.alu.commands['0001'].r_6}
          label="6"
          />
          <PinCheckBox
          checked={this.props.stand.alu.commands['0001'].r_7}
          label="7"
          />
        </Row>
        <Row>
          <PinCheckBox
          checked={this.props.stand.alu.commands['0010'].r_0}
          label="0"
          />
          <PinCheckBox
          checked={this.props.stand.alu.commands['0010'].r_1}
          label="1"
          />
          <PinCheckBox
          checked={this.props.stand.alu.commands['0010'].r_2}
          label="2"
          />
          <PinCheckBox
          checked={this.props.stand.alu.commands['0010'].r_3}
          label="3"
          />
          <PinCheckBox
          checked={this.props.stand.alu.commands['0010'].r_4}
          label="4"
          />
          <PinCheckBox
          checked={this.props.stand.alu.commands['0010'].r_5}
          label="5"
          />
          <PinCheckBox
          checked={this.props.stand.alu.commands['0010'].r_6}
          label="6"
          />
          <PinCheckBox
          checked={this.props.stand.alu.commands['0010'].r_7}
          label="7"
          />
        </Row>
      </Div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ALU);
