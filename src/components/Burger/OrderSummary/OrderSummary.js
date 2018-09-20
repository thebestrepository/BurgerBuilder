import React from 'react';
import Aux from '../../../hoc/AuxComponent';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const summaryIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
        </li>
      )
    });
  return (
    <Aux>
      <h3>Your order</h3>
      <p>Burger with ingredients:</p>
      <ul>
        {summaryIngredients}
      </ul>
      <p>Continue with order?</p>
      <Button btnType="Success" clicked={props.ordered}>Order</Button>
      <Button btnType="Danger" clicked={props.canceled}>Cancel</Button>
    </Aux>
  );
};

export default orderSummary
