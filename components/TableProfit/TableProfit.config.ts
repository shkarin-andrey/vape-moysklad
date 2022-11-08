import { HeadCell } from "./TableProfit.interface";

export const headCells: readonly HeadCell[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Контрагент",
  },
  {
    id: "month5['sum']",
    numeric: true,
    disablePadding: false,
    label: "5 месяцев назад, руб.",
  },
  {
    id: "month4['sum']",
    numeric: true,
    disablePadding: false,
    label: "4 месяца назад, руб.",
  },
  {
    id: "month3['sum']",
    numeric: true,
    disablePadding: false,
    label: "3 месяца назад, руб.",
  },
  {
    id: "month2['sum']",
    numeric: true,
    disablePadding: false,
    label: "2 месяца назад, руб.",
  },
  {
    id: "month1['sum']",
    numeric: true,
    disablePadding: false,
    label: "Предыдущий месяц, руб.",
  },
  {
    id: "month0['sum']",
    numeric: true,
    disablePadding: false,
    label: "Текущий месяц, руб.",
  },
  {
    id: "month0['margin']",
    numeric: true,
    disablePadding: false,
    label: "Рентабельность, %",
  },
];
