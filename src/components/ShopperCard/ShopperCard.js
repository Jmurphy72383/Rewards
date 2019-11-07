import React from 'react';
import './ShopperCard.css';

function ShopperCard(props) {

    const tallyPoints = arr => {
        //Block scope variables
        const floorArray = [];
        const twoPoint = [];
        const onePoint = [];
        let bigPoints = 0;
        let littlePoints = 0;
        let totalPoints = 0;
        
        //Mapping through the passed in array and flooring all values and storing in floorArray
        arr.map(price => {
            floorArray.push(Math.floor(price))
        });
        
        //Mapping through floorArray and pushing values to arrays based on their value
        floorArray.map(price => {
            //Transactions over $100 are pushed into twoPoint Array
            if(price > 100) {
                twoPoint.push(price)
            }
            //Transactions between 51 and 100 are pushed into the onePoint Array
            if(price > 50 && price <= 100) {
                onePoint.push(price)
            }
        });

        //Iterating through array and calculating points and adding them to bigPoints total
        twoPoint.forEach(price => {
            let result = ((price - 100) * 2) + 50;
            bigPoints += result;
            return bigPoints;
        });
        //Iterating through array and calculating points and adding them to littlePoints total
        onePoint.forEach(price => {
            let result = (price - 50) * 1;
            littlePoints += result;
            return littlePoints;
        });

        //Adding up the values in bigPoints and littlePoints to return total points earned
        totalPoints = bigPoints + littlePoints;
        return totalPoints;
    };

    const totalPoints = obj => {
        //Storing the values of the passes in object in prices (An array of arrays)
        let prices = Object.values(obj);
        //Flattening the array of arrays into 1 array stored in pricesConcat variable
        let pricesConcat = prices.flat(Infinity);
        //Calling the tallyPoints function and passing in the pricesConcat array
        return tallyPoints(pricesConcat);
    }

    return (
        <div className="sh-card-wrapper">
            {props.customers.map(customers => (
                <div key={customers.id} className="sh-card">
                    <h2>Shopper Name: {customers.name}</h2>
                    <h4>Month 1 Points: {tallyPoints(customers.transactions.month1)}</h4>
                    <h4>Month 2 Points: {tallyPoints(customers.transactions.month2)}</h4>
                    <h4>Month 3 Points: {tallyPoints(customers.transactions.month3)}</h4>
                    <h4>Total Points: {totalPoints(customers.transactions)}</h4>
                </div>
            ))}
        </div>
    )
}

export default ShopperCard;