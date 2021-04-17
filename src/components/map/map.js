import './map.css';
import AttributionTile from './../attribution-tile/attribution-tile';
import MapMarker from '../map-marker/map-marker';
import { MapContainer } from 'react-leaflet';

function Map() {
  return (
    <MapContainer center={[40.65, -73.91]} zoom={13} scrollWheelZoom={true} id="mapid">
      <AttributionTile />
      <MapMarker lat={40.65} long={-73.91} />
    </MapContainer>
  );
}

export default Map;
