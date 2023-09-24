import React from 'react';
import './navbar.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router';
import { useProducts } from '../../contexts/products.context';

function Navbar() {

    const { productState } = useProducts();
    const navigate = useNavigate();

    const moveToProductListing = () => {
        navigate("/products")
    }

    return (
        <div className='navbar-div'>
            <h2 className='nav-heading' onClick={() => {
                navigate("/");
            }}><i>Shoppies</i></h2>
            <div className='nav-right-div'>
                <Stack spacing={2} direction="row">
                    <Button onClick={moveToProductListing}><span className='login-btn'>Shop</span></Button>
                </Stack>
                <Stack spacing={2} direction="row">
                    <Badge badgeContent={productState?.cart.length} color="primary" className='badge' onClick={() => {
                        navigate("/cart");
                    }}>
                        <ShoppingCartIcon className='cart-icon' />
                    </Badge>
                </Stack>
            </div>
        </div>
    )
}

export default Navbar
