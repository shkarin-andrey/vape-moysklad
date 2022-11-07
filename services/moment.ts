import moment from "moment";

export const getStartMonth = (monthId: number) => {
  return moment()
    .subtract(monthId, "months")
    .startOf("month")
    .format("YYYY-MM-DD HH:mm");
};
export const getEndMonth = (monthId: number) => {
  return moment()
    .subtract(monthId, "months")
    .endOf("month")
    .format("YYYY-MM-DD HH:mm");
};
