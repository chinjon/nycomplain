import './App.css';
import React, {Component} from 'react';
import Map from './components/map/map'
import ComplaintViz from './components/complaints-viz/complaint-viz.js';
import api from './api/index';

const BASE_API_URL = 'https://data.cityofnewyork.us/resource/erm2-nwe9.json?';
const WHERE_CREATED_DATE = `$where=created_date`
const BETWEEN = `between`
const searchQuery = `${WHERE_CREATED_DATE} ${BETWEEN} '2021-04-20T17:00:00' and '2021-04-20T17:45:00'`;

class App extends Component {
  constructor () {
    super()
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    api(`${BASE_API_URL}${searchQuery}`).then((data) => { 
      this.setState({data: data}); 
    });

  }
  
  render() {
    const isAppReady = this.state.data !== null;

    return (
      isAppReady ? 
      <div className="App">
        <section className="main">
          <div className="map-container">
            <Map data={this.state.data} />
          </div>
          <div className="complaint-list">
            <ComplaintViz complaints={this.state.data}></ComplaintViz>
          </div>
        </section>
      </div>
      : <h1>Loading...</h1>
    ) 
  }
}

export default App;
