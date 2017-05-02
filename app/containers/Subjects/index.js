import React from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header/index';
import Footer from 'components/Footer/index';
import SubjectsList from 'components/SubjectsList/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { fetchSubjects, fetchSubjectThemes } from './actions';

class Subjects extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchSubjects());
  }
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
          subjects={this.props.subjects.subjects}
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

export default connect(mapStateToProps, mapDispatchToProps)(Subjects);
