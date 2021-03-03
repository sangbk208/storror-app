import React from 'react';
import './product-content.css';
import ProductQuantity from './ProductQuantity';
import ProductSize from './ProductSize';


ProductContent.propTypes = {
    
};

function ProductContent(props) {
    const {product} = props;
    const descriptionList =  Object.values(product.detail.description);
    const renderDescription = () =>{
        return descriptionList.map(item => {
            return(
                <li key={item} className="product-content__description-item">
                    <span className="product-content__description">{item}</span>
                </li>
            );
        });
    }
    return (
        <div className="product-content">
            <span className="product-content__name">{product.name}</span>
            <span className="product-content__price">{product.price}</span>
            <span className="product-content__intro">{product.detail.intro}</span>
            <ul className="product-content__description-list">
                {renderDescription()}
            </ul>
            <ProductQuantity/>
            <ProductSize option={product.detail.option} product={product}/>
        </div>
    );
}

export default ProductContent;