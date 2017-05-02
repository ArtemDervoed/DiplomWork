import React from 'react';
import {connect}	from	'react-redux';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import { Section, Div_container, Div_content, H1, Span } from './style.js';

const style = {
  height: 40,
  marginTop:5,
  marginRight:10,
  width: 60,
};

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
    console.log(this.props.subjects);
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
                  leftIcon={<ContentInbox />}
                  rightIconButton={
                    <Span>
                    <FlatButton icon = {
                      <div id={item.id} >Обзор</div>
                      }
                      onClick={this.props.onExplore.bind(this)}
                      secondary={ false }
                      style={style}
                      hoverColor="rgba(0,0,0,.3)"
                      backgroundColor="rgba(0,0,0,.1)"/>
                      <FlatButton icon = {
                        <div id={item.id}>Начать</div>
                        }
                        onClick={this.props.onDiscover.bind(this)}
                        secondary={ true }
                        style={style}
                        hoverColor="rgba(0,0,0,.3)"
                        backgroundColor="rgba(0,0,0,.1)"/>
                    </Span>
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
