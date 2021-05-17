import './App.css';
import React, {Component} from 'react';
import Map from './components/map/map'
import ComplaintViz from './components/complaints-viz/complaint-viz.js';
import api from './api/index';

class App extends Component {
  constructor () {
    super()
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    api().then((data) => { 
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
