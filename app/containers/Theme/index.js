import React from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header/index';
import Footer from 'components/Footer/index';
import SubjectsList from 'components/SubjectsList/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import {  } from './actions';

class Theme extends React.Component {
  onDiscover(event) {

  }
  onExplore(event) {

    this.props.dispatch(fetchSubjectThemes(event.target.id))
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Header/>
        </MuiThemeProvider>
        <MuiThemeProvider>
        <SubjectsList
          subjects={this.props.subjects.themes}
          onDiscover={this.onDiscover.bind(this)}
          onExplore={this.onExplore.bind(this)}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(Theme);
