import React from 'react';
import './cart.css';
import { useProducts } from '../../contexts/products.context';
import { Image } from 'antd';
import { Button } from '@mui/material';
import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';

function Cart() {

    const { productState, productDispatch } = useProducts();

    const removeFromCartHandler = (productId) => {
        productDispatch({ type: "REMOVE_FROM_CART", payload: productId })
    }

    const cartTotal = productState?.cart?.reduce((acc, curr) => curr.price + acc, 0);

    const onToken = (token) => {
        if (token) {
            productDispatch({type: "EMPTY_CART_ITEMS"})
            toast.success('Thanks payment successful 😄', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            toast.error('Sorry!, something went wrong please try again later ☹', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    return (
        <div className='products-div'>
            {
                productState?.cart?.length === 0 ?
                    (
                        <h1>No Items added in cart</h1>
                    ) :
                    (
                        <>
                            <h1 className='products-heading'><i>Cart Items:</i></h1>
                            <div className='products'>
                                {
                                    productState?.cart?.map((product) => {
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
                                                    <Button variant='outlined' color='error' onClick={() => removeFromCartHandler(_id)}>Remove from Cart</Button>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='checkout-div'>
                                <h2 className='products-heading'>Total: ₹{cartTotal}</h2>
                                <div className='strip-payments'>
                                    <StripeCheckout
                                        name="Shop More Co."
                                        currency='INR'
                                        amount={cartTotal}
                                        token={onToken}
                                        // image={COName}
                                        stripeKey='pk_test_51MXmNSSF7VvGRN5rSjGRMGyWjWIWVK456JY8LBYuw025aPyMeNxyMKEixL6MIwgH5K9VW1zrCV04Nt4ayTFbIgA900uSgJcYyU'
                                    />
                                </div>
                            </div>
                        </>
                    )


            }

        </div >
    );
};

export default Cart;
