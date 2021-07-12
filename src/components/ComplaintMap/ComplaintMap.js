import './ComplaintMap.css';
import React, {Component} from 'react';
import AttributionTile from './AttributionTile/AttributionTile';
import MapMarker from './MapMaker/MapMarker';
import findAverageGeo from '../utils/find-average-geo.js';
import roundDecimalPlaces from '../utils/round-decimal-places.js';
import createCoordinatesFromArray from '../utils/create-coordinates-from-array.js'
import { MapContainer } from 'react-leaflet';

const createMapMarkers = (data) => {
  return data.filter(item => item.latitude && item.longitude).map((item)=> {
      return <MapMarker key={item.unique_key} lat={item.latitude} long={item.longitude} complaintType={item.complaint_type} status={item.status} zip={item.incident_zip} />
  });
}
class ComplaintMap extends Component {
  constructor () {
    super()
    this.state = {
      center: '',
      id: {
        map: 'map'
      }
    }
  }
  
  componentDidMount() {
    const coordinatesArray = createCoordinatesFromArray(this.props.data);
    const centerCoordinates = findAverageGeo(coordinatesArray)
    this.setState({center: [roundDecimalPlaces(centerCoordinates.latitude, 2), roundDecimalPlaces(centerCoordinates.longitude, 2)]})
  }

  render() {
    const isAppReady = this.props.data && this.state.center;
    return (
      isAppReady ?       
        <MapContainer className="map-container" center={this.state.center} zoom={10.5} scrollWheelZoom={true} id={this.state.id.map}>
          <AttributionTile />
          {
            createMapMarkers(this.props.data)
          }
      </MapContainer> : 
      <h1>Loading....</h1>
    );
  }
}

export default ComplaintMap;
