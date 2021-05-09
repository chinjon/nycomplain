import React, {Component} from 'react';
import { Marker } from 'react-leaflet';
import MapMarkerPopup from './../map-marker-popup/map-marker-popup';

class MapMarker extends Component {
  render() {
    return (
        <Marker position={[this.props.lat, this.props.long]}>
          <MapMarkerPopup complaintType={this.props.complaintType} status={this.props.status} />
        </Marker>
    );
  }
}

export default MapMarker;
