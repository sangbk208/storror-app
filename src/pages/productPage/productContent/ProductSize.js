import React from 'react';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../redux/actions/cart';

ProductSize.propTypes = {
    
};

const newPrice = (price, quantity) =>{
    price = price.replace(' ','');
    price = price.replace('£','');
    price = price.replace(',','.');
    return Math.round((Number(price)*quantity) * 100) / 100;
};

function ProductSize(props) {
    const {option, product} = props;
    const sizeList = Object.values(option);
    const { register, handleSubmit, errors } = useForm();
    const quantity = useSelector(state=>state.quantity);
    const dispatch = useDispatch();
    
    const onSubmit = data => {
        const selectProduct={
                        product: product, 
                        option: data.size, 
                        quantity: quantity, 
                        idProduct: product.id, 
                        totalPrice: String(newPrice(product.price, quantity)) +" £"
                    };
        dispatch(addToCart(selectProduct));
        toast.success("Cart successfully updated");
    }

    const renderSizelist=()=>{
        return sizeList.map(item=>{
            return (
                <option className="product-size__option" key={item} value={item}>
                        {item}
                </option>
            );
        });
    };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="product-size">
            <ToastContainer autoClose={3000}/>
            <select defaultValue={""} 
                    name="size" className="product-size__select" 
                    ref={register({ required: "This input is required." })}>
                <option value="" disabled 
                        className="product-size__option">Select your size</option>
                {renderSizelist()}
            </select>
            {errors.size && <div className="product-size__error"><i className="product-size__error-icon fas fa-exclamation-triangle"></i>Please Select your size!</div>}
            <input className="product-size__add-to-card" type="submit" value="Add to card"/>
        </form>
    );
}

export default ProductSize;