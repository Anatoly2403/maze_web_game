import React, { FC } from "react";
import { ICell } from "../../types/interfaces";
import classes from "./Cell.module.scss";

interface IProps {
  cell: ICell;
}

export const Cell: FC<IProps> = ({ cell: { isStarting, selected } }) => {
  const cls = [classes.root, ...(selected ? [classes.root_selected] : [])];
  return (
    <div className={cls.join(" ")}>{isStarting && <span>Start</span>}</div>
  );
};
