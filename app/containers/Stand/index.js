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
import { changeRegisterState } from 'containers/Stand/actions';
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
  writeResult() {
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
              onClick={this.writeResult.bind(this)}
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
