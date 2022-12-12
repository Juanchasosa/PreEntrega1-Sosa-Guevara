import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
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
            }, 2000);
        })
    }

  return (
    <div className="flex justify-center">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={detail.img} alt={detail.name} /></figure>
        <div className="card-body">
          <h2 className="card-title">{detail.name}</h2>
          <p>${detail.precio}</p>
          <div className="card-actions flex-col items-center">
            <QuantitySelector stock={detail.stock}/>
            <button className="btn btn-primary">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ItemDetailContainer