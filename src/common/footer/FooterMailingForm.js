import React from 'react';
import './footer.css';
import { useForm } from "react-hook-form";

FooterMailingForm.propTypes = {
    
};

function FooterMailingForm(props) {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="col l-6">
            <div className="footer__mailing-form hide-on-mobile-tablet">
                <span className="footer__mailing-form-title">NEWSLETTER: GET UPDATES AND OFFERS STRAIGHT TO YOUR INBOX!</span>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="footer__input-name">
                        <input placeholder="FIRST NAME" name="firstName" ref={register} className="footer__input"/>
                        <input placeholder="LAST NAME" name="lastName" ref={register} className="footer__input"/>
                    </div>
                    <input placeholder="EMAIL ADDRESS" name="email" ref={register} className="footer__input footer__input--email"/>
                    <input className="footer__submit" type="submit" value="SEND"/>
                </form>
            </div>
        </div>
    );
}

export default FooterMailingForm;