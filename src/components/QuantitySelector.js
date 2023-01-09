import { useState } from "react"

const QuantitySelector = ({stock, onAddToCart}) => {

    const [cantidad, setCantidad] = useState(1)
  
    const aumentar = () => { 
  
      setCantidad( cantidad + 1 )
    
   }
  
   const disminuir = () => {
  
     setCantidad (cantidad - 1)
  
   }
  
    return (
      <>
        <div className="flex flex-col items-center">
              <div className="flex flex-col items-center gap-1">
                  <strong>Cantidad</strong>
                  <strong>{ cantidad }</strong>
                  <div className="flex gap-2">
                    <button disabled= {cantidad === 1} onClick={disminuir} className="btn">-</button>
                    <button disabled={cantidad === stock} onClick={aumentar} className="btn">+</button>
                  </div>
                  <div>
                    <button className="btn" onClick={() => {
                      onAddToCart(cantidad)

                      }}>Agregar al carrito</button>
                  </div>
              </div>
          </div>
      </>
    )
  }
export default QuantitySelector