import { TableData } from "./TableProfit.interface";

export const createData = (
  name: string,
  sum: number,
  fat: number,
  margin: number,
  protein: number
): TableData => {
  return {
    name,
    sum,
    fat,
    margin,
    protein,
  };
};
