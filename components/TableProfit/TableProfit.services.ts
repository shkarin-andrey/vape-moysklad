import { TableData } from "./TableProfit.interface";

export const createData = (
  name: string,
  current: number,
  fat: number,
  margin: number,
  protein: number
): TableData => {
  return {
    name,
    current,
    fat,
    margin,
    protein,
  };
};
