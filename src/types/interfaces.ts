import { EDirection } from "./enums";

export interface ICell {
  id: number;
  selected: boolean;
  isStarting: boolean;
  possibleWay: EDirection[]
}

export interface IStep {
  id: number;
  direction?: EDirection;
}

export interface IMazeState {
  cells: ICell[];
  steps: IStep[];
}
