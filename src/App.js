import './App.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import {Icon} from "leaflet";
import "leaflet/dist/leaflet.css"


function App() {
    const markers = [
        {
            geocode: [48.86, 2.3522],
            popup: "pharmacy continental"
        },
        {
            geocode: [48.85, 2.3522],
            popup: "other pharmacy"

        }
    ]

    const customIcon= new Icon({
            iconUrl: require("./placeholder.png"),
            iconSize: [38, 38]
    }
    )

  return (
      // coordinates for rwanda: [-1.9146409839831982, 30.05164869832044]
      <MapContainer center={[48.8566, 2.3522]} zoom={12.5}>
          <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {markers.map(marker => {
              <Marker position={marker.geocode}></Marker>
          })}

      </MapContainer>
  );
}

export default App;
