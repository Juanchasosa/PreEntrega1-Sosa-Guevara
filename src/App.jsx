import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ProductCart from './components/ProductCart';
import Footer from './components/Footer';


function App() {

  return (
      
      <BrowserRouter>

        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:id' element={<ItemListContainer/>}/>
          <Route path='/drink/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element= {<ProductCart/>}/>
        </Routes>
        <Footer/>

      </BrowserRouter>

      


  );
}

export default App;
