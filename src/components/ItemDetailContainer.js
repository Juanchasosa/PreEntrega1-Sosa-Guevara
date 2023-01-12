import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { PRODUCTS } from "../data/drinks"
import QuantitySelector from "./QuantitySelector"

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState({})
    const { id } = useParams()

    useEffect(() => {
      getDetails().then(res=>{
        setDetail(res)
      })
    },[id])

    const getDetails = () => {
        return new Promise((resolve, reject) => {
            const item = PRODUCTS.find(p => p.id == id)
            setTimeout(() => {
                resolve(item)
            }, 500);
        })
    }

    const handleAddToCart = (cantidad) => {

      addToCart(detail, cantidad)
    }

    const {addToCart} = useCart()


  return (
    <div className="flex justify-center">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={detail.img} alt={detail.name} /></figure>
        <div className="card-body items-center">
          <h2 className="card-title">{detail.name}</h2>
          <p>${detail.precio}</p>
          <div className="card-actions flex-col items-center">
            <QuantitySelector onAddToCart={handleAddToCart} stock={detail.stock}/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ItemDetailContainer