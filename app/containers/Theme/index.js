import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header/index';
import Footer from 'components/Footer/index';
import SubjectsList from 'components/SubjectsList/index';
import ThemeDescription from 'components/ThemeDescription/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { fetchTheme, beginStand, beginTest } from './actions';
import { Section } from './style.js';

class Theme extends React.Component {

  componentDidMount() {
    let subjectId = this.props.location.pathname.split('/')[2];
    let themeId = this.props.location.pathname.split('/')[4];
    this.props.dispatch(fetchTheme({subjectId, themeId}))
  }
  onBeginStand(standStatus) {
    if (this.props.theme.theme.status_for_current_user === 'started') {
      this.props.dispatch(beginStand({
        location: this.props.location.pathname,
        status: standStatus,
      }))
    } else {
      alert('Текущая тема не начата')
    }
  }
  onBeginTest(testStatus) {
    if (this.props.theme.theme.status_for_current_user === 'started') {
      this.props.dispatch(beginTest({
        location: this.props.location.pathname,
        status: testStatus,
      }))
    } else {
      alert('Текущая тема не начата')
    }
  }
  onReadTheory(documentPath) {
    this.props.dispatch(readTheory(documentPath))
  }
  render() {
    let currentTheme = {
         id: this.props.theme.theme.id,
         name: this.props.theme.theme.name,
         description: this.props.theme.theme.description,
         status: this.props.theme.theme.status_for_current_user,
    }
    let standSample = (this.props.theme.theme.stand_sample !== null) ? this.props.theme.theme.stand_sample : {
      id: '',
      name: '',
      description: '',
      status_for_current_user: ''
    } ;
    let testSample = (this.props.theme.theme.quiz_sample !== null) ? this.props.theme.theme.quiz_sample : {
      id: '',
      name: '',
    } ;
    let theory = (this.props.theme.theme.theory !== null) ? this.props.theme.theme.theory : {
      id: '',
      name: '',
      document : {url: ''},
    } ;
    return (
      <div>
        <MuiThemeProvider>
          <Header/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Section>
            <ThemeDescription
              readTheory={this.onReadTheory.bind(this)}
              beginStand={this.onBeginStand.bind(this)}
              beginTest={this.onBeginTest.bind(this)}
              currentTheme={currentTheme}
              currentStand={standSample}
              currentTest={testSample}
              currentTheory={theory}
               />
          </Section>
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
