import { EDirection } from "../types/enums";
import { ICell, IStep } from "../types/interfaces";

export function randomNumber({
  min = 0,
  max = 9,
}: {
  min: number;
  max: number;
}) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

export function getPossibleWay(
  { height, width }: { height: number; width: number },
  cellNumber: number
): EDirection[] {
  if (height * width < cellNumber) return [];
  let count = 0;
  const ways: number[] = [];

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (count === cellNumber) {
        if (row - 1 >= 0) ways.push(EDirection.Up);
        if (col + 1 < height) ways.push(EDirection.Right);
        if (row + 1 < width) ways.push(EDirection.Down);
        if (col - 1 >= 0) ways.push(EDirection.Left);
      }
      count++;
    }
  }

  return ways;
}

export function generateCells(): ICell[] {
  const rand = randomNumber({ min: 0, max: 9 });
  return Array.from({ length: 9 }, (_, i) => ({
    id: i,
    selected: false,
    isStarting: rand === i,
    possibleWay: getPossibleWay({ height: 3, width: 3 }, i),
  }));
}

export function generateSteps(): IStep[] {
  return Array.from({ length: 10 }, (_, i) => ({
    id: i,
  }));
}
