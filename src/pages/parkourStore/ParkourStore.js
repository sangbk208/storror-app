import './parkour-store.css'
import React, { useEffect } from 'react';
import StoreHeader from './storeHeader/StoreHeader';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../../common/product/ProductItem';
import { fetchCategory } from '../../redux/actions/category';
import { fetchProducts } from '../../redux/actions/products';


ParkourStore.propTypes = {
    
};

function ParkourStore(props) {
    const products = Object.values(useSelector(state=>state.products));
    const category = Object.values(useSelector(state=>state.category));
    const dispatch = useDispatch();
    const type = props.location.pathname.split("/")[2];

    useEffect(()=>{
        !type? dispatch(fetchProducts()): dispatch(fetchCategory(type));
    },[dispatch, type]);

    return (
        <div className="parkout-store">
            <StoreHeader/>
            <div className="parkout-store__product-list">
                <div className="grid wide">
                    <ProductItem products={!type?products:category}/>
                </div>
            </div>
        </div>
    );
}

export default ParkourStore;