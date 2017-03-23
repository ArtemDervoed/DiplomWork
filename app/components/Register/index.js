import React from 'react';
import { connect } from 'react-redux';
import { Div, SubDiv, Col } from './style';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PinCheckBox from 'components/PinCheckBox/index.js';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      input:{
        d0:false,
        d1:false,
        d2:false,
        d3:false,
        d4:false,
        d5:false,
        d6:false,
        d7:false,
      },
      output: {
        q0:false,
        q1:false,
        q2:false,
        q3:false,
        q4:false,
        q5:false,
        q6:false,
        q7:false,
      },
      mode:{
        v1:false,
        v0:false,
      },
      data:false,
    }
  }

  render() {
    return (
      <Div>
        <Col>
          <SubDiv>
            <PinCheckBox label='V1'/>
            <PinCheckBox label='V'/>
          </SubDiv>
          <SubDiv>
            <PinCheckBox
              checked={this.state.input.d0}
              label='0'
              onCheck={this.togglePin}/>
            <PinCheckBox
              checked={this.state.input.d1}
              label='1'
              onCheck={this.togglePin}/>
            <PinCheckBox
              checked={this.state.input.d2}
              label='2'
              onCheck={this.togglePin}/>
            <PinCheckBox
              checked={this.state.input.d3}
              label='3'
              onCheck={this.togglePin}/>
            <PinCheckBox
              checked={this.state.input.d4}
              label='4'
              onCheck={this.togglePin}/>
            <PinCheckBox
              checked={this.state.input.d5}
              label='5'
              onCheck={this.togglePin}/>
            <PinCheckBox
              checked={this.state.input.d6}
              label='6'
              onCheck={this.togglePin}/>
            <PinCheckBox
              checked={this.state.input.d7}
              label='7'
              onCheck={this.togglePin}/>
          </SubDiv>
          <SubDiv>
            <PinCheckBox
              label='D'
              checked={true}
              />
          </SubDiv>
        </Col>
        <Col>{'RG'+this.props.name} </Col>
        <Col>
          <SubDiv>
            <PinCheckBox
              disabled={true}
              checked={this.state.output.q0}
              label="0"/>
            <PinCheckBox
              disabled={true}
              checked={this.state.output.q1}
              label="1"/>
            <PinCheckBox
              disabled={true}
              checked={this.state.output.q2}
              label="2"/>
            <PinCheckBox
              disabled={true}
              checked={this.state.output.q3}
              label="3"/>
            <PinCheckBox
              disabled={true}
              checked={this.state.output.q4}
              label="4"/>
            <PinCheckBox
              disabled={true}
              checked={this.state.output.q5}
              label="5"/>
            <PinCheckBox
              disabled={true}
              checked={this.state.output.q6}
              label="6"/>
            <PinCheckBox
              disabled={true}
              checked={this.state.output.q7}
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
