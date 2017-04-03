import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import Header from 'components/Header/index';
import Footer from 'components/Footer/index';
import AddersBlock from 'components/AddersBlock/index';
import RegistersBlock from 'components/RegistersBlock/index';
import VariableBlock from 'components/VariableBlock/index';
import Chart from 'components/Chart/index';
import OperationValueBlock from 'components/OperationValueBlock/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import { changeRegisterState, changeAdderState } from 'containers/Stand/actions';
import { OPERATIONS } from './constants';
import {
  AdderBlock,
  VariablesRow,
  Div,
  OperationsBlock,
  ConfigureBlock,
  ChartRow
} from './style';

const style = {
  minHeight: 500,
  width: '99%',
  margin: '1% auto',
  backgroundColor: 'white'
};

class Stand extends React.Component {
  getOperationsCode() {
    let operationsValue = '';
    let operations = this.props.stand.operationsValue;
    for(var key in operations) {
      if(operations.hasOwnProperty(key)) {
         operationsValue+= +operations[key];
      }
    }
    return operationsValue;
  }
  getOutsRgister(register) {
    let output = '';
    for(var key in register.output) {
      if(register.output.hasOwnProperty(key)) {
         output+= +register.output[key];
      }
    }
    return output;
  }
  writeResult() {
    const operation = this.getOperationsCode();
    const registersterA = this.getOutsRgister(this.props.stand.registers.a);
    const registersterB = this.getOutsRgister(this.props.stand.registers.b);
    if (operation === OPERATIONS.SUMM) {
      let addersInputA = ''
      let addersInputB = ''
      let result = '';
      let adders = this.props.stand.adders;
      for(var key in adders) {
        if(adders.hasOwnProperty(key)) {
           result+= +adders[key].output.s;
           addersInputA+= +adders[key].input.a;
           addersInputB+= +adders[key].input.b;
        }
      }
      if ((addersInputA !== registersterA) || (addersInputB !== registersterB)) {
        alert('Значения на выходах регистров не соответсвуют входам сумматоров');
      }
      for (var i = 0; i < result.length; i++) {
        this.props.dispatch(changeRegisterState({
          name:'c',
          pinType: 'input',
          pin: 'd_' + +i,
          value:(result[i] == 1) ? true:false,
          }
        ));
      }
    }
    if (operation === OPERATIONS.NAND) {
      let result = '';
      let adders = this.props.stand.adders;
      for(var key in adders) {
        if(adders.hasOwnProperty(key)) {
           result+= +adders[key].output.s;
        }
      }
      for (var i = 0; i < result.length; i++) {
        this.props.dispatch(changeRegisterState({
          name:'c',
          pinType: 'input',
          pin: 'd_' + +i,
          value:(result[i] == 1) ? true:false,
          }
        ));
      }
    }
    if (operation === OPERATIONS.AND) {

    }
    if (operation === OPERATIONS.OR) {

    }
    if (operation === OPERATIONS.NOTA) {

    }
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Header/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Paper style={style} zDepth={3}>
            <AddersBlock />
            <RegistersBlock />
            <ConfigureBlock>
            <OperationValueBlock
              name="operationsValue"
              />
            <RaisedButton
              label="Пуск"
              primary={true}
              onClick={this.writeResult.bind(this)}
              />
              <RaisedButton
                label="Осоцилограф"
                primary={true}
                />
              <VariablesRow>
                <VariableBlock
                  name="a"
                  header="Регистр А"
                  />
                <VariableBlock
                  header="Регистр B"
                  name="b"
                  />
              </VariablesRow>
            </ConfigureBlock>
            <ChartRow>
              <Chart/>
            </ChartRow>
          </Paper>
        </MuiThemeProvider>

        <Footer/>
      </div>
    );
  }
}


const	mapStateToProps	=	state	=> ({
  ...state,
});


export default connect(mapStateToProps)(Stand);
