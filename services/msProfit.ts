import { ms } from "./moyskald";

const msProfit = async () => {
  const date = new Date();
  const getYear = date.getFullYear();
  const currentmonth = date.getMonth() + 1;
  const nextmonthfirstday = new Date(getYear, 1, 1);

  const profitCollection = await ms.GET("report/profit/bycounterparty");
  const profit = profitCollection.rows.map((item: any) => {
    return {
      name: item.counterparty.name,
      sum: item.sellSum / 100,
      profit: item.profit,
      margin: Math.round(item.margin * 10000) / 100,
    };
  });

  return profit;
};

export default msProfit;
