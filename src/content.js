import './content.css';
import Filter from './filter';
import Map from './map';
import { createContext, useState } from 'react';
import { locations, filtry } from './assets/data';
export const ping = createContext();

export default function Content() {
    const [ coOrdinates, updatecoOrdinates] = useState(locations);
    
    return (
        <div className="content">
            <ping.Provider value={{coOrdinates, updatecoOrdinates}}>
                <Filter/>
                <Map/>
            </ping.Provider>
        </div>
    );
}