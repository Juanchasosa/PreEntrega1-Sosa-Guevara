import { useCart } from "../context/CartContext"
import CartItem from "./CartItem"
import { Icon } from '@iconify/react';

const ProductCart = () => {

    const {items, clearCart, getTotalItemCount, getTotalPrice} = useCart()


  return (
    <>
      <div className="flex justify-end">
        <button className="btn" onClick={clearCart}>
          <Icon icon="ph:trash-bold" />
        </button>
      </div>
      <ul className="flex flex-col items-center gap-2">
        {items.map(item => <CartItem key={item.id} {...item} />)}
      </ul>
    </>
  )
}
export default ProductCart