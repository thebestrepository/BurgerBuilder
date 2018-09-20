import React, { Component } from "react";
import Aux from "../../hoc/AuxComponent";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchaseable: false,
    purchasing: false
  };

  addIngredientHabdler = type => {
    const updatedCount = this.state.ingredients[type] + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHabdler = type => {
    let updatedCount = 0;
    if (this.state.ingredients[type] > 0) {
      updatedCount = this.state.ingredients[type] - 1;
    }
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum,el) => {
        return sum + el;
      })
      console.log('number of ingredient:' + sum);
    this.setState({purchaseable: sum > 0});
  }

  orderHandler = () => {
    this.setState({purchasing: true});
  }
  orderCancelHandler = () => {
    this.setState({purchasing: false});
  }

  orderConfirmHandler = () => {
    alert('Orderd!')
  }
  render() {
    const disabledInfo = {
      ...this.state.ingredients
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} backdropClicked = {this.orderCancelHandler}>
          <OrderSummary ingredients={this.state.ingredients} ordered={this.orderConfirmHandler} canceled={this.orderCancelHandler} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHabdler}
          ingredientRemoved={this.removeIngredientHabdler}
          disabledInfo={disabledInfo}
          price={this.state.totalPrice}
          ordered={this.orderHandler}
          purchaseable = {this.state.purchaseable}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
