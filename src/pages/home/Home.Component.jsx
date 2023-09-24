import React from 'react';
import './home.styles.css';
import { Link } from 'react-router-dom';

function Home() {

    return (
        <div className='home-div'>
            <h1 className='home-heading'><i>Shop Beyond <span className='home-tag'>Boundaries</span>: Your <span className='home-tag'>One-Stop</span> Online Emporium</i></h1>
            <Link className='home-btn' to="/products">Get Started</Link>
        </div>
    )
}

export default Home
