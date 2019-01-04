import React, { Component } from 'react';

import Aux from '../../hoc/aux/Aux';
import Burger from '../../components/burger/Burger';
import BuildControls from '../../components/burger/buildControls/BuildControls';
import Modal from '../../components/ui/modal/Modal';
import OrderSummary from '../../components/burger/orderSummary/OrderSummary';
import Spinner from '../../components/ui/spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.6,
  meat: 1.2,
  bacon: 0.8
};

class BurgerBuilder extends Component {

  state = {
    totalPrice: 0,
    ingredients: null,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: null
  }

  updatePurchasable(newIngredients) {

    //get sum of ingredients
    const sum = Object.keys(newIngredients)
      .map(ingKey => {
        return newIngredients[ingKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({purchasable: sum > 0});
  }

  addIngredientHandler = (type) => {
    //increament ingredient count
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const newIngredients = {...this.state.ingredients};
    newIngredients[type] = newCount;

    //add ingredient price to total price
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    //update state with new price and ingredients
    this.setState({totalPrice: newPrice, ingredients: newIngredients});
    this.updatePurchasable(newIngredients);
  }

  removeIngredientHandler = (type) => {
    //increament ingredient count
    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0) return;

    const newCount = oldCount - 1;
    const newIngredients = {...this.state.ingredients};
    newIngredients[type] = newCount;

    //add ingredient price to total price
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;

    //update state with new price and ingredients
    this.setState({totalPrice: newPrice, ingredients: newIngredients});
    this.updatePurchasable(newIngredients);
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  purchaseContinueHandler = () => {
    // alert('You Continue!!!');
    this.setState({loading: true});
    //Not safe to calculate the price in client!
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice.toFixed(2),
      customer: {
        name: 'Chenfeng Liu',
        address: {
          street: '130 Ash St',
          zipCode: '02453',
          country: 'USA'
        },
        email: 'chenfengliu.work@gmail.com'
      },
      deliveryMethod: 'fastest'
    };

    axios.post('/orders.json', order)
      .then(response => {
        this.setState({loading: false, purchasing: false});
      })
      .catch(error => {
        this.setState({loading: false, purchasing: false});
      });
  }

  //fetch ingredients from server
  componentDidMount() {
    axios.get('/ingredients.json')
      .then(response => {
        this.setState({ingredients: response.data});
      })
      .catch(error => {
        this.setState({error: true});
      });
  }

  render() {

    const disabledInfo = {
      ...this.state.ingredients
    };
    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    let orderSummary = null;

    //check if ingredients loaded
    let burgerUI = this.state.error ? <p>Burger Ingredients Not Found! </p> : <Spinner />;

    if(this.state.ingredients){
      burgerUI = (
        <Aux>
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}/>
        </Aux>
      );
      orderSummary = <OrderSummary
        ingredients={this.state.ingredients}
        purchaseCanceled={this.purchaseCancelHandler}
        purchaseContinue={this.purchaseContinueHandler}
        price={this.state.totalPrice}/>;
    }

    //check if checkout is Loading
    if(this.state.loading){
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burgerUI}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
