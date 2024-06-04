import { locations } from '../assets/data';
import { Link } from 'react-router-dom';
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
                    <p>Pharmacies</p>
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
                <Link className='findMore' to='/pharmacy'>Find More</Link>
            </section>
            <section className='services'>
                <div className='pharmacyHead'>
                    <div>
                        <svg viewBox='0 0 50 50' fill='none'>
                            <path d="M18.75 37.5L31.25 25L18.75 12.5" stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <p>Our Services</p>
                </div>
                <div className='subintro'>
                    <p>We care about your health</p>
                </div>
                <div className='service'>
                    <div className='serviceList'>
                        <div className='view'>
                            <svg viewBox="0 0 60 60" fill="none">
                                <path d="M50 25C50 40 30 55 30 55C30 55 10 40 10 25C10 19.6957 12.1071 14.6086 15.8579 10.8579C19.6086 7.10714 24.6957 5 30 5C35.3043 5 40.3914 7.10714 44.1421 10.8579C47.8929 14.6086 50 19.6957 50 25Z" fill="#19D883"/>
                                <path d="M30 32.5C34.1421 32.5 37.5 29.1421 37.5 25C37.5 20.8579 34.1421 17.5 30 17.5C25.8579 17.5 22.5 20.8579 22.5 25C22.5 29.1421 25.8579 32.5 30 32.5Z" fill="#FAFAFA"/>
                            </svg>
                        </div>
                        <p className="viewName">Pharmacy Finder</p>
                        <div className='viewSummary'>
                            <p>You can locate the nearest pharmacies effortlessly. This feature guides you to the right pharmacy quickly and accurately.</p>
                        </div>
                    </div>
                    <div className='serviceList'>
                        <div className='view'>
                            <svg viewBox="0 0 60 60" fill="none">
                                <path d="M10 55H50C51.3261 55 52.5979 54.4732 53.5355 53.5355C54.4732 52.5979 55 51.3261 55 50V10C55 8.67392 54.4732 7.40215 53.5355 6.46447C52.5979 5.52678 51.3261 5 50 5H20C18.6739 5 17.4021 5.52678 16.4645 6.46447C15.5268 7.40215 15 8.67392 15 10V50C15 51.3261 14.4732 52.5979 13.5355 53.5355C12.5979 54.4732 11.3261 55 10 55ZM10 55C8.67392 55 7.40215 54.4732 6.46447 53.5355C5.52678 52.5979 5 51.3261 5 50V27.5C5 24.75 7.25 22.5 10 22.5H15" fill="#19D883"/>
                                <path d="M45 35H25" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M37.5 45H25" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M25 15H45V25H25V15Z" fill="#FAFAFA"/>
                            </svg>
                        </div>
                        <p className="viewName">Health News and Insights</p>
                        <div className='viewSummary'>
                            <p>Stay up-to-date on medical breakthroughs, seasonal health tips, and latest health-related news and expert articles.</p>
                        </div>
                    </div>
                    <div className='serviceList'>
                        <div className='view'>
                            <svg viewBox="0 0 60 60" fill="none">
                                <path d="M9.62499 21.55C9.2601 19.9063 9.31613 18.1971 9.78789 16.5808C10.2596 14.9646 11.1319 13.4936 12.3237 12.3043C13.5155 11.115 14.9883 10.2459 16.6055 9.77749C18.2228 9.30911 19.9321 9.25666 21.575 9.625C22.4793 8.21075 23.725 7.0469 25.1974 6.24071C26.6697 5.43453 28.3214 5.01196 30 5.01196C31.6786 5.01196 33.3302 5.43453 34.8026 6.24071C36.275 7.0469 37.5207 8.21075 38.425 9.625C40.0704 9.25506 41.7827 9.30727 43.4025 9.77678C45.0223 10.2463 46.4971 11.1179 47.6896 12.3104C48.8821 13.5029 49.7537 14.9777 50.2232 16.5975C50.6927 18.2173 50.7449 19.9296 50.375 21.575C51.7892 22.4793 52.9531 23.725 53.7593 25.1974C54.5655 26.6697 54.988 28.3214 54.988 30C54.988 31.6786 54.5655 33.3303 53.7593 34.8026C52.9531 36.275 51.7892 37.5207 50.375 38.425C50.7433 40.0679 50.6909 41.7772 50.2225 43.3945C49.7541 45.0117 48.885 46.4845 47.6957 47.6763C46.5064 48.8681 45.0354 49.7403 43.4191 50.2121C41.8029 50.6839 40.0937 50.7399 38.45 50.375C37.5469 51.7947 36.3002 52.9635 34.8253 53.7733C33.3504 54.5831 31.6951 55.0076 30.0125 55.0076C28.3299 55.0076 26.6746 54.5831 25.1997 53.7733C23.7248 52.9635 22.4781 51.7947 21.575 50.375C19.9321 50.7433 18.2228 50.6909 16.6055 50.2225C14.9883 49.7541 13.5155 48.885 12.3237 47.6957C11.1319 46.5064 10.2596 45.0354 9.78789 43.4192C9.31613 41.8029 9.2601 40.0937 9.62499 38.45C8.19989 37.5481 7.02603 36.3004 6.21262 34.823C5.3992 33.3456 4.97266 31.6865 4.97266 30C4.97266 28.3135 5.3992 26.6544 6.21262 25.177C7.02603 23.6996 8.19989 22.4519 9.62499 21.55Z" fill="#19D883"/>
                                <path d="M22.7251 22.5C23.3129 20.8291 24.473 19.4202 26 18.5228C27.527 17.6254 29.3223 17.2973 31.068 17.5967C32.8137 17.8962 34.3971 18.8038 35.5378 20.1588C36.6784 21.5138 37.3027 23.2288 37.3001 25C37.3001 30 29.8001 32.5 29.8001 32.5" stroke="#FAFAFA" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M30 42.5H30.025" stroke="#FAFAFA" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <p className="viewName">Customer Support</p>
                        <div className='viewSummary'>
                            <p>Whether you need help  or have questions, we are here to assist you. Don’t hesitate to reach out.</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Home;