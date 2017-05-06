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
          <Subheader>Ваши предметы</Subheader>
          {
            list.map(item => {
              return (
                <ListItem
                  primaryText={item.name}
                  secondaryText={item.description}
                  key={item.id}
                  leftIcon={
                    <CheckBox
                      subject={true}
                      theme={false}
                      status={item.status_for_current_user}
                      style={{width:25}}
                      subjectId={item.id}
                      disabled={(item.status_for_current_user === 'finished') ? true : false}
                      defaultChecked={(item.status_for_current_user === 'not_started') ? false : true}
                      onBeginSubject={this.onBeginSubject.bind(this)}
                    />}
                  nestedItems={
                    item.themes.map(theme => {
                      return (
                        <ListItem
                          primaryText={<div style={{position:'relative',bottom:40}}>{theme.name}</div>}
                          secondaryText={
                            <div style={{position:'relative',bottom:40}}>{theme.description}</div>
                          }
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
