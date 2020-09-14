import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    // only want to fetch orders when this is loaded
    componentDidMount() {
        // getting back a JS object
        // then want to turn the Orders object into an array
        // get back pairs where it is a key and a object of ingredients
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = [];
                // res.data has the data from our database
                // HERE turn the Orders object into an array
                // key (id of the order) and value (value is the order, which is the burger they ordered)
                
                // will push a new object onto the fetchedOrders array
                // that is: distribute the properties of the order object
                // fetched from firebase
                // with the spread operator
                // and add one new property, id, which is the key

                // here we will then have an array of our fetched order objects
                // that are also aware of their ids
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({loading: false, orders: fetchedOrders});
            })
            .catch(err => {
                this.setState({loading: false});
            });
    }

    render () {
        return (
            <div>
                {/* map this array into an array of JSX elements
                in this case, an Order component*/}
                {this.state.orders.map(order => (
                    <Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price} />
                ))}
            </div>
        );
    }
}

// higher order component, to handle errors
export default withErrorHandler(Orders, axios);