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
import ControlPanel from 'components/ControlPanel/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';
import DialogWindow from 'components/DialogWindow/index.js';
import {
  changeRegisterState,
  changeAdderState,
  setAluAddress,
  changeChart,
  setAluWord,
  writeMode,
  passStand,
  workMode,
  setWord,
  getTask,
} from 'containers/Stand/actions';
import { OPERATIONS, PROGRAMM_OPERATIONS } from './constants';
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
  backgroundColor: 'white',
  maxWidth: 1500,

};

class Stand extends React.Component {
  componentWillMount() {
    this.props.dispatch(getTask({location: this.props.location.pathname}));
  }
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
  chekResult(programm) {
    const registersterA = this.getOutsRgister(this.props.stand.registers.a);
    const registersterB = this.getOutsRgister(this.props.stand.registers.b);
    const registersterC = this.getOutsRgister(this.props.stand.registers.c);
    let location = this.props.location.pathname.split('/')
    if (PROGRAMM_OPERATIONS.AND === programm) {
      let resultAnd = '';
      for ( let i = 0; i < 8; i++) {
        resultAnd+= (registersterA.split('').reverse().join('')[i] & registersterB.split('').reverse().join('')[i] === 1) ? '1': '0';
      }
      if (resultAnd === registersterC) {
        alert("Стенд собран правильно");
        this.props.dispatch(passStand({location:'/'+location[1]+'/'+location[2]+'/'+location[3]+'/'+location[4] + '/pass_stand'}));
      }
    }
    if (PROGRAMM_OPERATIONS.SUMM === programm) {
      if (parseInt(registersterA.split('').reverse().join(''),2) + parseInt(registersterB.split('').reverse().join(''),2) === parseInt(registersterC.split('').reverse().join(''),2)) {
        alert("Стенд собран правильно");
        this.props.dispatch(passStand({location:'/'+location[1]+'/'+location[2]+'/'+location[3]+'/'+location[4] + '/pass_stand'}));
      }
    }

  }
  setAluState() {
    this.props.dispatch(setAluWord({address:'0000', word:this.props.stand.programm['0000']}));
    this.props.dispatch(setAluWord({address:'0001', word:this.props.stand.programm['0001']}));
    this.props.dispatch(setAluWord({address:'0010', word:this.props.stand.programm['0010']}));
    this.props.dispatch(setAluAddress({address:'0010', word:this.props.stand.programm['0010']}));
  }
  writeResult() {
    let result = '';
    const operation = this.getOperationsCode();
    if(!this.props.stand.hard)  {
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
        const registersterA = this.getOutsRgister(this.props.stand.registers.a);
        const registersterB = this.getOutsRgister(this.props.stand.registers.b);
        if ((addersInputA !== registersterA) || (addersInputB !== registersterB)) {
          alert('Значения на выходах регистров не соответсвуют входам сумматоров');
        }
        if ((addersInputA === registersterA) && (addersInputB === registersterB)) {
          let location = this.props.location.pathname.split('/')
          this.props.dispatch(passStand({location:'/'+location[1]+'/'+location[2]+'/'+location[3]+'/'+location[4] + '/pass_stand'}));
          alert("Стенд собран правильно");
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
    }
    if(this.props.stand.write === true && this.props.stand.hard === true) {
      let word = '';
      const variableB = this.props.stand.registers.b.input;
      for(var key in variableB) {
        if(variableB.hasOwnProperty(key)) {
           word+= +variableB[key];
        }
      }
      const address = this.props.stand.operationsValue;
      let addressValue = ''
      for(var key in address) {
        if(address.hasOwnProperty(key)) {
           addressValue+= +address[key];
        }
      }
      if (parseInt(addressValue.split('').reverse().join(''), 2) < 6) {
        this.props.dispatch(setWord({address:addressValue.split('').reverse().join(''), word:word}))
      }
    }
    if(this.props.stand.write === false && this.props.stand.hard === true) {
      let programm = ''
      const alu  = this.props.stand.programm
      for(var key in alu) {
        if(alu.hasOwnProperty(key)) {
          programm+= alu[key];
        }
      }
      if (PROGRAMM_OPERATIONS.SUMM === programm) {
        let resultOperationInt = parseInt(registersterA.split('').reverse().join(''),2) + parseInt(registersterB.split('').reverse().join(''),2);
        for (var i = 0; i < 8; i++) {
          this.props.dispatch(changeRegisterState({
            name:'c',
            pinType: 'input',
            pin: 'd_' + +i,
            value:(resultOperationInt.toString(2).split('').reverse().join('')[i] == 1) ? true:false,
            }
          ));
        }
      }
      if (PROGRAMM_OPERATIONS.AND === programm) {
        let resultOperationInt = parseInt(registersterA.split('').reverse().join(''),2) + parseInt(registersterB.split('').reverse().join(''),2);
        for (var i = 0; i < 8; i++) {
          this.props.dispatch(changeRegisterState({
            name:'c',
            pinType: 'input',
            pin: 'd_' + +i,
            value:((registersterA[i] & registersterB[i]) === 1)? true:false,
            }
          ));
        }
      }
      this.setAluState();
      this.chekResult(programm);
    }
  }
  onWriteModeToggle(event, isInputChecked) {
    this.props.dispatch(writeMode(isInputChecked));
  }
  onModeToggle(event, isInputChecked) {
    this.props.dispatch(workMode(isInputChecked));

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
            <div style={{
              display:'flex',
              flexDirection:'column',
              alignSelf:'center',
              margin: 'auto 30px',
              width: 270,
              alignItems: 'center',

            }}>
              <Toggle
                label={'Микропрограммный режим'}
                programm='false'
                onToggle={this.onModeToggle.bind(this)}
              />
              <Divider style={{
                margin: '10px',

              }}/>
              <Toggle
                label={'Запись'}
                mode='write'
                onToggle={this.onWriteModeToggle.bind(this)}
              />
              <RaisedButton
                label="Пуск"
                secondary={true}
                onClick={this.writeResult.bind(this)}
                style={{width:138, marginBottom:20}}
              />
              <DialogWindow task={this.props.stand.task.task}/>
              <Chart signal={this.props.stand.chart}/>
            </div>
            <ControlPanel/>
            <OperationValueBlock
              name="operationsValue"
              />
              <VariablesRow>
                <VariableBlock
                  header="Регистр B"
                  name="b"
                  />
                <VariableBlock
                  name="a"
                  header="Регистр А"
                  />
                </VariablesRow>

            </ConfigureBlock>
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
