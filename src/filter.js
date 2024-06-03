import './filter.css';
import { locations, filtry } from './assets/data';
import { ping } from './content';
import { useContext, useState } from 'react';

function Filter () {

    const {updatecoOrdinates} = useContext(ping);

    const locate = (event) => {
        const selectedLocation = locations.find(location => location.name === event.target.value);
        updatecoOrdinates([
            {'name': selectedLocation.name, 'latitude': selectedLocation.latitude, 'longitude': selectedLocation.longitude, zoom: '15'}
        ]);
    }

    const reset = () => {
        updatecoOrdinates(locations);
    }

    return (
        <section className='filter'>
            <div className='item1'>
                <p className='filterText'>FILTERS</p>
                <p className='all'><span>3000  </span>/3000</p>
                <button onClick={reset}>Reset</button>
            </div>
            <div className='item2'>
                <input type='text' name='Search' placeholder='   Search...'/>
                <FilterList filter="Insurance Provider" list='Insurance'/>
                <FilterList filter="Delivery" list='Delivery'/>
                <FilterList filter="Opening Hours" list='Opening Hours'/>
                <FilterList filter="Prescription" list='Prescription'/>
            </div>
            
        </section>
    );
}

function FilterList (props) {
    const [binary, updateBinary] = useState(0);

    const toggle = () => {
        if (binary === 0) {
            updateBinary(1);
        } else {
            updateBinary(0);
        }
    }
    return(
        <div className='dropDown'>
            <div className='dropDownList' onClick={toggle}>
                <p>{props.filter}</p>
                <div>
                    <svg viewBox='0 0 14 14'>
                        <polyline points="2,4 7,10 12,4" stroke="rgba(0, 0, 0, 0.7)" strokeWidth="1.2" fill="none"/>
                    </svg>
                </div>
            </div>
            <div className={(binary === 0) ? 'dropContentOff' : 'dropContent'}>
                {filtry.map((filter)=>(
                    <button>{filter[`${props.list}`]}</button>
                ))}
            </div>
        </div>
    );
}

export default Filter;