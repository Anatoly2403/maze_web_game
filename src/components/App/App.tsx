import React from "react";
import { Board } from "../Board";
import { Button } from "../Button";
import { StepPanel } from "../StepPanel";
import classes from "./App.module.scss";

export const App = () => {
  return (
    <div className={classes.root}>
      <Board />
      <StepPanel />
      <div className={classes.exitBtn}>
        <Button label='Выйти'/>
      </div>
    </div>
  );
};
