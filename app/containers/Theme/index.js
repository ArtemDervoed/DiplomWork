import React, {PropTypes} from 'react';
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
  onBeginStand() {
    this.props.dispatch(beginStand({location: this.props.location.pathname}))
  }
  onExplore(event) {

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
    } ;

    return (
      <div>
        <MuiThemeProvider>
          <Header/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Section>
            <ThemeDescription
              beginStand={this.onBeginStand.bind(this)}
              currentTheme={currentTheme}
              stand={standSample}
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
