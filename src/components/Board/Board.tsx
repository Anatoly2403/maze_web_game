import React, { FC } from "react";
import { useAppSelector } from "../../hooks/redux";
import { Cell } from "../Cell";
import classes from "./Board.module.scss";

export const Board: FC = () => {
  const { cells } = useAppSelector((s) => s.maze);
  return (
    <div className={classes.root}>
      {cells.map((cell) => (
        <Cell key={cell.id} cell={cell} />
      ))}
    </div>
  );
};
