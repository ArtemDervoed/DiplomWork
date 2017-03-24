import React from 'react';
import { connect } from 'react-redux';
import { Div, SubDiv, Col } from './style';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PinCheckBox from 'components/PinCheckBox/index.js';

class Register extends React.Component {
  render() {
    return (
      <Div>
        <Col>
          <SubDiv>
            <PinCheckBox
            label='V1'
            checked={this.props.state.mode.v_1}
            name={this.props.name.toLowerCase()}
            pinType = "mode"
            pin = "v_1"
            parentType="register"
            />
            <PinCheckBox
            label='V'
            checked={this.props.state.mode.v_0}
            name={this.props.name.toLowerCase()}
            pinType = "mode"
            pin = "v_0"
            parentType="register"
            />
          </SubDiv>
          <SubDiv>
            <PinCheckBox
              checked={this.props.state.input.d_0}
              label='0'
              name={this.props.name.toLowerCase()}
              pinType = "input"
              pin = "d_0"
              parentType="register"
              />
            <PinCheckBox
              checked={this.props.state.input.d_1}
              label='1'
              name={this.props.name.toLowerCase()}
              pinType = "input"
              pin = "d_1"
              parentType="register"
              />
            <PinCheckBox
              checked={this.props.state.input.d_2}
              label='2'
              name={this.props.name.toLowerCase()}
              pinType = "input"
              pin = "d_2"
              parentType="register"
              />
            <PinCheckBox
              checked={this.props.state.input.d_3}
              label='3'
              name={this.props.name.toLowerCase()}
              pinType = "input"
              pin = "d_3"
              parentType="register"
              />
            <PinCheckBox
              checked={this.props.state.input.d_4}
              label='4'
              name={this.props.name.toLowerCase()}
              pinType = "input"
              pin = "d_4"
              parentType="register"
              />
            <PinCheckBox
              checked={this.props.state.input.d_5}
              label='5'
              name={this.props.name.toLowerCase()}
              pinType = "input"
              pin = "d_5"
              parentType="register"
              />
            <PinCheckBox
              checked={this.props.state.input.d_6}
              label='6'
              name={this.props.name.toLowerCase()}
              pinType = "input"
              pin = "d_6"
              parentType="register"
              />
            <PinCheckBox
              checked={this.props.state.input.d_7}
              label='7'
              name={this.props.name.toLowerCase()}
              pinType = "input"
              pin = "d_7"
              parentType="register"
              />
          </SubDiv>
          <SubDiv>
            <PinCheckBox
              label='D'
              checked={this.props.state.mode.d}
              name={this.props.name.toLowerCase()}
              pinType = "mode"
              pin = "d"
              parentType="register"
              />
          </SubDiv>
        </Col>
        <Col>{'RG'+this.props.name} </Col>
        <Col>
          <SubDiv>
            <PinCheckBox
              disabled={true}
              checked={this.props.state.output.q_0}
              label="0"/>
            <PinCheckBox
              disabled={true}
              checked={this.props.state.output.q_1}
              label="1"/>
            <PinCheckBox
              disabled={true}
              checked={this.props.state.output.q_2}
              label="2"/>
            <PinCheckBox
              disabled={true}
              checked={this.props.state.output.q_3}
              label="3"/>
            <PinCheckBox
              disabled={true}
              checked={this.props.state.output.q_4}
              label="4"/>
            <PinCheckBox
              disabled={true}
              checked={this.props.state.output.q_5}
              label="5"/>
            <PinCheckBox
              disabled={true}
              checked={this.props.state.output.q_6}
              label="6"/>
            <PinCheckBox
              disabled={true}
              checked={this.props.state.output.q_7}
              label="7"/>
          </SubDiv>
        </Col>
      </Div>
    );
  }
}


const	mapStateToProps	=	state	=> ({
  ...state,
});


export default connect(mapStateToProps)(Register);
