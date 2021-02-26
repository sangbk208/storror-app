import React from 'react';
import './store-header.css';
import storeHeaderCover from '../../../assets/img/store-header.png' 

StoreHeader.propTypes = {
    
};

function StoreHeader(props) {
    const {title} = props;
    return (
        <div className="store-header" style={{"backgroundImage": `url(${storeHeaderCover})`}}>
            <span className="store-header__title">STORROR® {Boolean(title)?title.toUpperCase():"CLOTHING"}</span>
        </div>
    );
}

export default StoreHeader;