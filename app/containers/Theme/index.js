import React from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header/index';
import Footer from 'components/Footer/index';
import SubjectsList from 'components/SubjectsList/index';
import ThemeDescription from 'components/ThemeDescription/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { fetchTheme, beginStand } from './actions';
import { Section } from './style.js';

class Theme extends React.Component {
  componentDidMount() {
    let subjectId = this.props.location.pathname.split('/')[2];
    let themeId = this.props.location.pathname.split('/')[4];
    this.props.dispatch(fetchTheme({subjectId, themeId}))
  }
  onBeginStand(event) {
    this.props.dispatch(beginStand({location: event}))
  }
  onExplore(event) {

  }
  render() {
    let currentTheme = this.props.theme.theme;
    return (
      <div>
        <MuiThemeProvider>
          <Header/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Section>
            <ThemeDescription beginStand={this.onBeginStand.bind(this)} data={currentTheme} />
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
