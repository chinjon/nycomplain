import { Marker, Popup } from 'react-leaflet';

function Marker() {
  return (
      <Marker position={[40.65, -73.91]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
  );
}

export default Marker;
