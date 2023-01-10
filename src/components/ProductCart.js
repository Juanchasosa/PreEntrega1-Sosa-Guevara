import { useCart } from "../context/CartContext"
import { Icon } from '@iconify/react';

const ProductCart = () => {

    const {items, clearCart, getTotalItemCount, getTotalPrice, removeItem} = useCart()


  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          {items.map(item => {
            return  <div key={item.id} className="card bg-base-100 shadow-xl w-screen">
                      <div className="card-body flex-row items-center justify-evenly">
                        <div>
                          <img className=" w-32" src={item.img}/>
                        </div>
                        <h2 className="card-title">{item.name}</h2>
                        <p className="">${item.precio}</p>
                        <p className="text text">{item.cantidad}</p>
                        <div className="card-actions justify-end">
                          <button onClick={() => {removeItem(item.id)}} className="btn btn-primary"><Icon icon="ph:trash-bold" width="20" height="20" /></button>
                        </div>
                      </div>
                    </div>
        
            })} 
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-info">Total: ${getTotalPrice()}</h1>
          <h1 className="text-info">{getTotalItemCount()} productos</h1>
        </div>

        <div className="flex flex-row justify-center gap-4">
          <button className="btn" onClick={() => {clearCart()}}><Icon icon="ph:trash-bold" width="30" height="30" />Vaciar</button>
          <button className="btn">Chau</button>
        </div>
      </div>
    </>
  )
}
export default ProductCart