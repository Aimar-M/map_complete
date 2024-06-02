import './filter.css';
import locations from './assets/data';
import { ping } from './content';
import { useContext } from 'react';

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
            <form className='item2'>
                <input type='text' name='Search' placeholder='   Search...'/>
                <select onChange={locate} className='selects' name='location' placeholder="Location">
                    <option value="">Location</option>
                    {locations.map((location)=>(
                        <option value={location.name}>{location.name}</option>
                    ))}
                </select>
            </form>

        </section>
    );
}

export default Filter;