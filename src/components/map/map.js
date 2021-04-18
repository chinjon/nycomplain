import './map.css';
import React, {Component} from 'react';
import AttributionTile from './../attribution-tile/attribution-tile';
import MapMarker from '../map-marker/map-marker';
import api from './../../api/index.js';
import findAverageGeo from './../../api/utils/findAverageGeo';
import { MapContainer } from 'react-leaflet';

const createMapMarkers = (data) => {
  return data.map((item)=> {
    return <MapMarker key={item.unique_key} lat={item.latitude} long={item.longitude} />
  });
}

const getCoordinates = (dataArray) => {
  const coordinates = [];
  dataArray.forEach((data) => {
    coordinates.push({latitude: data.latitude, longitude: data.longitude});
  });
  return coordinates;
}
class Map extends Component {
  constructor () {
    super()
    this.state = {
      markerData: '',
      center: ''
    }
  }
  
  componentDidMount() {
    api().then((data) => { 
      const centerCoordinates = findAverageGeo(getCoordinates(data))
      this.setState({markerData: data}) 
      this.setState({center: [parseFloat(centerCoordinates.latitude.toFixed(2)), parseFloat(centerCoordinates.longitude.toFixed(2))]})
    });

  }

  render() {
    const isAppReady = this.state.markerData && this.state.center;
    return (
      isAppReady ?       
        <MapContainer center={this.state.center} zoom={10} scrollWheelZoom={true} id="mapid">
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
