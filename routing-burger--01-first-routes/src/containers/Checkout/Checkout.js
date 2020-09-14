import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    // dummy state that will be replaced when we use routing later
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }
    // will eventually be used as a page with Router
    render() {
        return (
            <div>
                {/* where do we get our ingredients from to display here
                in the summary?
                pass a dummy ingredients object */}
                <CheckoutSummary ingredients={this.state.ingredients}/>
            </div>
        );
    }
}

export default Checkout;