import './map.css';
import React, {Component} from 'react';
import AttributionTile from './../attribution-tile/attribution-tile';
import MapMarker from '../map-marker/map-marker';
import api from './../../api/index.js';
import { MapContainer } from 'react-leaflet';

const createMapMarkers = (data) => {
  return data.map((item)=> {
    return <MapMarker key={item.unique_key} lat={item.latitude} long={item.longitude} />
  });
}
class Map extends Component {
  constructor () {
    super()
    this.state = {
      markerData: ''
    }
  }
  
  componentDidMount() {
    api().then((data) => { 
      this.setState({markerData: data}) 
    })
  }

  render() {
    console.log(this.state.markerData)
    return (
      this.state.markerData ?       
        <MapContainer center={[40.65, -73.91]} zoom={13} scrollWheelZoom={true} id="mapid">
          <AttributionTile />
          {
            createMapMarkers(this.state.markerData)
          }
      </MapContainer> : 
      <h1>Loading...</h1>
    );
  }
}

export default Map;
