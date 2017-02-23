import React from 'react';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { H3 } from './style.js';
import Subheader from 'material-ui/Subheader';

class SideList extends React.Component {
  constructor() {
    super();
    this.state = {open: false};
  }

  render() {
    return(
      <MuiThemeProvider>
        <Drawer
          openSecondary={true}
          open={this.props.state}>
          <AppBar
            showMenuIconButton={false}
            title="Студенты:"
            iconElementRight={<IconButton onTouchTap={this.props.close}><NavigationClose /></IconButton>}
            />
          <MenuItem>Студент № 1</MenuItem>
          <MenuItem>Студент № 2</MenuItem>
          <MenuItem>Студент № 3</MenuItem>
          <MenuItem>Студент № 4</MenuItem>
        </Drawer>
      </MuiThemeProvider>
    );
  }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(SideList);
