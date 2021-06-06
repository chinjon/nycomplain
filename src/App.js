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
    }
  }

  componentDidMount() {
    const createDate = getDateFromDateAgo(2);
    const formattedDate = this.formatDateForQuery(createDate)
    this.setState({date: createDate, formattedDate: formattedDate})
    this.callApi(formattedDate);
  }
  
  callApi = (date) => {
    api(createSearchQuery(date, '17:00:00', '17:45:00')).then((data) => { 
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
  
  getDate = (date) => {
    this.callApi(this.formatDateForQuery(date));
  }  
  render() {
    const isAppReady = this.state.data !== null && this.state.complaintData !== null && this.state.statusData !== null && this.state.boroughData !== null;

    return (
      isAppReady ? 
      <div className="App">
        <section className="main">
          <div className="search-container">
            <Search getDate={this.getDate} date={this.state.date}></Search>
            <div className="date">Showing data for: {this.state.formattedDate}</div>
          </div>
          <div className="map-container">
            <Map data={this.state.data} />
          </div>
          <div className="complaint-viz">
            <ComplaintViz statusData={this.state.statusData} boroughData={this.state.boroughData} complaintData={this.state.complaintData}></ComplaintViz>
          </div>
        </section>
      </div>
      : <h1>Loading...</h1>
    ) 
  }
}

export default App;
