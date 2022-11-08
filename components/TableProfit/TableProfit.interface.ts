export interface HeadCell {
  disablePadding: boolean;
  id: TMoySklad;
  label: string;
  numeric: boolean;
}

export type Order = "asc" | "desc";

export type TMoySklad =
  | "name"
  | "month0['sum']"
  | "month1['sum']"
  | "month2['sum']"
  | "month3['sum']"
  | "month4['sum']"
  | "month5['sum']"
  | "month0['margin']";
