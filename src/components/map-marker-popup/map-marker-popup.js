import React, {Component} from 'react';
import { Popup } from 'react-leaflet';

class MapMarkerPopup extends Component {
  render() {
    return (
      <Popup>
        {this.props.popup ? this.props.popup : null}
      </Popup>
    );
  }
}

export default MapMarkerPopup;
