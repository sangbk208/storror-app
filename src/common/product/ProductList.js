import React, { useEffect } from 'react';
import ProductItem from './ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/actions/products';

ProductList.propTypes = {
    
};

function ProductList(props) {
    const products = Object.values(useSelector(state=>state.products));
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchProducts());
    },[dispatch]);
    
    return (
        <div className="grid wide">
            <ProductItem products={products}/>
        </div>
    );
}

export default ProductList;