import React from 'react';
import { connect } from 'react-redux';
import { Div, SubDiv, Col } from './style';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PinCheckBox from 'components/PinCheckBox/index.js';

class Adder extends React.Component {

  render() {
    return (
      <Div>
        <Col>
          <SubDiv>
            <PinCheckBox label='A'/>
            <PinCheckBox label='!A'/>
          </SubDiv>
          <SubDiv>
            <PinCheckBox label='B'/>
            <PinCheckBox label='!B'/>
          </SubDiv>
          <SubDiv>
            <PinCheckBox label='C'/>
          </SubDiv>
        </Col>
        <Col>{'SM'} </Col>
        <Col>
          <SubDiv>
            <PinCheckBox
              disabled={true}
              label="S"/>
          </SubDiv>
          <SubDiv>
            <PinCheckBox
              disabled={true}
              label="!S"/>
          </SubDiv>
          <SubDiv>
            <PinCheckBox
              disabled={true}    
              label="!P"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Adder);
