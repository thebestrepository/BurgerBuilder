import React, {Component} from 'react';
import Aux from '../../hoc/AuxComponent';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  render (){
    return(
      <Aux>
        <Burger />
        <div>Build tools</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
