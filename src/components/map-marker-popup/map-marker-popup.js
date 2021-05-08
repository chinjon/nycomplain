import './map-marker-popup.css'
import React, {Component} from 'react';
import { Popup } from 'react-leaflet';

class MapMarkerPopup extends Component {
  render() {
    return (
      <Popup>
        <p><span class="popup-label-bold">Complaint Type:</span> <span class="popup-complaint-text-italic">{this.props.complaintType ? this.props.complaintType : null}</span></p>
      </Popup>
    );
  }
}

export default MapMarkerPopup;
