import React, { FC } from "react";
import { IStep } from "../../types/interfaces";
import { Arrow } from "../Arrow";
import classes from "./Step.module.scss";

interface IProps {
  step: IStep;
}

export const Step: FC<IProps> = ({ step: { direction } }) => {
  const cls = [classes.root, ...(!!direction ? [classes.root_active] : [])];
  return (
    <div className={cls.join(" ")}>
      {direction && <Arrow direction={direction} />}
    </div>
  );
};
