import React from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header/index';
import Footer from 'components/Footer/index';
import SubjectsList from 'components/SubjectsList/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Subjects extends React.Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Header/>
        </MuiThemeProvider>
        <MuiThemeProvider>
        <SubjectsList/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Subjects);
