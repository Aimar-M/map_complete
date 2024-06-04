import './App.css';
import Header from './header';
import Content from './content';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home/home';
import Footer from './footer/footer';


function App() {
  const locate = useLocation();
  return (
      <section className='App'>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/pharmacy' element={<Content/>}/>
          <Route path='/healthcare' element={<Content/>}/>
          <Route path='/contact' element={<Content/>}/>
          <Route path='/login' element={<Content/>}/>
          <Route path='/signup' element={<Content/>}/>
        </Routes>
        {(locate.pathname === '/pharmacy') ? '' : <Footer/>}
      </section>
  );
}

export default App;
