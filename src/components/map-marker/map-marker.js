import React, {Component} from 'react';
import { Marker, Popup } from 'react-leaflet';

class MapMarker extends Component {
  render() {
    return (
        <Marker position={[this.props.lat, this.props.long]}>
          <Popup>
            {this.props.popup ? this.props.popup : null}
          </Popup>
        </Marker>
    );
  }
}

export default MapMarker;
