import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: null,
        price: 0
    }

    // before we render the child component...
    componentWillMount () {
        const query = new URLSearchParams( this.props.location.search );
        const ingredients = {};
        let price = 0;
        for ( let param of query.entries() ) {
            // ['salad', '1']
            // need to pass the totalPrice from BB
            // and attach to this array with ingredients as well
            // kind of a workaround
            if (param[0] === 'price') { 
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        // set the price here and get it in the Checkout component
        // so it can be passed on, to ContactData f.eks.
        this.setState( { ingredients: ingredients, totalPrice: price } );
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace( '/checkout/contact-data' );
    }

    render () {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler} />
                {/* nested routing
                load the contact data here
                this.props.match.path = this will grab the URL of the path
                we are currently on */}
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    // since we render the component this way manually, we can pass props to it
                    // to pass on the ingredients (this.state.ingredients)
                    // render() takes a method
                    // ...props will pass on all props
                    // such as history, which we need in the ContactData
                    render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props} />)} />
            </div>
        );
    }
}

export default Checkout;