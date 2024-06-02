import locations from '../assets/data';
import './home.css'; 

function Home () {
    return (
        <section className='home'>
            <section className='intro'>
                <div className='info'>
                    <div className='note'>
                        <p className='heading'>Unveiling Healthcare Trends and Patient Voices</p>
                        <p>Kapsule Insight is more than just healthcare information. It's a powerful tool built for you, the Rwandan healthcare consumer.</p>
                    </div>
                    <div className='infoUtilities'>
                        <form>
                            <input type='text' placeholder='Search for a Pharmacy' name='pharmacy'/>
                            <button>
                                <svg viewBox='0 0 32 32' fill='none'>
                                    <path d="M14.6667 25.3333C20.5577 25.3333 25.3333 20.5577 25.3333 14.6667C25.3333 8.77563 20.5577 4 14.6667 4C8.77563 4 4 8.77563 4 14.6667C4 20.5577 8.77563 25.3333 14.6667 25.3333Z" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M27.9999 28.0001L22.2666 22.2667" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
                <div className='img1'></div>
            </section>
            <section className='pharmacy'>
                <div className='pharmacyHead'>
                    <div>
                        <svg viewBox='0 0 50 50' fill='none'>
                            <path d="M18.75 37.5L31.25 25L18.75 12.5" stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <p>Pharmacy</p>
                </div>
                <div className='pharmacyList'>
                    {locations && locations.map((location)=>(
                        <div className='list'>
                            <div className='plus'>
                                <svg viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.6666 0.666626C28.8985 0.666626 27.2028 1.369 25.9526 2.61925C24.7023 3.86949 24 5.56518 24 7.33329V24H7.33329C5.56518 24 3.86949 24.7023 2.61925 25.9526C1.369 27.2028 0.666626 28.8985 0.666626 30.6666V37.3333C0.666626 41 3.66663 44 7.33329 44H24V60.6666C24 64.3333 27 67.3333 30.6666 67.3333H37.3333C39.1014 67.3333 40.7971 66.6309 42.0473 65.3807C43.2976 64.1304 44 62.4347 44 60.6666V44H60.6666C62.4347 44 64.1304 43.2976 65.3807 42.0473C66.6309 40.7971 67.3333 39.1014 67.3333 37.3333V30.6666C67.3333 28.8985 66.6309 27.2028 65.3807 25.9526C64.1304 24.7023 62.4347 24 60.6666 24H44V7.33329C44 5.56518 43.2976 3.86949 42.0473 2.61925C40.7971 1.369 39.1014 0.666626 37.3333 0.666626H30.6666Z" fill="#FAFAFA" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className='rating'>
                                <div className='nm'>
                                    <div>
                                        <p>{location.name}</p>
                                    </div>
                                    <p>...</p>
                                </div>
                                <div className='stars'>
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
                                                <path d="M13.9999 2.33337L17.6049 9.63671L25.6666 10.815L19.8333 16.4967L21.2099 24.5234L13.9999 20.7317L6.78992 24.5234L8.16659 16.4967L2.33325 10.815L10.3949 9.63671L13.9999 2.33337Z" stroke="#E3E5E4" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                    ))}
                                </div>
                                <div className='ad'>
                                    <div>
                                        <p>{location.address}</p>
                                    </div>
                                    <p>...</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button>

                </button>
            </section>
        </section>
    );
}

export default Home;