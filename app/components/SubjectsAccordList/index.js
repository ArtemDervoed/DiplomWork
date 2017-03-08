import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Section, Div_container, Div_content, H1 } from './style.js';

export default class SubjectsAccordList extends React.Component {

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
      <MuiThemeProvider>
        <List>
          <Subheader>Ваши предметы</Subheader>
          <ListItem
            primaryText="Организация ЭВМ"
            secondaryText="Jan 17, 2014"
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                key={1}
                primaryText="Тема №"
              />,
              <ListItem
                key={2}
                primaryText="Тема №"
              />,
              <ListItem
                key={3}
                primaryText="Тема №"
                open={this.state.open}
                onNestedListToggle={this.handleNestedListToggle}
              />,
            ]}
          />
          <ListItem
            primaryText="Операционные системы"
            secondaryText="Jan 17, 2014"
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                key={1}
                primaryText="Тема №"
              />,
              <ListItem
                key={2}
                primaryText="Тема №"
              />,
              <ListItem
                key={3}
                primaryText="Тема №"
                open={this.state.open}
                onNestedListToggle={this.handleNestedListToggle}
              />,
            ]}
          />
          <ListItem
            primaryText="Сети и телекоммуникации"
            secondaryText="Jan 17, 2014"
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                key={1}
                primaryText="Тема №"
              />,
              <ListItem
                key={2}
                primaryText="Тема №"
              />,
              <ListItem
                key={3}
                primaryText="Тема №"
                open={this.state.open}
                onNestedListToggle={this.handleNestedListToggle}
              />,
            ]}
          />
        </List>
      </MuiThemeProvider>
    );
  }
}
