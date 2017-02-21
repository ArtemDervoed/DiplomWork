import React, {Component} from 'react';
import {connect}	from	'react-redux';
import { Div } from './style.js';


class Footer extends Component {
  render() {
    return (
      <Div>
        <div>TsTU FIT IVT 2017</div>
        <div><span>Created by</span><span>React</span></div>
        <div><span>Created by</span><span>Redux</span></div>
        <div><span>Created by</span><span>Rails</span></div>
      </Div>
    );
  }
}
const	mapStateToProps	=	(state, ownProps)	=> {
  return {...state};
};

export default connect(mapStateToProps)(Footer);
