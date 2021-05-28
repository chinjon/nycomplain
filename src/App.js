import './App.css';
import React, {Component} from 'react';
import Map from './components/map/map'
import ComplaintViz from './components/complaints-viz/complaint-viz.js';
import api from './api/index';
import createSearchQuery from './components/utils/create-search-query.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    api(createSearchQuery('2021-04-20', '17:00:00', '17:45:00')).then((data) => { 
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
