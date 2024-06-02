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

            </section>
        </section>
    );
}

export default Home;