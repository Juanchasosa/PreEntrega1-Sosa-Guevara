import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"

const PRODUCTS = [
    {id: 1, name: "Iphone", stock: 5},
    {id: 2, name: "Samsung", stock: 10},
    {id: 3, name: "Xiaomi", stock: 7},
]

const ProductList = () => {
    
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        getProducts().then(response =>{
            setProducts(response)
            console.log(response);
        })
    }, [])
    
    const getProducts = () => {
        return new Promise((response, reject) => {
            setTimeout(() => {
                response(PRODUCTS)
            }, 2000);
        })
    }
    
  return (
    <>
        <div className="flex flex-col items-center">
            <div>ProductList</div>
            {products.map(p => <ProductCard {...p}/> )}
        </div>
       
    </>
  )
}

export default ProductList

/* const getCharacters = async () =>{
        const URL = "https://rickandmortyapi.com/api/character"
        try {
            const data = await fetch(URL)
            const characters = await data.json()
            console.log(characters);

        } catch (error) {
            console.log(error);
        }
    } */

/*     const randomPromise = () => {
        const promiseExample = new Promise((resolve, reject) => {
            const random = Math.random()
            console.log(random);
            if (random > 0.5) {
                resolve("Se resolvió correctamente")
                
            }
            reject("RECHAZADA")
        })

        promiseExample.then ((resolve) => {
            console.log("RESPUESTA ", resolve);
        }).catch((err)=>{
            console.log(err);
        })
    } */

    /* const getCharacters = async () => {
        const URL = "https://rickandmortyapi.com/api/character"
        try {
            const response = await fetch(URL);
            const characters = await response.json();  
            console.log(characters);
        } catch (reject) {
            console.log(reject); 
        }
    
    }; */
