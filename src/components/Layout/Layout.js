import React from "react";
import Aux from "../../hoc/AuxComponent";
import classes from "./Layout.css";

const layout = props => {
  console.log("Layout log", props);
  return (
    <Aux>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  );
};

export default layout;
