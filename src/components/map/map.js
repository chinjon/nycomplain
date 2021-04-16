import './map.css';
import AttributionTile from './../attribution-tile/attribution-tile';
import { MapContainer, Marker, Popup } from 'react-leaflet';

function Map() {
  return (
    <MapContainer center={[40.65, -73.91]} zoom={13} scrollWheelZoom={false} id="mapid">
      <AttributionTile />
      <Marker position={[40.65, -73.91]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
