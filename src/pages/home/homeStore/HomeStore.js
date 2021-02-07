import React from 'react';
import homeStore from '../../../assets/img/home_store.png';
import ProductItem from '../../../common/product/ProductItem';
import './home-store.css';

HomeStore.propTypes = {
    
};

function HomeStore(props) {
    
    return (
        <div className="home-store" style={{"backgroundImage": `url(${homeStore})`}}>
            <div className="grid">
                <div className="row row-product">
                    <div className="col l-3">
                        <ProductItem/>
                    </div>
                    <div className="col l-3">
                        <ProductItem/>
                    </div>
                    <div className="col l-3">
                        <ProductItem/>
                    </div>
                    <div className="col l-3">
                        <ProductItem/>
                    </div>
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