import React from 'react';
import { connect } from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Section, Div_container, Div_content, H1 } from './style.js';

class SubjectsAccordList extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  handleNestedListToggle = (item) => {
    this.setState({
      open: item.state.open,
    });
  };

  render() {
    let studyings = this.props.studyings;
    return (
      <MuiThemeProvider>
        <List>
          <Subheader>Ваши предметы</Subheader>
          {
            studyings.map(subject => (
              <ListItem
                key={subject.id}
                primaryText={subject.subject_name}
                secondaryText={subject.status}
                primaryTogglesNestedList={true}
                nestedItems={ subject.studied_themes.map(theme => (
                  <ListItem
                    key={theme.id}
                    primaryText={theme.theme_name}
                    secondaryText={theme.status}
                  />
                ))
              }
              />
            ))
          }
        </List>
      </MuiThemeProvider>
    );
  }
}
const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(SubjectsAccordList);
