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
                  />
                <VariableBlock
                  header="Регистр B"
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
