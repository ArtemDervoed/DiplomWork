import React from 'react';
import {Line} from 'react-chartjs-2';
import { Div } from './style.js';

const data = {
  labels: [0,1,2,3,4,5,6,7,8,9,10],
  datasets: [{
    label: "My First dataset",
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
    data: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,],
    spanGaps: false,
    steppedLine: true
    },]
};

const options = {
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
};

export default React.createClass({
  displayName: 'Chart',

  render() {
    return (
      <Div>
        <Line
          data={data}
          options={options}
        />
      </Div>

    );
  }
});
