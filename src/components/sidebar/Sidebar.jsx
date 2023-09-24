import React, { useState } from 'react';
import "./sidebar.css";
import { useProducts } from '../../contexts/products.context';

function Sidebar() {

    const { productState, productDispatch } = useProducts();
    const [value, setValue] = useState(500);

    
    const clearFilterHandler = () => {
        productDispatch({type: 'CLEAR_FILTERS'});
        setValue(500);
    }

    return (
        <aside className='side-bar'>
        <div className='first-div'>
            <div><p>Filter</p></div>
            <button className='clear-btn' onClick={clearFilterHandler}>Clear</button>
        </div>
        <div className='second-div'>
            <div><p className='price-filter-tag'> <b>Price</b> <b><p>{value}</p></b></p></div>
            <input value={value} min='500' max='50000' type="range" id='price-sort' onChange={(event) => {
                setValue(event.target.value);
                productDispatch({ type: 'PRICE_INPUT', payload: event.target.value })
            }} />

        </div>
        <div className='third-div'>
            <b>Category</b>
            <div className='filter-div'>
                <label htmlFor="sort-electronics">
                    <input checked={productState.checkBoxInput.includes("Electronics")} className='filter-checkbox' type="checkbox" value="Electronics" onChange={(event) => {
                        productDispatch( {type: "CHECKBOX_INPUT", payload: event.target.value})
                    }} id='sort-electronics' />
                    Electronics
                </label>
                <label htmlFor="sort-appliances">
                    <input checked={productState.checkBoxInput.includes("Appliances")} className='filter-checkbox' type="checkbox" value="Appliances" onChange={(event) => {
                        productDispatch( {type: "CHECKBOX_INPUT", payload: event.target.value})
                    }} id='sort-appliances' />
                    Appliances
                </label>
                <label htmlFor="sort-clothings">
                    <input checked={productState.checkBoxInput.includes("Cloths")} className='filter-checkbox' type="checkbox" value="Cloths" onChange={(event) => {
                        productDispatch( {type: "CHECKBOX_INPUT", payload: event.target.value})
                    }} id='sort-clothings' />
                    Clothings
                </label>
                <label htmlFor="sort-furniture">
                    <input checked={productState.checkBoxInput.includes("Furniture")} className='filter-checkbox' type="checkbox" value="Furniture" onChange={(event) => {
                        productDispatch( {type: "CHECKBOX_INPUT", payload: event.target.value})
                    }} id='sort-furniture' />
                    Furniture
                </label>
            </div>
        </div>
        <div className='fourth-div'>
            <b>Rating</b>
            <div className='filter-div'>
                <label htmlFor="four-star">
                    <input checked={productState.ratingInput === '4'} className='filter-checkbox' type="radio" name='filerByRating' id='four-star' value='4' onChange={(event) => {
                        productDispatch({ type: 'RATING_INPUT', payload: event.target.value })
                    }} />
                    4 Stars & below
                </label>
                <label htmlFor="three-star">
                    <input checked={productState.ratingInput === '3'} className='filter-checkbox' type="radio" name='filerByRating' id='three-star' value='3' onChange={(event) => {
                        productDispatch({ type: 'RATING_INPUT', payload: event.target.value })
                    }} />
                    3 Stars & below
                </label>
                <label htmlFor="two-star">
                    <input checked={productState.ratingInput === '2'} className='filter-checkbox' type="radio" name='filerByRating' id='two-star' value='2' onChange={(event) => {
                        productDispatch({ type: 'RATING_INPUT', payload: event.target.value })
                    }} />
                    2 Stars & below
                </label>
                <label  htmlFor="one-star">
                    <input checked={productState.ratingInput === '1'} className='filter-checkbox' type="radio" name='filerByRating' id='one-star' value='1' onChange={(event) => {
                        productDispatch({ type: 'RATING_INPUT', payload: event.target.value })
                    }} />
                    1 Stars & below
                </label>
            </div>
        </div>
    </aside>
    )
}

export default Sidebar
