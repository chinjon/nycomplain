import './ComplaintViz.css';
import React, {Component} from 'react';
import { Bar, Doughnut, defaults } from 'react-chartjs-2';

defaults.font.family = 'Swansea';
class ComplaintViz extends Component {
  setVizDataObj = (data, legendText) => {
    return {
      labels: data.dataset.labels, 
      datasets: [{
        label: legendText,
        data: data.dataset.data,
        backgroundColor: data.colors
      }]
    }
  }

  render() {
    return (
      <div className="complaint-viz columns">
        <div className="column is-full">
          <Bar className="complaint-viz-item complaint-types" data={this.setVizDataObj(this.props.complaintData, '# of complaints')}></Bar>
        </div>
        <div className="column is-full">
          <Bar className="complaint-viz-item" data={this.setVizDataObj(this.props.statusData, 'by status')}></Bar>
        </div>
        <div className="column">
        <Doughnut className="complaint-viz-item" data={this.setVizDataObj(this.props.boroughData, 'by borough')}></Doughnut>
        </div>
      </div>
    );
  }
}

export default ComplaintViz;
