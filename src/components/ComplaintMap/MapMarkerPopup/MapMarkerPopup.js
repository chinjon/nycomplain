import './MapMarkerPopup.css'
import React, {Component} from 'react';
import { Popup } from 'react-leaflet';
import createMarkerPopupLabel from './utils/create-marker-popup-label.js';
class MapMarkerPopup extends Component {
  render() {
    return (
      <Popup>
        {createMarkerPopupLabel('Complaint Type:', this.props.complaintType)}
        {createMarkerPopupLabel('Status:', this.props.status)}
        {createMarkerPopupLabel('ZIP:', this.props.zip)}
      </Popup>
    );
  }
}

export default MapMarkerPopup;
