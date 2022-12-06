import { useState } from "react"

const ItemListContainer = ({stock}) => {

  const [cantidad, setCantidad] = useState(0)

  const aumentar = () => { 

    cantidad === stock ? <button disabled={true}></button> : setCantidad( cantidad + 1 )
  
 }

 const disminuir = () => {
   
   cantidad === 0 ? <button disabled={true}></button> : setCantidad (cantidad - 1)
 }

  return (
    <>
      <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
                <strong>Cantidad</strong>
                <strong>{ cantidad }</strong>
                <div>
                  <button onClick={aumentar} className="btn">+</button>
                  <button onClick={disminuir} className="btn">-</button>
                </div>
            </div>
        </div>
    </>
  )
}
export default ItemListContainer