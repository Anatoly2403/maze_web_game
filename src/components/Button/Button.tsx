import React, { FC } from "react";
import classes from "./Button.module.scss";

interface IProps {
  label: string;
}

export const Button: FC<IProps> = ({ label }) => {
  return <button className={classes.root}>{label}</button>;
};
