import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../reducers/productReducer";
import { products } from "../data/productsData";

export const ProductContext = createContext();

const initialProductState = {
    products: products,
    cart: [],
    priceInput: '',
    ratingInput: '',
    checkBoxInput: [],
}

export function ProductProvider({ children }) {
    const [productState, productDispatch] = useReducer(productReducer, initialProductState)

    const filterByPrice = productState.priceInput ? productState.products.filter(({ price }) => price >= Number(productState.priceInput)) : productState.products

    const filterByCategory = productState.checkBoxInput.length > 0 ? filterByPrice.filter((item) => productState.checkBoxInput.some((category) => item.category === category)) : filterByPrice

    const filterByRatings = productState.ratingInput ? filterByCategory.filter(({ rating }) => rating <= Number(productState.ratingInput)) : filterByCategory


    return <ProductContext.Provider value={{ productState, productDispatch, filterByRatings }}>{children}</ProductContext.Provider>
}

export const useProducts = () => useContext(ProductContext);