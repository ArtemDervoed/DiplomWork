/*
 *
 * Login
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Input from 'components/Input/index.js';
const style = {
  margin: 12,
};
export class UserInfo extends React.Component {
  render() {
    console.log(this);
    return (
      <div>
        <MuiThemeProvider>
          <Input header={this.props.header} data={this.props.data} />
        </MuiThemeProvider>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
