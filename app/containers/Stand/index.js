import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header/index';
import Footer from 'components/Footer/index';
import Adder from 'components/Adder/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import { AdderBlock, Subscrible, Div } from './style';
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
            <AdderBlock>
              <Div>
                <Adder />
                <Adder />
                <Adder />
                <Adder />
                <Adder />
                <Adder />
                <Adder />
                <Adder />
              </Div>
              <Subscrible>{'Аппаратное управление'}</Subscrible>
            </AdderBlock>

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

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Stand);
