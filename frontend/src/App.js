import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import About from './components/pages/About';
import CreateRecord from './components/pages/CreateRecord';
import Record from './components/pages/Record';
import NavBar from './components/utils/NavBar';




function App() {
  return (
   <>

    <BrowserRouter>

      <div className='app'>

        
        <NavBar/>
        
        <Routes>

          <Route path='/' element={<Home/>}/>

          <Route path='/about' element={<About/>}/>

          <Route path='/records' element={<Record/>}/>

          <Route path='/addRecord' element={<CreateRecord/>}/>

        </Routes>

      </div>


    </BrowserRouter>

   </>

  );
}

export default App;
