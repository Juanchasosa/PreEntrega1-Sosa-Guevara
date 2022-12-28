import React, { useContext, useState } from "react"

const CartContext = React.createContext({
    items : [],
    addItemCart : () => {},
    clearCart : () => {}
})

const useCart = () => {
    return useContext( CartContext )
}

const CartContextProvider = ( {children} ) => {

    const [items, setItems] = useState([])

    const addItemCart = ( item ) => {
        if (items.includes(item)) {
            
        }
        setItems( items => items.concat(item) )
    }

    const clearCart = () => {
        setItems( [] )
    }

    const context = {
        items : items,
        addItemCart : addItemCart,
        clearCart : clearCart
    }

  return (
    <CartContext.Provider value={context}>
        {children}
    </CartContext.Provider>
  )
}
export {CartContext, CartContextProvider, useCart}