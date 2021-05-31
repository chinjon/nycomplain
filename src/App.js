import './App.css';
import React, {Component} from 'react';
import Map from './components/map/map'
import Search from './components/search/search'
import ComplaintViz from './components/complaints-viz/complaint-viz.js';
import api from './api/index';
import createSearchQuery from './components/utils/create-search-query.js'
import countPropsByKey from './components/utils/count-props-by-key'
import createFormattedChartData from './components/utils/create-formatted-chart-data'
import generateVizColors from './components/complaints-viz/utils/generate-viz-colors'
class App extends Component {
  constructor () {
    super()
    this.state = {
      data: null,
      date: '2021-05-20',
      complaintData: null,
      statusData: null,
      boroughData: null,
    }
  }

  componentDidMount() {
    this.callApi(this.state.date);
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
    this.setState({date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`})
    this.callApi(this.state.date);
  }  
  render() {
    const isAppReady = this.state.data !== null && this.state.complaintData !== null && this.state.statusData !== null && this.state.boroughData !== null;

    return (
      isAppReady ? 
      <div className="App">
        <section className="main">
          <div className="search-container">
            <Search getDate={this.getDate}></Search>
            <div className="date">Showing data for: {this.state.date}</div>
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
