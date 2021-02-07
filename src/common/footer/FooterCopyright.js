import React from 'react';
import './footer.css';

FooterCopyright.propTypes = {
    
};

function FooterCopyright(props) {
    return (
        <div className="col l-12">
            <em className="footer__copyright-text">Parkour is considered to be an extreme sport and can be hazardous. The videos we produce feature members of the STORROR<sup>®</sup> team of professional parkour athletes, who have each been training for more than twelve years, and other very experienced practitioners. You must not attempt to copy any stunts or manoeuvres or other activities performed in our videos.</em>
            <p className="footer__copyright-text">© 2020 Storror Ltd | <em>STORROR<sup>®</sup></em> is a trading name of Storror Limited, 15-17 Middle Street, Brighton, BN1 1AL, UK | phone: <a href="tel:+441273007811" className="footer__copyright-link">01273 007811</a></p>
            <p className="footer__copyright-text">Registered in England company number: 8849509 | VAT registration number: GB223807520</p>
        </div>
    );
}

export default FooterCopyright;