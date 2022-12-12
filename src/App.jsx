import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {

  return (
    <BrowserRouter>

      <NavBar/>
      <Routes>

        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:id' element={<ItemListContainer/>}/>
        <Route path='/drink/:id' element={<ItemDetailContainer/>}/>


      </Routes>
    </BrowserRouter>


  );
}

export default App;
