import React from 'react';
import { connect } from 'react-redux';
import { Div, SubDiv, Col } from './style';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PinCheckBox from 'components/PinCheckBox/index.js';

class Adder extends React.Component {
  constructor() {
    super();
    this.state = {
      s:false,
      p:false,
    }
  }
  calculate() {
    let result = this.props.firstOperand + this.props.secondOperand;
    if (result === 0) {
      this.setState({s:false, p:false})
    }
    if (result === 1) {
      this.setState({s:true, p:false})
    }
    if (result === 2) {
      this.setState({s:false, p:true})
    }
  }
  click() {
    this.calculate();
  }
  render() {
    return (
      <Div>
        <Col>
          <SubDiv>
            <PinCheckBox
            label='A'
            checked={this.props.firstOperand}
            />
          </SubDiv>
          <SubDiv>
            <PinCheckBox
            label='B'
            checked={this.props.secondOperand}

            />
          </SubDiv>
          <SubDiv>
            <PinCheckBox
            label='C'
            onCheck={this.click.bind(this)}
          />
          </SubDiv>
        </Col>
        <Col>{'SM'} </Col>
        <Col>
          <SubDiv>
            <PinCheckBox
              checked={this.state.s}
              disabled={true}
              label="S"
              />
          </SubDiv>
          <SubDiv>
            <PinCheckBox
              checked={this.state.p}
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
