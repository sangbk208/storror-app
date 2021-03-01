import React, { useEffect, useState } from 'react';
import { updateQuantity } from '../../../redux/actions/quantity';
import { useDispatch } from 'react-redux';
import './product-content.css';

ProductQuantity.propTypes = {
    
};

function ProductQuantity(props) {
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();

    useEffect(()=>{ 
        dispatch(updateQuantity(count));
    },[count, dispatch]);

    const handleOnchage=(e)=>{
        const {value} = e.target;
        if ((!value) || (parseInt(value)<1)) {
            setCount(1)
        } else {
            setCount(parseInt(value))
        }
    }
    return (
        <div className="product-quantity">
            <span className="product-quantity__title">Quantity:</span>
            <input onChange={handleOnchage} value={String(count)} className="product-quantity__input"  type="number"></input>
        </div>
    );
}

export default ProductQuantity;