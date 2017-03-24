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
            <PinCheckBox
            label='A'
            checked={this.props.state.input.a}
            name={this.props.name.toLowerCase()}
            pinType = "input"
            pin = "a"
            parentType="adder"
            />
          </SubDiv>
          <SubDiv>
            <PinCheckBox
            label='B'
            checked={this.props.state.input.b}
            name={this.props.name.toLowerCase()}
            pinType = "input"
            pin = "b"
            parentType="adder"
            />
          </SubDiv>
          <SubDiv>
            <PinCheckBox
            label='C'
            checked={this.props.state.input.c}
            name={this.props.name.toLowerCase()}
            pinType = "input"
            pin = "c"
            parentType="adder"
          />
          </SubDiv>
        </Col>
        <Col>{'SM'} </Col>
        <Col>
          <SubDiv>
            <PinCheckBox
              disabled={true}
              label="S"
              />
          </SubDiv>
          <SubDiv>
            <PinCheckBox
              disabled={true}
              label="P"
              />
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
