import { useEffect, useState } from "react"
import { PRODUCTS } from "../data/drinks"
import ProductCard from "./ProductCard"


const ItemListContainer = () => {
    
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
        <div className="flex flex-col items-center flex-wrap">

            <div className="flex flex-row flex-wrap justify-evenly">
                {products.map(p => <ProductCard key={p.id} {...p}/> )}
            </div>

        </div>
       
    </>
  )
}

export default ItemListContainer

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
