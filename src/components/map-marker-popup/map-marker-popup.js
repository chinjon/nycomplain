import './map-marker-popup.css'
import React, {Component} from 'react';
import { Popup } from 'react-leaflet';

const createComplaintLabel = (complaintType = null) => <p><span class="popup-label-bold">Complaint Type:</span> <span class="popup-complaint-text-italic">{complaintType}</span></p>
const createStatusLabel = (statusLabel = null) => <p><span class="popup-label-bold">Status:</span> <span class="popup-complaint-text-italic">{statusLabel}</span></p>
class MapMarkerPopup extends Component {
  render() {
    return (
      <Popup>
        {createComplaintLabel(this.props.complaintType)}
        {createStatusLabel(this.props.status)}
      </Popup>
    );
  }
}

export default MapMarkerPopup;
