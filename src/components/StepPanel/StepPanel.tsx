import React, { FC } from "react";
import { useAppSelector } from "../../hooks/redux";
import { Step } from "../Step/Step";
import classes from "./StepPanel.module.scss";

export const StepPanel: FC = () => {
  const { steps } = useAppSelector((s) => s.maze);
  return (
    <div className={classes.root}>
      {steps.map((step) => (
        <Step key={step.id} step={step} />
      ))}
    </div>
  );
};
