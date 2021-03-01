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
                <img onClick={()=>handleClickImg(img)} key={img} className="product-img__item" src={`${img}`}/>
            );
        });
    }

    return (
        <div className="product-img">
            <img className="product-img__thumbnail" src={`${order}`}></img>
            <div className="product-img__list">
                {renderListimg()}
            </div>
            
        </div>
    );
}

export default ProductImg;