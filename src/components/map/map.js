import './map.css';
import AttributionTile from './../attribution-tile/attribution-tile';
import MapMarker from '../map-marker/map-marker';
import data from './../../api/test/mock-data.json';
import { MapContainer } from 'react-leaflet';

function Map() {
  const mapData = data.map((item)=> {
    return <MapMarker key={item.unique_key} lat={item.latitude} long={item.longitude} />}
  )
  return (
    <MapContainer center={[40.65, -73.91]} zoom={13} scrollWheelZoom={true} id="mapid">
      <AttributionTile />
   {
     mapData
   }
      <MapMarker lat={40.65} long={-73.91} />
    </MapContainer>
  );
}

export default Map;
