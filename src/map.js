import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import './map.css';
import { Icon } from 'leaflet';
import { ping } from './content.js';
import { useContext } from 'react';


function Map() {
    const {coOrdinates, zoomm} = useContext(ping);
    console.log(coOrdinates);

    const customIcon = new Icon({
        iconUrl: require('./placeholder.png'),
        iconSize: [20, 20]
    });

    return (
        // coordinates for rwanda: [-1.9146409839831982, 30.05164869832044]
        <MapContainer center={[-1.9440727, 30.0618851]} zoom={zoomm}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {coOrdinates.map((location)=>(
                <Marker position={[location.latitude, location.longitude]} icon={customIcon} >
                    <Popup className='mapInfo'>
                        <p>{location.name}</p>
                        <div className='starMap'>
                            {Array.from({ length: location.Ratings }, (_, i) => i).map(()=> (
                                <div>
                                    <svg viewBox="0 0 28 28" fill="none">
                                        <path d="M13.9999 2.33337L17.6049 9.63671L25.6666 10.815L19.8333 16.4967L21.2099 24.5234L13.9999 20.7317L6.78992 24.5234L8.16659 16.4967L2.33325 10.815L10.3949 9.63671L13.9999 2.33337Z" stroke="#EAB308" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            ))}
                            {Array.from({ length: 5 - location.Ratings }, (_, i) => i).map(()=> (
                                <div>
                                    <svg viewBox="0 0 28 28" fill="none">
                                        <path d="M13.9999 2.33337L17.6049 9.63671L25.6666 10.815L19.8333 16.4967L21.2099 24.5234L13.9999 20.7317L6.78992 24.5234L8.16659 16.4967L2.33325 10.815L10.3949 9.63671L13.9999 2.33337Z" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            ))}
                        </div>
                        <p>{location.address}</p>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default Map;