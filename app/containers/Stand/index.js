import React from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header/index';
import Footer from 'components/Footer/index';
import AddersBlock from 'components/AddersBlock/index';
import RegistersBlock from 'components/RegistersBlock/index';
import VariableBlock from 'components/VariableBlock/index';
import OperationValueBlock from 'components/OperationValueBlock/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import {
  toggleRegisterAVar0,
  toggleRegisterAVar1,
  toggleRegisterAVar2,
  toggleRegisterAVar3,
  toggleRegisterAVar4,
  toggleRegisterAVar5,
  toggleRegisterAVar6,
  toggleRegisterAVar7,
} from './actions.js';
import {
  AdderBlock,
  VariablesRow,
  Div,
  VariablesBlock,
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
  toggleRegisterAVariable0(){
    this.props.dispatch(
      toggleRegisterAVar0(!this.props.registerA.var0)
    );
  }
  toggleRegisterAVariable1(){
    this.props.dispatch(
      toggleRegisterAVar1(!this.props.registerA.var1)
    );
  }
  toggleRegisterAVariable2(){
    this.props.dispatch(
      toggleRegisterAVar2(!this.props.registerA.var2)
    );
  }
  toggleRegisterAVariable3(){
    this.props.dispatch(
      toggleRegisterAVar3(!this.props.registerA.var3)
    );
  }
  toggleRegisterAVariable4(){
    this.props.dispatch(
      toggleRegisterAVar4(!this.props.registerA.var4)
    );
  }
  toggleRegisterAVariable5(){
    this.props.dispatch(
      toggleRegisterAVar5(!this.props.registerA.var5)
    );
  }
  toggleRegisterAVariable6(){
    this.props.dispatch(
      toggleRegisterAVar6(!this.props.registerA.var6)
    );
  }
  toggleRegisterAVariable7(){
    this.props.dispatch(
      toggleRegisterAVar7(!this.props.registerA.var7)
    );
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
              <VariablesRow>
                <VariableBlock
                  header="Регистр А"
                  state={this.props.registerA}
                  toggleRegisterAVariable0={this.toggleRegisterAVariable0.bind(this)}
                  toggleRegisterAVariable1={this.toggleRegisterAVariable1.bind(this)}
                  toggleRegisterAVariable2={this.toggleRegisterAVariable2.bind(this)}
                  toggleRegisterAVariable3={this.toggleRegisterAVariable3.bind(this)}
                  toggleRegisterAVariable4={this.toggleRegisterAVariable4.bind(this)}
                  toggleRegisterAVariable5={this.toggleRegisterAVariable5.bind(this)}
                  toggleRegisterAVariable6={this.toggleRegisterAVariable6.bind(this)}
                  toggleRegisterAVariable7={this.toggleRegisterAVariable7.bind(this)}
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
