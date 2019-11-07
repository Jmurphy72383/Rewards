import React, { Component } from 'react';
import customers from '../../Data/customers.json';
import ShopperCard from '../ShopperCard/ShopperCard';

class Dashboard extends Component {
    state = {
        customers: customers
    };


    render() {
        return (
            <div>
                <ShopperCard 
                    customers={this.state.customers}
                />
            </div>
        )
    }
}

export default Dashboard;