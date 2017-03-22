import React from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header/index';
import Footer from 'components/Footer/index';
import AddersBlock from 'components/AddersBlock/index';
import RegistersBlock from 'components/RegistersBlock/index';
import VariableBlockA from 'components/VariableBlockA/index';
import VariableBlockB from 'components/VariableBlockB/index';
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
  toggleRegisterBVar0,
  toggleRegisterBVar1,
  toggleRegisterBVar2,
  toggleRegisterBVar3,
  toggleRegisterBVar4,
  toggleRegisterBVar5,
  toggleRegisterBVar6,
  toggleRegisterBVar7,
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
  toggleRegisterBVariable0(){
    this.props.dispatch(
      toggleRegisterBVar0(!this.props.registerB.var0)
    );
  }
  toggleRegisterBVariable1(){
    this.props.dispatch(
      toggleRegisterBVar1(!this.props.registerB.var1)
    );
  }
  toggleRegisterBVariable2(){
    this.props.dispatch(
      toggleRegisterBVar2(!this.props.registerB.var2)
    );
  }
  toggleRegisterBVariable3(){
    this.props.dispatch(
      toggleRegisterBVar3(!this.props.registerB.var3)
    );
  }
  toggleRegisterBVariable4(){
    this.props.dispatch(
      toggleRegisterBVar4(!this.props.registerB.var4)
    );
  }
  toggleRegisterBVariable5(){
    this.props.dispatch(
      toggleRegisterBVar5(!this.props.registerB.var5)
    );
  }
  toggleRegisterBVariable6(){
    this.props.dispatch(
      toggleRegisterBVar6(!this.props.registerB.var6)
    );
  }
  toggleRegisterBVariable7(){
    this.props.dispatch(
      toggleRegisterBVar7(!this.props.registerB.var7)
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
                <VariableBlockA
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
                <VariableBlockB
                  header="Регистр B"
                  state={this.props.registerB}
                  toggleRegisterBVariable0={this.toggleRegisterBVariable0.bind(this)}
                  toggleRegisterBVariable1={this.toggleRegisterBVariable1.bind(this)}
                  toggleRegisterBVariable2={this.toggleRegisterBVariable2.bind(this)}
                  toggleRegisterBVariable3={this.toggleRegisterBVariable3.bind(this)}
                  toggleRegisterBVariable4={this.toggleRegisterBVariable4.bind(this)}
                  toggleRegisterBVariable5={this.toggleRegisterBVariable5.bind(this)}
                  toggleRegisterBVariable6={this.toggleRegisterBVariable6.bind(this)}
                  toggleRegisterBVariable7={this.toggleRegisterBVariable7.bind(this)}
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
