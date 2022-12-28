import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ProductCart from './components/ProductCart';


function App() {

  return (
      
      <BrowserRouter>

        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:id' element={<ItemListContainer/>}/>
          <Route path='/drink/:id' element={<ItemDetailContainer/>}/>
          <Route path='/drink/cart' element= {<ProductCart/>}/>
        </Routes>

      </BrowserRouter>


  );
}

export default App;
