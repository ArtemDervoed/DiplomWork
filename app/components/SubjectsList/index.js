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
import ThemeButton from 'components/ThemeButton/index.js';
import CheckBox from 'components/CheckBox/index.js';
import ListItemText from 'components/ListItemText/index.js';
export default class SubjectsList extends React.Component {
  state = {
    open: false,
  };
  onThemeClick(event) {
    this.props.exploreTheme(event.subjectId, event.themeId)
  }
  onBeginTheme(subjectId, themeId) {
    this.props.beginTheme(subjectId, themeId)
  }
  onBeginSubject(subjectId) {
    this.props.beginSubject(subjectId)
  }
  render() {
    let list = (Array.isArray(this.props.subjects)) ? this.props.subjects : [];
    return (
      <Section>
        <List>
          <Subheader style={{fontSize:36, fontWeight:'bold'}}>{this.props.header}</Subheader>
          {
            list.map((item) => {
              return (
                <ListItem
                  primaryText={
                    <ListItemText
                      hasTeacher={true}
                      name={item.name}
                      description={item.description}
                      status={item.status_for_current_user}
                      lastName={item.teacher.last_name}
                      firstName={item.teacher.first_name}
                    />
                  }

                  key={item.id}
                  leftIcon={
                    <CheckBox
                      subject={true}
                      theme={false}
                      status={item.status_for_current_user}
                      style={{width:25, position:'relative', top:'20px'}}
                      subjectId={item.id}
                      disabled={(item.status_for_current_user === 'finished') ? true : false}
                      defaultChecked={(item.status_for_current_user === 'not_started') ? false : true}
                      onBeginSubject={this.onBeginSubject.bind(this)}
                    />}
                  nestedItems={
                    item.themes.map(theme => {
                      return (
                        <ListItem
                          primaryText={
                            <ListItemText
                            style={{position:'relative',bottom:40}}
                              hasTeacher={false}
                              name={theme.name}
                              description={theme.description}
                              status={theme.status_for_current_user}
                              lastName=''
                              firstName=''
                            />}
                          key={theme.id}
                          leftIcon={
                            <CheckBox
                              subject={false}
                              theme={true}
                              style={{width:25}}
                              item={item}
                              subjectId={item.id}
                              themeId={theme.id}
                              disabled={(theme.status_for_current_user === 'finished') ? true : false}
                              defaultChecked={(theme.status_for_current_user === 'not_started') ? false : true}
                              onBeginTheme={this.onBeginTheme.bind(this)}
                            />
                            }
                          rightIcon={<ThemeButton
                            subjectId={item.id}
                            themeId={theme.id}
                            onThemeClick={this.onThemeClick.bind(this)}
                            />}
                        />
                      );
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
