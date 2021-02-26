import React, { useState } from 'react';
import './product-img.css';

ProductImg.propTypes = {
    
};

function ProductImg(props) {
    const {images} = props;
    const [order, setOrder] = useState(images[1]);
    const imgList = Object.values(images);

    const handleClickImg = (img) =>{
        setOrder(img);
    }
    
    const renderListimg = () =>{
        return imgList.map((img) => {
            return (
                <li onClick={()=>handleClickImg(img)} key={img} className="product-img__item" style={{"backgroundImage": `url(${img})`}}></li>
            );
        });
    }

    return (
        <div className="product-img">
            <div className="product-img__thumbnail" style={{"backgroundImage": `url(${order})`}}></div>
            <ul className="product-img__list">
                {renderListimg()}
            </ul>
        </div>
    );
}

export default ProductImg;