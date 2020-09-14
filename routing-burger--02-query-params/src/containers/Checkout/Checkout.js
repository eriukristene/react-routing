import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }

    // need to parse through queryParams of ingredients
    // whenever this component is loaded, it will mount itself
    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        // loop through the different query params
        for (let param of query.entries()) {
            // ['salad', '1'] THIS FORMAT
            // the + converts this to a number
            ingredients[param[0]] = +param[1];
        }
        // set the state of the ingredients here to the ingredients parsed from params
        this.setState({ingredients: ingredients});
    }

    // can use the history prop because this component is handled/loaded by
    // the Router
    // goes back to the previous page
    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    // the path that handles the contact data component
    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}/>
            </div>
        );
    }
}

export default Checkout;