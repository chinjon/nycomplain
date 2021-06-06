import './complaint-viz.css';
import React, {Component} from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';

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
      <div className="complaint-viz">
        <Bar data={this.setVizDataObj(this.props.complaintData, '# of complaints')}></Bar>
        <Bar data={this.setVizDataObj(this.props.statusData, 'by status')}></Bar>
        <Doughnut data={this.setVizDataObj(this.props.boroughData, 'by borough')}></Doughnut>
      </div>
    );
  }
}

export default ComplaintViz;
