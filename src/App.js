import './App.css';
import React, {Component} from 'react';
import {format} from 'date-fns';
import Map from './components/map/map'
import Search from './components/search/search'
import ComplaintViz from './components/complaints-viz/complaint-viz.js';
import api from './api/index';
import createSearchQuery from './components/utils/create-search-query.js'
import countPropsByKey from './components/utils/count-props-by-key'
import getDateFromDateAgo from './components/utils/getDateFromDateAgo'
import createFormattedChartData from './components/utils/create-formatted-chart-data'
import generateVizColors from './components/complaints-viz/utils/generate-viz-colors'
class App extends Component {
  constructor () {
    super()
    this.state = {
      data: null,
      date: '',
      formattedDate: '',
      complaintData: null,
      statusData: null,
      boroughData: null,
      startTime: '00:00:00',
      endTime: '01:00:00'
    }
  }

  componentDidMount() {
    const createDate = getDateFromDateAgo(2);
    const formattedDate = this.formatDateForQuery(createDate)
    this.setState({date: createDate, formattedDate: formattedDate})
    this.callApi(formattedDate, this.state.startTime, this.state.endTime);
  }
  
  callApi = (date, startTime, endTime) => {
    api(createSearchQuery(date, startTime, endTime)).then((data) => { 
      this.setState({data: data}); 
      this.setState({
        complaintData: this.createVisualData(this.state.data, 'complaint_type'),
        statusData: this.createVisualData(this.state.data, 'status'),
        boroughData: this.createVisualData(this.state.data, 'borough')
      })
    });
  }


  formatDateForQuery = (dateObj) => {
    return format(dateObj, 'yyyy-MM-dd')
  }

  createVisualData = (data, keyFilter) => {
    const dataObject = countPropsByKey(data, keyFilter);
    const dataset = createFormattedChartData(dataObject);
    const colors = generateVizColors(dataset.data);

    return {
      dataset,
      colors
    }
  }

  handleOnChange = (event) => {
    if(event.target.id === 'start-time') {
      this.setState({startTime: event.target.value})
      this.callApi(this.state.formattedDate, this.state.startTime, this.state.endTime)
    } else if (event.target.id === 'end-time') {
      this.setState({endTime: event.target.value})
      this.callApi(this.state.formattedDate, this.state.startTime, this.state.endTime)
    }
  }
  
  getDate = (date) => {
    this.callApi(this.formatDateForQuery(date), this.state.startTime, this.state.endTime);
  }  
  render() {
    const isAppReady = this.state.data !== null && this.state.complaintData !== null && this.state.statusData !== null && this.state.boroughData !== null;

    return (
      isAppReady ? 
      <div className="App">
        <div className="main">
          <section className="search-container">
            <Search getDate={this.getDate} date={this.state.date} value={this.props.startTime} handleOnChange={this.handleOnChange} startTime={this.startTime}></Search>
            <div className="date">Showing data for: {this.state.formattedDate}</div>
          </section>
          <div className="map-container">
            <Map data={this.state.data} />
          </div>
          <div className="complaint-viz-container">
            <ComplaintViz statusData={this.state.statusData} boroughData={this.state.boroughData} complaintData={this.state.complaintData}></ComplaintViz>
          </div>
        </div>
      </div>
      : <h1>Loading...</h1>
    ) 
  }
}

export default App;
