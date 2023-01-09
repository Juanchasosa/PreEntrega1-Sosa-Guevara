import { useCart } from "../context/CartContext"

const CartItem = (item) => {

  const {removeItem} = useCart()


  return (
    <>
        <div>{item.name}</div>
        <div>{item.precio}</div>
    </>
  )
}
export default CartItem