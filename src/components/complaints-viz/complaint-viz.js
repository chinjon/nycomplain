import './complaint-viz.css';
import React, {Component} from 'react';
import { Bar } from 'react-chartjs-2';
import complaintCount from '../utils/complaint-count'
import createFormattedChartData from '../utils/create-formatted-chart-data'
import generateVizColors from './utils/generate-viz-colors';
class ComplaintViz extends Component {

  constructor () {
    super()
    this.state = {
    }
  }

  componentDidMount() {
    const complaintCountObj = complaintCount(this.props.complaints);
    const formattedData = createFormattedChartData(complaintCountObj);
    const colors = generateVizColors(formattedData.data);
    this.setState({chartData: {labels: formattedData.labels, datasets: [{label: '# of Complaints', data: formattedData.data, backgroundColor: colors}]} })
  }

  render() {
    return (
      <div className="complaint-viz">
        {/* {
          this.props.complaints.map((complaint) => <p key={complaint.unique_key}>{complaint.complaint_type}</p>)
        } */}
        <Bar data={this.state.chartData}></Bar>
      </div>
    );
  }
}

export default ComplaintViz;
