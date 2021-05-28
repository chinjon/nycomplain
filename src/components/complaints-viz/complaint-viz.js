import './complaint-viz.css';
import React, {Component} from 'react';
import { Bar, PolarArea } from 'react-chartjs-2';
import countPropsByKey from '../utils/count-props-by-key'
import createFormattedChartData from '../utils/create-formatted-chart-data'
import generateVizColors from './utils/generate-viz-colors';
class ComplaintViz extends Component {

  constructor () {
    super()
    this.state = {
    }
  }

  componentDidMount() {
    const complaintCountObj = countPropsByKey(this.props.complaints, 'complaint_type');
    const complaintFormattedData = createFormattedChartData(complaintCountObj);
    const complaintColors = generateVizColors(complaintFormattedData.data);
    this.setState({complaintData: {labels: complaintFormattedData.labels, datasets: [{label: '# of Complaints', data: complaintFormattedData.data, backgroundColor: complaintColors}]} })

    const boroughCountObj = countPropsByKey(this.props.complaints, 'borough');
    const boroughFormattedData = createFormattedChartData(boroughCountObj);
    const boroughColors = generateVizColors(boroughFormattedData.data);
    this.setState({boroughData: {labels: boroughFormattedData.labels, datasets: [{label: 'by Borough', data: boroughFormattedData.data, backgroundColor: boroughColors}]}});

    const statusCountObj = countPropsByKey(this.props.complaints, 'status');
    const statusFormattedData = createFormattedChartData(statusCountObj)
    const statusColors = generateVizColors(statusFormattedData.data);
    this.setState({statusData: {labels: statusFormattedData.labels, datasets: [{label: 'by Status', data: statusFormattedData.data, backgroundColor: statusColors}]}})
  }

  render() {
    return (
      <div className="complaint-viz">
        <Bar data={this.state.complaintData}></Bar>
        <Bar data={this.state.statusData}></Bar>
        <PolarArea data={this.state.boroughData}></PolarArea>
      </div>
    );
  }
}

export default ComplaintViz;
