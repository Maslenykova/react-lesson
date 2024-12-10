import React, {Component} from 'react';
import CartTitle from './CartTitle';
import ProductsList from './ProductsList';


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
            const { cartItems } = this.state;
            const { userData } = this.props;
            const count = cartItems.length;
        
            return (
              <div className="column">
                <CartTitle userName={userData.firstName} count={count} />
                <ProductsList cartItems={cartItems} />
              </div>
        )
    }
   
}

export default ShoppingCart;