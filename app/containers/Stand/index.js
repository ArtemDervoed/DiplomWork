import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import Header from 'components/Header/index';
import Footer from 'components/Footer/index';
import AddersBlock from 'components/AddersBlock/index';
import RegistersBlock from 'components/RegistersBlock/index';
import VariableBlock from 'components/VariableBlock/index';
import OperationValueBlock from 'components/OperationValueBlock/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import {
  AdderBlock,
  VariablesRow,
  Div,
  OperationsBlock,
  ConfigureBlock,
} from './style';
const style = {
  minHeight: 500,
  width: '99%',
  margin: '1% auto',
  backgroundColor: 'white'
};

class Stand extends React.Component {
  calculate() {
    let a = '';
    let variableA = this.props.stand.variables.a;
    for(var key in variableA) {
        if(variableA.hasOwnProperty(key)) {
            a+= +variableA[key];
        }
    }
    let b = '';
    let variableB = this.props.stand.variables.b;
    for(var key in variableB) {
        if(variableB.hasOwnProperty(key)) {
            b+= +variableB[key];
        }
    }
    let result = parseInt(b,2) + parseInt(a,2);
    let doubleResult = result.toString(2)
    alert(doubleResult);

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
            <RaisedButton
              label="Пуск"
              primary={true}
              onClick={this.calculate.bind(this)}
              />
              <VariablesRow>
                <VariableBlock
                  name="a"
                  header="Регистр А"
                  state ={this.props.stand.variables.a}
                  />
                <VariableBlock
                  header="Регистр B"
                  name="b"
                  state ={this.props.stand.variables.b}
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
