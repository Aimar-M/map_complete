import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import './map.css';
import { Icon } from 'leaflet';
import { ping } from './content';
import { useContext } from 'react';


function Map() {
    const {coOrdinates} = useContext(ping);
    console.log(coOrdinates);

    const customIcon = new Icon({
        iconUrl: require('./placeholder.png'),
        iconSize: [15, 15]
    });

    return (
        // coordinates for rwanda: [-1.9146409839831982, 30.05164869832044]
        <MapContainer center={[-1.9440727, 30.0618851]} zoom={12.5}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {coOrdinates.map((location)=>(
                <Marker position={[location.latitude, location.longitude]} icon={customIcon} >
                    <Popup>
                        {location.name}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default Map;