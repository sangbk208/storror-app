import './product.css';
import React from 'react';
import {Link} from 'react-router-dom';

ProductItem.propTypes = {
    
};

function ProductItem(props) {
    const {products} = props;
    
    const renderList = () =>{
        return products.map(product=>{
                return (
                    <div key={product.id} className="col l-3">
                        <Link to={`/products/${product.name.toLowerCase().split(' ').join('-')}`} className="product-item">
                            <div className="product-item__img" style={{"backgroundImage": `url(${product.thumbnail})`}}></div>
                            <footer className="product-item__footer-info">
                                <span className="product-item__name">{product.name}</span>
                                <span className="product-item__price">{product.price}</span>
                            </footer>
                        </Link>
                    </div>
                );
            });
    };

    return (
        <div className="row">
            {renderList()}
        </div>
    );
}

export default ProductItem;