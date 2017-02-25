import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import { Section, Div_container, Div_content, H1 } from './style.js';

export default class SubjectsList extends React.Component {

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
    return (
      <Section>
        <List>
          <Subheader>Ваши предметы</Subheader>
          <ListItem
            primaryText="Организация ЭВМ"
            secondaryText="Jan 17, 2014"
            leftIcon={<ContentInbox />}
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                key={1}
                primaryText="Лабораторная работа №"
                leftIcon={<ActionGrade />}
              />,
              <ListItem
                key={2}
                primaryText="Лабораторная работа №"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={3}
                primaryText="Лабораторная работа №"
                leftIcon={<ContentInbox />}
                open={this.state.open}
                onNestedListToggle={this.handleNestedListToggle}
              />,
            ]}
          />
          <ListItem
            primaryText="Операционные системы"
            secondaryText="Jan 17, 2014"
            leftIcon={<ContentInbox />}
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                key={1}
                primaryText="Лабораторная работа №"
                leftIcon={<ActionGrade />}
              />,
              <ListItem
                key={2}
                primaryText="Лабораторная работа №"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={3}
                primaryText="Лабораторная работа №"
                leftIcon={<ContentInbox />}
                open={this.state.open}
                onNestedListToggle={this.handleNestedListToggle}
              />,
            ]}
          />
          <ListItem
            primaryText="Сети и телекоммуникации"
            secondaryText="Jan 17, 2014"
            leftIcon={<ContentInbox />}
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                key={1}
                primaryText="Лабораторная работа №"
                leftIcon={<ActionGrade />}
              />,
              <ListItem
                key={2}
                primaryText="Лабораторная работа №"
                leftIcon={<ContentSend />}
              />,
              <ListItem
                key={3}
                primaryText="Лабораторная работа №"
                leftIcon={<ContentInbox />}
                open={this.state.open}
                onNestedListToggle={this.handleNestedListToggle}
              />,
            ]}
          />
        </List>
      </Section>
    );
  }
}
