import './complaint-viz.css';
import React, {Component} from 'react';
import { Bar } from 'react-chartjs-2';
import complaintCount from '../utils/complaint-count'
import complaintListFilter from '../utils/complaint-list-filter'
import createFormattedChartData from '../utils/create-formatted-chart-data'
class ComplaintViz extends Component {

  constructor () {
    super()
    this.state = {
    }
  }

  componentDidMount() {
    console.log(complaintCount(this.props.complaints))
    console.log(complaintListFilter(this.props.complaints))
    const complaintCountObj = complaintCount(this.props.complaints);
    const formattedData = createFormattedChartData(complaintCountObj);
    console.log(createFormattedChartData(complaintCountObj))
    this.setState({chartData: {labels: formattedData.labels, datasets: [{data: formattedData.data}]} })
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
