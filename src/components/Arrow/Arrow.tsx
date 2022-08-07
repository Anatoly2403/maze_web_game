import React, { FC } from "react";
import classes from "./Arrow.module.scss";
import { EDirection } from "../../types/enums";

interface IProps {
  direction: EDirection;
}

export const Arrow: FC<IProps> = ({ direction }) => {
  const cls = [
    classes.root,
    ...(direction === EDirection.Up
      ? [classes.root_up]
      : direction === EDirection.Down
      ? [classes.root_down]
      : direction === EDirection.Left
      ? [classes.root_left]
      : []),
  ];

  return (
    <div className={cls.join(" ")}>
      <div className={classes.root__arrow} />
    </div>
  );
};
