import React from "react";
import Aux from "../../hoc/AuxComponent";
import classes from "./Layout.css";
import Toolbar from '../Navigation/Tollbar/Toolbar';

const layout = props => {
  console.log("Layout log", props);
  return (
    <Aux>
      <Toolbar />
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  );
};

export default layout;
