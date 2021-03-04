import React, { useEffect } from 'react';
import './home-store.css';
import homeStore from '../../../assets/img/home_store.png';
import {Link} from 'react-router-dom';
import ProductItem from '../../../common/product/ProductItem';
import { fetchProducts } from '../../../redux/actions/products';
import { useDispatch, useSelector } from 'react-redux';

HomeStore.propTypes = {
    
};

function HomeStore(props) {
    const height = window.innerWidth;
    let products = Object.values(useSelector(state=>state.products)).slice(4, 8);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchProducts());
    },[dispatch]);

    if (height < 800){
        products = products.slice(1, 3);
    }

    return (
        <div className="home-store" style={{"backgroundImage": `url(${homeStore})`}}>
            <div className="grid">
                <div className="row-product">
                    <ProductItem products={products}/>
                </div>
                <div className="home-store__view-store">
                    <Link to="/parkour-store" className="home-store__btn-link">VISIT STORE</Link>
                    <i className="home-store__icon fas fa-long-arrow-alt-up"></i>
                </div>
            </div>    
        </div>
    );
}

export default HomeStore;