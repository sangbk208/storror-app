import React from 'react';
import './footer.css';
import FooterCopyright from './FooterCopyright';
import FooterMailingForm from './FooterMailingForm';
import FooterMenuLeft from './FooterMenuLeft';
import FooterMenuRight from './FooterMenuRight';

Footer.propTypes = {
    
};

function Footer(props) {
    return (
        <div className="footer">
            <div className="grid wide">
                <div className="row no-gutters footer-container">
                    <FooterMenuLeft/>
                    <FooterMenuRight/>
                    <div className="col l-2">
                        <div className="footer__none"></div>
                    </div>
                    <FooterMailingForm/>
                </div>

                <div className="row no-gutters footer-container-copyright">
                    <FooterCopyright/>
                </div>
            </div>
        </div>
    );
}

export default Footer;