import './product-page.css';
import React, { useEffect } from 'react';
import ProductImg from './productImg.js/ProductImg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../redux/actions/products';
import ProductContent from './productContent/ProductContent';


ProductPage.propTypes = {
    
};

const handleName = (pathname) => {
    const name =  pathname.split("/")[2].toUpperCase().split('-');
    const index = name.indexOf("T");
    if (index !== -1){
        name.splice(3, 2);
        name.splice(3, 0, "T-SHIRT")
    }
    return name.join(' ');
};

function ProductPage(props) {
    const name = handleName(props.location.pathname);
    const product = Object.values(useSelector(state=>state.products)).filter(item=>item.name === name)[0];
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(fetchProduct(name));
    },[dispatch, name]);

    //  loading api
    if (!product){
        return (<div>
        
        </div>);
    }

    return (
        <div className="product-page">
            <div className="grid wide">
                <div className="row">
                    <div className="col l-6 m-6 c-12">
                        <ProductImg images={product.detail.images}/>
                    </div>
                    <div className="col l-6 m-6 c-12">
                        <ProductContent product={product}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;