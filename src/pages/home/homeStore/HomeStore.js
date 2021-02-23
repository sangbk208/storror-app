import React, { useEffect } from 'react';
import './home-store.css';
import homeStore from '../../../assets/img/home_store.png';

import ProductItem from '../../../common/product/ProductItem';
import { fetchProducts } from '../../../redux/actions/products';
import { useDispatch, useSelector } from 'react-redux';

HomeStore.propTypes = {
    
};

function HomeStore(props) {
    const products = Object.values(useSelector(state=>state.products)).slice(4, 8);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchProducts());
    },[dispatch]);

    return (
        <div className="home-store" style={{"backgroundImage": `url(${homeStore})`}}>
            <div className="grid">
                <div className="row-product">
                    <ProductItem products={products}/>
                </div>
                <div className="home-store__view-store">
                    <a className="home-store__btn-link">VISIT STORE</a>
                    <i className="home-store__icon fas fa-long-arrow-alt-up"></i>
                </div>
            </div>    
        </div>
    );
}

export default HomeStore;