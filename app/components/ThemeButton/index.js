import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { connect } from 'react-redux';

const style = {
  marginRight: 20,
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
      <span>
        <FloatingActionButton mini={true} secondary={false} style={style}>
          <ContentAdd onClick={this.onClick.bind(this)}/>
        </FloatingActionButton>
      </span>
    )
  }
};

const	mapStateToProps	=	state	=> ({
  ...state,
});
export default connect(mapStateToProps)(ThemeButton);
