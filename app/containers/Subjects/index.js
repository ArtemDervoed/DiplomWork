import React from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header/index';
import Footer from 'components/Footer/index';
import SubjectsList from 'components/SubjectsList/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { fetchSubjects, beginTheme, exploreTheme } from './actions';

class Subjects extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchSubjects());
  }
  onBeginTheme(subjectId, themeId) {
    this.props.dispatch(beginTheme({
      subjectId,
      themeId
    }));
  }
  onExploreTheme(subjectId, themeId) {
    this.props.dispatch(exploreTheme({
      subjectId,
      themeId
    }));
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Header/>
        </MuiThemeProvider>
        <MuiThemeProvider>
        <SubjectsList
          header="Список предметов"
          subjects={this.props.subjects.subjects}
          beginTheme={this.onBeginTheme.bind(this)}
          exploreTheme={this.onExploreTheme.bind(this)}
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
