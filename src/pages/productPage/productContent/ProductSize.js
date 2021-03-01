import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

ProductSize.propTypes = {
    
};

function ProductSize(props) {
    const {option} = props;
    const sizeList = Object.values(option);
    const { register, handleSubmit, errors } = useForm();
    const quantity = useSelector(state=>state.quantity);
    

    const onSubmit = data => {
        console.log(data);
        console.log(quantity);
    }
    console.log("errors", errors);

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
            <select defaultValue={'DEFAULT'} name="size" className="product-size__select" ref={register({ required: true })}>
                <option value="DEFAULT" className="product-size__option" disabled>Select your size</option>
                {renderSizelist()}
            </select>
            <input className="product-size__add-to-card" type="submit" value="Add to card"/>
        </form>
    );
}

export default ProductSize;