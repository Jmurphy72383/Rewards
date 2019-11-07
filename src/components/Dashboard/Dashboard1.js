import React from 'react';
import customers from '../../Data/customers.json';
import ShopperCard from '../ShopperCard/ShopperCard';

function Dashboard1(props) {
    return (
        <div>
            <button
                onClick={() => renderShopperCards()}
            >
                Show Customer Rewards
            </button>

        </div>
    )
}

export default Dashboard1;