import React from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import {Line} from 'react-chartjs-2';
import { Div } from './style.js';

class Chart extends React.Component {

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});

  };

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Осацилограф" onTouchTap={this.handleOpen} />
        <Dialog
          title="Осацилограф"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <Div>
          <Line
            data={ {
              labels: [0,1,2,3,4,5,6,7,8,9,10],
              datasets: [{
              label: "RgC",
              type: 'line',
              fill: false,
              lineTension: 0,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: this.props.stand.chart,
              spanGaps: false,
              steppedLine: true
            },]}}
            options={{
              responsive: true,
              tooltips: {
                mode: 'label'
              },
              elements: {
                line: {
                  fill: false
                }
              },
              scales: {
                xAxes: [
                  {
                    display: true,
                    gridLines: {
                      display: true
                    },
                    labels: {
                      show: false
                    }
                  }
                ],
                yAxes: [
                  {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-2',
                    gridLines: {
                      display: true
                    },
                    labels: {
                      show: true
                    }
                  }
                ]
              }
            }}
          />
        </Div>
        </Dialog>
      </div>
    );
  }
}
const	mapStateToProps	=	state	=> ({
  ...state,
});


export default connect(mapStateToProps)(Chart);
