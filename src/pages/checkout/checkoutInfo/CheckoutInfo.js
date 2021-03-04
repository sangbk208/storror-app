import React from 'react';
import './checkout-info.css';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { orderCart } from '../../../redux/actions/cart';


CheckoutInfo.propTypes = {
    
};

function CheckoutInfo(props) {
    const {checkoutProducts} = props;

    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        if (checkoutProducts.length === 0){
            toast.error("No products have been selected");
        }else{
            toast.success("Order successfully placed");
            dispatch(orderCart());
            document.getElementById("myForm").reset();
        }
    }

    const renderError = (error) =>{
        return (
            <div className="checkout-info__error">
                <i className="checkout-info__error-icon fas fa-exclamation-triangle"></i>
                {error}
            </div>
        );
    };

    return (
            <form id="myForm" className="checkout-info" onSubmit={handleSubmit(onSubmit)}>
                <ToastContainer autoClose={3000}/>
                <span className="checkout-info__title">Contact information</span>
                {/* email */}
                <input className="checkout-info__input checkout-info__input-email" type="text" placeholder="Email" name="email" 
                        ref={register({required: "Email is required", pattern: {value: /^\S+@\S+$/i, message: "Please enter correct email format"} })} />
                {errors.email && renderError(errors.email.message)}
                <span className="checkout-info__title checkout-info__title-shipping">Shipping address</span>
                {/* name */}
                <input className="checkout-info__input" type="text" placeholder="First name" name="firstname" ref={register({required: "First name is required"})} />
                {errors.firstname && renderError(errors.firstname.message)}
                <input className="checkout-info__input" type="text" placeholder="Last name" name="lastname" ref={register({required: "Last name is required"})} />
                {errors.lastname && renderError(errors.lastname.message)}
                {/* phone */}
                <input className="checkout-info__input" type="tel" placeholder="Phone" name="phone" 
                    ref={register({required: "Phone is required",  
                    pattern: {value: /^[0-9\b]+$/, message: "Please enter correct phone number"} })}/>
                {errors.phone && renderError(errors.phone.message)}
                {/* address */}
                <input className="checkout-info__input" type="text" placeholder="Address" name="address" ref={register({required: "Address is required"})}/>
                {errors.address && renderError(errors.address.message)}
                <input className="checkout-info__input checkout-info__input-submit" type="submit" value="Coutinue to shipping"/>
            </form>
    );
}

export default CheckoutInfo;