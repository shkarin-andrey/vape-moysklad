// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getEndMonth, getStartMonth } from "../../../services/moment";
import { msContragents, msProfit } from "../../../services/moyskald";

const mergeByProperty = (arrays: any[], property: string) => {
  const arr = arrays.flatMap((item) => item); //делаем из всех массивов - один

  const obj = arr.reduce((acc, item) => {
    return {
      // делаем из массива - объект, чтобы повторения перезаписывались
      ...acc,
      [item[property]]: { ...acc[item[property]], ...item },
    };
  }, {});

  return Object.values(obj); //обратно преобразуем из объекта в массив
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const contragents = await msContragents();

    const months = [0, 1, 2, 3, 4, 5];
    const profit = [];

    for await (const iterator of months) {
      const data = await msProfit(
        getStartMonth(iterator),
        getEndMonth(iterator),
        `month${iterator}`
      );
      profit.push(...data);
    }

    const data = await mergeByProperty([contragents, profit], "name");

    const allSum = data.reduce((previousValue: number, currentValue: any) => {
      return previousValue + (currentValue?.month0?.sum || 0);
    }, 0);

    const totalSum = new Intl.NumberFormat("ru-RU").format(allSum);

    res.status(200).json({ data, totalSum });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}
