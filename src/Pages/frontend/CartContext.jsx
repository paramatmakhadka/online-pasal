import React, { createContext, useReducer } from 'react'

let cartReducer = (state, action) => {
    switch (action.type) {
        case 'addtocart':
            return { cart: [...state.cart, action.payload] }
        case 'remove':
            return { cart: state.cart.filter(a => a.id !== action.payload.id) }
        default:
            return state
    }
}

let CartContext = createContext()
function CartProvider({ children }) {
    let [state, dispatch] = useReducer(cartReducer, { cart: [] })
    return (
        <>
            <CartContext.Provider value={{ state, dispatch }}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export { CartContext, CartProvider }