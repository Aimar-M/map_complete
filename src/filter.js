import './filter.css';
import { locations, filtry } from './assets/data';
import { ping } from './content';
import { useContext, useReducer, useState } from 'react';

function reducer(state, action) {
    console.log(action.value);
    if (action.type === 'selected') {
        state[`${action.index}`] = action.value;
    } else if (action.type === 'reset') {
        state = ['Insurance', 'Delivery', 'Opening Hours', 'Prescription']
    }
    console.log(state);
    return state;
}

function Filter () {
    const [name, updateName] = useState(undefined);
    const [state, dispatch] = useReducer(reducer, ['Insurance', 'Delivery', 'Opening Hours', 'Prescription']);
    const flt = ['Insurance', 'Delivery', 'Opening Hours', 'Prescription'];

    const toggle = (arg) => {
        if (name === arg) {
            updateName(undefined);
        } else {
            updateName(arg);
        }
    }

    const {updatecoOrdinates, updateZoom} = useContext(ping);

    const reset = () => {
        updatecoOrdinates(locations);
        dispatch({type: 'reset'});
    }

    const target = (arg, idx) => {
        dispatch({type: 'selected', index: idx, value: arg});
        updateName(undefined);
        
        var all = [];
        var all2 = [];
        var all3 = [];
        if (idx !== 0 && state[0] === 'Insurance') {
            updatecoOrdinates(locations);
        } else {
            var check = [];
            for (let x = 0; x < state.length; x++) {
                if (['Insurance', 'Delivery', 'Opening Hours', 'Prescription'].includes(state[x])) {
                    check.push('');
                } else {
                    check.push(state[x]);
                }
            }
            
            check[idx] = arg;

            for (let i = 0; i < locations.length; i++) {
                if ((locations[i].Insurance).split(", ").includes(check[0])){
                    all.push(locations[i])
                }
            }
            
            if (check[1] !== '') {
                for (let i = 0; i < all.length; i++) {
                    if ((all[i].Delivery) === check[1]) {
                        all2.push(all[i]);
                    }
                }
            } else {
                all2 = all;
            }

            if (check[3] !== '') {
                for (let i = 0; i < all2.length; i++) {
                    if ((all2[i].Prescription).includes(check[3])) {
                        all3.push(all2[i]);
                    }
                }
            } else {
                all3 = all2;
            }
            updatecoOrdinates(all3);
            updateZoom(13);
            console.log(check);
        }
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
                {state.map((names, index)=>(
                    <div className='dropDown'>
                        <div className='dropDownList' onClick={() => toggle(names)}>
                            <p>{names}</p>
                            <div>
                                <svg viewBox='0 0 14 14'>
                                    <polyline points="2,4 7,10 12,4" stroke="rgba(0, 0, 0, 0.7)" strokeWidth="1.2" fill="none"/>
                                </svg>
                            </div>
                        </div>
                        <div className={(name === names) ? 'dropContent' : 'dropContentOff'}>
                            {filtry.map((filter)=>(
                                <button onClick={()=>target(filter[`${flt[index]}`], index)}>{filter[`${flt[index]}`]}</button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            
        </section>
    );
}

export default Filter;