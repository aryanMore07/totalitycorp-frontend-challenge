import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../reducers/productReducer";
import { products } from "../data/productsData";

export const ProductContext = createContext();

const initialProductState = {
    products: products,
    cart: []
}

export function ProductProvider({ children }) {
    const [productState, productDispatch] = useReducer(productReducer, initialProductState)
    return <ProductContext.Provider value={{ productState, productDispatch }}>{children}</ProductContext.Provider>
}

export const useProducts = () => useContext(ProductContext);