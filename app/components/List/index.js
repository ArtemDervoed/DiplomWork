import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { H3 } from './style.js';
import Subheader from 'material-ui/Subheader';
const style = {
  marginLeft: 10,
}
class DataList extends React.Component {
  render() {
    return(
      <MuiThemeProvider>
        <List>
          <Subheader><H3>{this.props.header}</H3></Subheader> {
          this.props.data.map((subject) => {
            return <ListItem onClick={this.props.onItemClick} key={subject.key} primaryText={subject.primaryText} leftIcon={subject.leftIcon}  />
          })
        }
        </List>
      </MuiThemeProvider>
    );
  }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(DataList);
