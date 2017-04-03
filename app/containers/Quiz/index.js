import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header/index';
import Footer from 'components/Footer/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Section, H1 } from './style.js';
import RaisedButton from 'material-ui/RaisedButton';
import TextFieldInput from 'components/TextField/index.js'
import VerticalLinearStepper from 'components/VerticalLinearStepper/index.js';
export class Quiz extends React.Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Header/>
        </MuiThemeProvider>
        <Section>

        </Section>
        <Footer/>
      </div>
    );
  }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});



export default connect(mapStateToProps)(Quiz);
