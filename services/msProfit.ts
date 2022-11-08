import { ms } from "./moyskald";

const msProfit = async (
  momentFrom: string,
  momentTo: string,
  month: string
) => {
  const profitCollection = await ms.GET("report/profit/bycounterparty", {
    momentFrom,
    momentTo,
  });
  const profit = profitCollection.rows.map((item: any) => {
    return {
      name: item.counterparty.name,
      [month]: {
        sum: item.sellSum / 100,
        profit: item.profit,
        margin: Math.round(item.margin * 10000) / 100,
      },
    };
  });

  return profit;
};

export default msProfit;
