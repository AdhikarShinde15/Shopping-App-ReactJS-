import { createContext, useContext, useReducer } from "react"
import fakerStatic from "faker";
import cartReducer from "./Reducer";

const Cart = createContext();

const Context = ({ children }) => {

    const products = [...Array(20)].map(() => ({
        id: fakerStatic.datatype.uuid(),
        name: fakerStatic.commerce.productName(),
        price: fakerStatic.commerce.price(),
        image: fakerStatic.random.image(),
        inStock: fakerStatic.random.arrayElement([0,3,5,7,9,10]),
        ratings: fakerStatic.random.arrayElement([1,2,3,4,5]),
        fastDelivery: fakerStatic.datatype.boolean(),
    }))
    
   const [ state, dispatch ] = useReducer(cartReducer,  {
       products: products,
       cart: []
   })

    return (
        <Cart.Provider value={{ state, dispatch }}>
            { children }
        </Cart.Provider>
    )
}

export default Context

export const CartState = () => useContext(Cart)
