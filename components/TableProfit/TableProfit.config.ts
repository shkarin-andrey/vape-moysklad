import { HeadCell } from "./TableProfit.interface";

export const headCells: readonly HeadCell[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Контрагент",
  },
  {
    id: "sum",
    numeric: true,
    disablePadding: false,
    label: "Настоящий месяц, руб.",
  },
  {
    id: "fat",
    numeric: true,
    disablePadding: false,
    label: "План по продажам, руб.",
  },
  {
    id: "margin",
    numeric: true,
    disablePadding: false,
    label: "Рентабельность, %",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "Protein (g)",
  },
];
