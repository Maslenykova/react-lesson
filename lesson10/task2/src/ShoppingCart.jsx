import React, {Component} from 'react';
import CardTitle from './CardTitle';
import ProductaList from './ProductsList';


class ShoppingCart extends Component{
        state = {
            cartItems: [{
                id: '1',
                name: 'iPhone 11',
                price: 999,
            },
            {
                id: '2',
                name: 'iPad Pro',
                price: 799,
            },
            ]
        }
        render(){
            const count = this.state.cartItems.length;
        return(
            <div className="column">
                <CardTitle 
                userName={this.props.userData.firstName}
                count={count}/>
                <ProductaList cartItems={this.state.cartItems}/>
            </div>
        )
    }
   
}

export default ShoppingCart;