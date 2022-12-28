import { useCart } from "../context/CartContext"

const ProductCart = () => {

    const {items, clearCart} = useCart()

  return (
    <div>{items}</div>
  )
}
export default ProductCart