import React from 'react';
import StoreHeader from './storeHeader/StoreHeader';

ParkoutStore.propTypes = {
    
};

function ParkoutStore(props) {
    return (
        <div className="parkout-store">
            <StoreHeader/>
            <div className="grid wide">

            </div>
        </div>
    );
}

export default ParkoutStore;