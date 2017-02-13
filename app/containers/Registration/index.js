/*
 *
 * Registration
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header/index';

export class Registration extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header/>
        <form method="POST" action="https://serene-hamlet-19929.herokuapp.com/api/users" >
          <input type="text" name="name" placeholder="Имя" />
          <input type="text" name="email" placeholder="Мыло" />
          <input type="password" name="password" placeholder="password" />
          <input type="password" name="password_confirmation" placeholder="password again" />
          <input type="submit" value="Отправить"/>
        </form>
      </div>
    );
  }
}

Registration.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const	mapStateToProps	=	state	=> ({
  ...state,
});
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
