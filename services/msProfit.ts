import { ms } from "./moyskald";

const msProfit = async (
  momentFrom: string,
  momentTo: string,
  monthSum: string,
  monthMargin: string
) => {
  const profitCollection = await ms.GET("report/profit/bycounterparty", {
    momentFrom,
    momentTo,
  });
  const profit = profitCollection.rows.map((item: any) => {
    return {
      name: item.counterparty.name,
      [monthSum]: item.sellSum / 100,
      [monthMargin]: Math.round(item.margin * 10000) / 100,
    };
  });

  return profit;
};

export default msProfit;
