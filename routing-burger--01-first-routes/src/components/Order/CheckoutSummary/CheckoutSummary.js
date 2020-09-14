import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

// show a preview of our burger and the cancel or continue buttons
const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            {/* preview the Burger component */}
            <div style={{width: '100%', margin: 'auto'}}>
                {/* pass the Burger props ingredient here */}
                <Burger ingredients={props.ingredients}/>
            </div>
            {/* Button has a btnType property
             expose the click property, and do something upon a click */}
            <Button 
                btnType="Danger"
                clicked>CANCEL</Button>
            <Button 
                btnType="Success"
                clicked>CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary;