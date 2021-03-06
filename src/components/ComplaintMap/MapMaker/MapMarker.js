import React, {Component} from 'react';
import { Marker } from 'react-leaflet';
import MapMarkerPopup from '../MapMarkerPopup/MapMarkerPopup';

class MapMarker extends Component {
  render() {
    return (
        <Marker position={[this.props.lat, this.props.long]}>
          <MapMarkerPopup complaintType={this.props.complaintType} status={this.props.status} zip={this.props.zip} />
        </Marker>
    );
  }
}

export default MapMarker;
