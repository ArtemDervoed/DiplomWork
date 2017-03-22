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
            <PinCheckBox label='V1'/>
            <PinCheckBox label='V'/>
          </SubDiv>
          <SubDiv>
            <PinCheckBox
              disabled={true}
              checked={this.props.value.var0} label='0'/>
            <PinCheckBox
              disabled={true}
              checked={this.props.value.var1} label='1'/>
            <PinCheckBox
              disabled={true}
              checked={this.props.value.var2} label='2'/>
            <PinCheckBox
              disabled={true}
              checked={this.props.value.var3} label='3'/>
            <PinCheckBox
              disabled={true}
              checked={this.props.value.var4} label='4'/>
            <PinCheckBox
              disabled={true}
              checked={this.props.value.var5} label='5'/>
            <PinCheckBox
              disabled={true}
              checked={this.props.value.var6} label='6'/>
            <PinCheckBox
              disabled={true}
              checked={this.props.value.var7} label='7'/>
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
              checked={this.props.value.var0}
              label="0"/>
            <PinCheckBox
              disabled={true}
              checked={this.props.value.var1}
              label="1"/>
            <PinCheckBox
              disabled={true}
              checked={this.props.value.var2}
              label="2"/>
            <PinCheckBox
              disabled={true}
              checked={this.props.value.var3}
              label="3"/>
            <PinCheckBox
              disabled={true}
              checked={this.props.value.var4}
              label="4"/>
            <PinCheckBox
              disabled={true}
              checked={this.props.value.var5}
              label="5"/>
            <PinCheckBox
              disabled={true}
              checked={this.props.value.var6}
              label="6"/>
            <PinCheckBox
              disabled={true}
              checked={this.props.value.var7}
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
