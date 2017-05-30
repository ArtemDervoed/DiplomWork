import React from 'react';
import {connect}	from	'react-redux';
import {List, ListItem} from 'material-ui/List';
import SelectField from 'material-ui/SelectField';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import { Section, Div_container, Div_content, H1, Span } from './style.js';
import CheckBox from 'components/CheckBox/index.js';
import ListItemText from 'components/ListItemText/index.js';
import ThemeButton from 'components/ThemeButton/index.js';

export default class TeacherSubjectsList extends React.Component {
  onThemeClick(event) {
    this.props.onSubjectClick(event.subjectId, event.themeId)
  }
  render() {
    let list = (Array.isArray(this.props.subjects)) ? this.props.subjects : [];
    return (
      <Section>
        <List>
          <Subheader style={{fontSize:24, fontWeight:'bold'}}>{this.props.header}</Subheader>
          {
            list.map((item) => {
              return (
                <ListItem
                  primaryText={item.name}
                  secondaryText={item.description}
                  key={item.id}
                  nestedItems={
                    item.groups.map(group => {
                      return (
                          <ListItem
                            style={{paddingRight:100}}
                            primaryText={group.name}
                            secondaryText={group.specialty}
                            key={group.id}
                            rightIcon={
                                <ThemeButton
                                subjectId={item.id}
                                themeId={group.id}
                                onThemeClick={this.onThemeClick.bind(this)}
                                />
                              }
                          />
                      )
                    })
                  }
                />
              )
            })
          }
        </List>
      </Section>
    );
  }
}
// const	mapStateToProps	=	(state, ownProps)	=> {
//   return {...state};
// };
//
// export default connect(mapStateToProps)(SubjectsList);
