import './content.css';
import Filter from './filter';
import Map from './map';
import { createContext, useState } from 'react';
import { locations } from './assets/data';
export const ping = createContext();

export default function Content() {
    const [ coOrdinates, updatecoOrdinates] = useState(locations);
    const [zoomm, updateZoom] = useState(12.5);
    
    return (
        <div className="content">
            <ping.Provider value={{coOrdinates, updatecoOrdinates, zoomm, updateZoom}}>
                <Filter/>
                <Map/>
            </ping.Provider>
        </div>
    );
}