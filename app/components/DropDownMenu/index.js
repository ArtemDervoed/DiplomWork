import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class DropDownMenuList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 0};
  }

  handleChange = (event, index, value) => {
    this.setState({value});
    this.props.injectValue(value);
  }
  render() {
    return (
      <MuiThemeProvider>
        <SelectField floatingLabelText={this.props.header} value={this.state.value} onChange={this.handleChange}>
        {
          this.props.data.map((item) => {
            return <MenuItem key={item.id} primaryText={item.name || item.nomination} value={item.id}  />
          })
        }
        </SelectField>
      </MuiThemeProvider>
    );
  }
}
const	mapStateToProps	=	state	=> ({
  state: this.state,
});

export default connect(mapStateToProps)(DropDownMenuList);
