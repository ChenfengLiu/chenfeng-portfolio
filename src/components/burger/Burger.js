import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './burgerIngredient/BurgerIngredient';

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingKey => {
      return [...Array(props.ingredients[ingKey])].map((_, i) => {
        return <BurgerIngredient key={ingKey + i} type={ingKey} />
      });
    })
    .reduce((preValue, curValue) => {
      return preValue.concat(curValue);
    }, []);
  // console.log(transformedIngredients);

  if(transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
