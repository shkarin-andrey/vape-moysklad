// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
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
    const profit = await msProfit();

    const data = mergeByProperty([contragents, profit], "name");

    res.status(200).json(data);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}
