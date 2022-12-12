import { useState } from "react"

const QuantitySelector = ({stock}) => {

    const [cantidad, setCantidad] = useState(0)
  
    const aumentar = () => { 
  
      setCantidad( cantidad + 1 )
    
   }
  
   const disminuir = () => {
  
     setCantidad (cantidad - 1)
  
   }
  
    return (
      <>
        <div className="flex flex-col items-center">
              <div className="flex flex-col items-center">
                  <strong>Cantidad</strong>
                  <strong>{ cantidad }</strong>
                  <div>
                    <button disabled={cantidad === stock} onClick={aumentar} className="btn">+</button>
                    <button disabled= {cantidad === 0} onClick={disminuir} className="btn">-</button>
                  </div>
              </div>
          </div>
      </>
    )
  }
export default QuantitySelector