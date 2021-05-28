import './App.css';
import React, {Component} from 'react';
import Map from './components/map/map'
import Search from './components/search/search'
import ComplaintViz from './components/complaints-viz/complaint-viz.js';
import api from './api/index';
import createSearchQuery from './components/utils/create-search-query.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      data: null,
      date: '2021-05-20'
    }
  }

  componentDidMount() {
    this.callApi(this.state.date);
  }

  callApi = (date) => {
    api(createSearchQuery(date, '17:00:00', '17:45:00')).then((data) => { 
      this.setState({data: data}); 
    });
  }
  
  getDate = (date) => {
    this.setState({date: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`})
    this.callApi(this.state.date);
  }  
  render() {
    const isAppReady = this.state.data !== null;

    return (
      isAppReady ? 
      <div className="App">
        <section className="main">
          <div className="search-container">
            <Search getDate={this.getDate}></Search>
          </div>
          <div className="map-container">
            <Map data={this.state.data} />
          </div>
          <div className="complaint-viz">
            <ComplaintViz complaints={this.state.data}></ComplaintViz>
          </div>
        </section>
      </div>
      : <h1>Loading...</h1>
    ) 
  }
}

export default App;
