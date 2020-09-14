import React from 'react';

import classes from './Order.css';

// output the ingredients and the price
const order = ( props ) => {
    const ingredients = [];

    for ( let ingredientName in props.ingredients ) {
        // use the ingredients array and push this ingredient object onto it
        ingredients.push(
            { // this is the ingredient object that is being pushed onto 
              // the ingredients array
                name: ingredientName, // this is the ingredient name, i.e. meat, bacon, etc.
                amount: props.ingredients[ingredientName]
            }
        );
    }

    // ingredients are an object
    // we need an array to loop through them and output them
    // then map the ingredients array (of objects) from above to text 
    const ingredientOutput = ingredients.map(ig => {
        return <span 
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
                }}
            key={ig.name}>
                {ig.name} ({ig.amount})
               </span>;
    });

    // what this was without the styling
    /*     <span key={ig.name}> {ig.name} ({ig.amount}) </span>; */
    

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            {/*convert the string price we get from props.price into a number  */}
            <p>Price: <strong>USD {Number.parseFloat( props.price ).toFixed( 2 )}</strong></p>
        </div>
    );
};

export default order;