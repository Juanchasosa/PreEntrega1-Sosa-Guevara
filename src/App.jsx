import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ProductList from './components/ProductList';


function App() {

  const message = () => {
    console.log("Hola");
  }

  return (
    <>
     < NavBar />

     <ItemListContainer stock={5}/>
     <ItemListContainer stock={10}/>
     <ItemListContainer stock={2}/>
     <ItemListContainer stock={20}/>

     <ProductList/>

    </>
  );
}

export default App;
