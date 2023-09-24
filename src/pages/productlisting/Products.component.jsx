import React from 'react';
import './product.styles.css';
import { useProducts } from '../../contexts/products.context';
import { Image } from 'antd';
import { Button } from '@mui/material';

function Products() {

    const { productState, productDispatch } = useProducts();


    const addToCartHandler = (product) => {
        productDispatch({ type: "ADD_TO_CART", payload: product })
    }

    const removeFromCartHandler = (productId) => {
        productDispatch({ type: "REMOVE_FROM_CART", payload: productId })
    }

    const isAlreadyInCart = (productId) => productState?.cart.find(({ _id }) => _id === productId);

    return (
        <div className='products-div'>
            <h1 className='products-heading'><i>Products:</i></h1>
            <div className='products'>
                {
                    productState?.products?.map((product) => {
                        const { _id, name, category, inStock, price, image } = product
                        return (
                            <div key={_id} className="product-div">
                                <div>
                                    <Image
                                        width={200}
                                        src={image}
                                        alt={name}
                                    />
                                    <p><b>Name:</b> {name}</p>
                                    <p><b>Price:</b> {price}</p>
                                    <p><b>Category:</b> {category}</p>
                                    <p><b>Category:</b> {inStock ? (`In Stock`) : (`Out of Stock`)}</p>
                                </div>
                                <div className='product-btn-div'>
                                    {
                                        isAlreadyInCart(_id) ?
                                            (
                                                <Button variant='outlined' color='error' onClick={() => { removeFromCartHandler(_id) }}>Remove from Cart</Button>
                                            )
                                            :
                                            (
                                                <Button variant='contained' color='success' onClick={() => { addToCartHandler(product) }}> Add to Cart</Button>
                                            )
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products;
