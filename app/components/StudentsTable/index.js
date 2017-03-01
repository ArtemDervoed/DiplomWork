import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};
const tableData = [
  {
    firstName: 'John',
    lastName: 'Smith',
    status: 'Employed',
    selected: true,
  },
  {
    firstName: 'Jack',
    lastName: 'Smith',
    status: 'Employed',
    selected: true,
  },
  {
    firstName: 'Will',
    lastName: 'Smith',
    status: 'Employed',
    selected: true,
  },
  {
    firstName: 'Jason',
    lastName: 'Statham',
    status: 'Employed',
    selected: true,
  },
  {
    firstName: 'Uswer',
    lastName: 'Tupoy',
    status: 'Employed',
    selected: true,
  },
  {
    firstName: 'Jack',
    lastName: 'Smith',
    status: 'Employed',
    selected: true,
  },
  {
    firstName: 'Will',
    lastName: 'Smith',
    status: 'Employed',
    selected: true,
  },
  {
    firstName: 'Jason',
    lastName: 'Statham',
    status: 'Employed',
    selected: true,
  },
  {
    firstName: 'Uswer',
    lastName: 'Tupoy',
    status: 'Employed',
    selected: true,
  },
];

class StudentsTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: '300px',
    };
  }

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  render() {
    return(
      <MuiThemeProvider>
        <div>
          <Table
            height={this.state.height}
            fixedHeader={this.state.fixedHeader}
            fixedFooter={this.state.fixedFooter}
            selectable={this.state.selectable}
            multiSelectable={this.state.multiSelectable}
          >
            <TableBody
              displayRowCheckbox={this.state.showCheckboxes}
              deselectOnClickaway={this.state.deselectOnClickaway}
              showRowHover={this.state.showRowHover}
              stripedRows={this.state.stripedRows}
            >
              {tableData.map( (row, index) => (
                <TableRow key={index} selected={row.selected}>
                  <TableRowColumn>{index}</TableRowColumn>
                  <TableRowColumn>{row.firstName}</TableRowColumn>
                  <TableRowColumn>{row.lastName}</TableRowColumn>
                  <TableRowColumn>{row.status}</TableRowColumn>
                </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </MuiThemeProvider>
    );
  }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(StudentsTable);
