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
            <PinCheckBox label='0'/>
            <PinCheckBox label='1'/>
            <PinCheckBox label='2'/>
            <PinCheckBox label='3'/>
            <PinCheckBox label='4'/>
            <PinCheckBox label='5'/>
            <PinCheckBox label='6'/>
            <PinCheckBox label='7'/>
          </SubDiv>
          <SubDiv>
            <PinCheckBox label='D'/>
          </SubDiv>
        </Col>
        <Col>{'RG'+this.props.name} </Col>
        <Col>
          <SubDiv>
            <PinCheckBox
              disabled={true}
              label="0"/>
            <PinCheckBox
              disabled={true}
              label="1"/>
            <PinCheckBox
              disabled={true}
              label="2"/>
            <PinCheckBox
              disabled={true}
              label="3"/>
            <PinCheckBox
              disabled={true}
              label="4"/>
            <PinCheckBox
              disabled={true}
              label="5"/>
            <PinCheckBox
              disabled={true}
              label="6"/>
            <PinCheckBox
              disabled={true}
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

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
