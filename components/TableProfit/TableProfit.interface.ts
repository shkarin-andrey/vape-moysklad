export interface TableData {
  sum: number;
  margin: number;
  fat: number;
  name: string;
  protein: number;
}

export interface HeadCell {
  disablePadding: boolean;
  id: keyof TableData;
  label: string;
  numeric: boolean;
}
