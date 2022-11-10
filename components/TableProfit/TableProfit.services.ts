import { IMoySklad } from "./../../util/interfaces/moysklad.interface";
import { Order } from "./TableProfit.interface";

export const getColorStatus = (state: IMoySklad["stateName"]) => {
  console.log(state);

  switch (state.toLowerCase()) {
    case "максим":
      return "bg-[#e68116]";
    case "никитос":
      return "bg-[#a466bd]";
    case "не берет":
      return "bg-[#00499a]";
    case "старшина":
      return "bg-[#009fe3]";
    case "поставщик":
      return "bg-[#999999]";
    case "вадим":
      return "bg-[#a2c617]";
    case "розница":
      return "bg-[#e92919]";
    case "владик":
      return "bg-[#8d1430]";

    default:
      return "";
  }
};

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
