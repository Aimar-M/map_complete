import './App.css';
import Header from './header';
import Content from './content';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/home';

function App() {
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
      </section>
  );
}

export default App;
