import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';

const style = {
  position:'relative',
  left:'100%',
  top:30

};
class ThemeButton extends React.Component {
  onClick(event) {
    this.props.onThemeClick(this.props);
  }
  render() {
    return (
      <span style={style}>
          <FlatButton primary={true} label="Подробнее" onClick={this.onClick.bind(this)}/>
      </span>
    )
  }
};

const	mapStateToProps	=	state	=> ({
  ...state,
});
export default connect(mapStateToProps)(ThemeButton);
