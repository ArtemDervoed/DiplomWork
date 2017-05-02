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
  constructor() {
    super();
    this.state = {
      attrib:{s_0:false,s_1:false,s_2:false,s_3:false,m:false,c_0:false,},
      commands: {
        first:{r_0:false,r_1:false,r_2:false,r_3:false,r_4:false,r_5:false,r_6:false,r_7:false,},
        second:{r_0:false,r_1:false,r_2:false,r_3:false,r_4:false,r_5:false,r_6:false,r_7:false,},
        third:{r_0:false,r_1:false,r_2:false,r_3:false,r_4:false,r_5:false,r_6:false,r_7:false,},
      }
    }
  }
  render() {
    return (
      <Div>
        <Subheader style={style}>АЛУ</Subheader>
        <Divider />
        <Row>
          <PinCheckBox
          checked={this.state.attrib.s_0}
          label="S0"
          />
          <PinCheckBox
          checked={this.state.attrib.s_1}
          label="S1"
          />
          <PinCheckBox
          checked={this.state.attrib.s_2}
          label="S2"
          />
          <PinCheckBox
          checked={this.state.attrib.s_3}
          label="S3"
          />
          <PinCheckBox
          checked={this.state.attrib.m}
          label="M"
          />
          <PinCheckBox
          checked={this.state.attrib.c_0}
          label="C0"
          />
        </Row>
        <Subheader style={style}>Регистр микрокоманды</Subheader>
        <Divider />
        <Row>
          <PinCheckBox
          checked={this.state.commands.first.r_0}
          label="0"
          />
          <PinCheckBox
          checked={this.state.commands.first.r_1}
          label="1"
          />
          <PinCheckBox
          checked={this.state.commands.first.r_2}
          label="2"
          />
          <PinCheckBox
          checked={this.state.commands.first.r_3}
          label="3"
          />
          <PinCheckBox
          checked={this.state.commands.first.r_4}
          label="4"
          />
          <PinCheckBox
          checked={this.state.commands.first.r_5}
          label="5"
          />
          <PinCheckBox
          checked={this.state.commands.first.r_6}
          label="6"
          />
          <PinCheckBox
          checked={this.state.commands.first.r_7}
          label="7"
          />
        </Row>
        <Row>
          <PinCheckBox
          checked={this.state.commands.second.r_0}
          label="0"
          />
          <PinCheckBox
          checked={this.state.commands.second.r_1}
          label="1"
          />
          <PinCheckBox
          checked={this.state.commands.second.r_2}
          label="2"
          />
          <PinCheckBox
          checked={this.state.commands.second.r_3}
          label="3"
          />
          <PinCheckBox
          checked={this.state.commands.second.r_4}
          label="4"
          />
          <PinCheckBox
          checked={this.state.commands.second.r_5}
          label="5"
          />
          <PinCheckBox
          checked={this.state.commands.second.r_6}
          label="6"
          />
          <PinCheckBox
          checked={this.state.commands.second.r_7}
          label="7"
          />
        </Row>
        <Row>
          <PinCheckBox
          checked={this.state.commands.third.r_0}
          label="0"
          />
          <PinCheckBox
          checked={this.state.commands.third.r_1}
          label="1"
          />
          <PinCheckBox
          checked={this.state.commands.third.r_2}
          label="2"
          />
          <PinCheckBox
          checked={this.state.commands.third.r_3}
          label="3"
          />
          <PinCheckBox
          checked={this.state.commands.third.r_4}
          label="4"
          />
          <PinCheckBox
          checked={this.state.commands.third.r_5}
          label="5"
          />
          <PinCheckBox
          checked={this.state.commands.third.r_6}
          label="6"
          />
          <PinCheckBox
          checked={this.state.commands.third.r_7}
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
