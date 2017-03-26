import React from 'react';
import { connect } from 'react-redux';
import { Div, Section, Container } from './style';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ToggleVar from 'components/Toggle/index';
import { changeRegisterState } from 'containers/Stand/actions';

class Attributs extends React.Component {
  toggleRegisterPin(name,pinType,pin,checked) {
    this.props.dispatch(changeRegisterState({
      name:name,
      pinType: pinType.toLowerCase(),
      pin: pin.toLowerCase(),
      value:checked,
      },
    ));
  }
  render() {
    return (
      <Section>
        <Container>
          <h5>RgA</h5>
          <Div>
            <ToggleVar
              label="V0"
              pinType = "mode"
              pin = "v_0"
              name="a"
              toggled={this.props.stand.registers['a']['mode']['v_0']}
              toggle={this.toggleRegisterPin.bind(this)}
            />
            <ToggleVar
              label="V1"
              pinType = "mode"
              pin = "v_1"
              name="a"
              toggled={this.props.stand.registers['a']['mode']['v_1']}
              toggle={this.toggleRegisterPin.bind(this)}
            />
          </Div>
        </Container>
        <Container>
          <h5>RgB</h5>
          <Div>
            <ToggleVar
              label="V0"
              name="b"
              pin = "v_0"
              pinType = "mode"
              toggled={this.props.stand.registers['b']['mode']['v_0']}
              toggle={this.toggleRegisterPin.bind(this)}
            />
            <ToggleVar
              label="V1"
              name="b"
              pin = "v_1"
              pinType = "mode"
              toggled={this.props.stand.registers['b']['mode']['v_1']}
              toggle={this.toggleRegisterPin.bind(this)}
            />
          </Div>
        </Container>
        <Container>
          <h5>RgC</h5>
          <Div>
            <ToggleVar
              label="V0"
              name="c"
              pin = "v_0"
              pinType = "mode"
              toggled={this.props.stand.registers['c']['mode']['v_0']}
              toggle={this.toggleRegisterPin.bind(this)}
            />
            <ToggleVar
              label="V1"
              name="c"
              pin = "v_1"
              pinType = "mode"
              toggled={this.props.stand.registers['c']['mode']['v_1']}
              toggle={this.toggleRegisterPin.bind(this)}
            />
          </Div>
        </Container>
      </Section>
    );
  }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});


export default connect(mapStateToProps)(Attributs);
