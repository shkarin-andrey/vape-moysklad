import { ms } from "./moyskald";

const msContragents = async () => {
  const productsCollection = await ms.GET("entity/counterparty");

  const contragents = await productsCollection.rows.map((item: any) => {
    return {
      name: item.name,
      salesAmount: item.salesAmount,
      updated: item.updated,
      created: item.created,
      month0: {
        sum: 0,
        profit: 0,
        margin: 0,
      },
      month1: {
        sum: 0,
        profit: 0,
        margin: 0,
      },
      month2: {
        sum: 0,
        profit: 0,
        margin: 0,
      },
      month3: {
        sum: 0,
        profit: 0,
        margin: 0,
      },
      month4: {
        sum: 0,
        profit: 0,
        margin: 0,
      },
      month5: {
        sum: 0,
        profit: 0,
        margin: 0,
      },
    };
  });

  return contragents;
};

export default msContragents;
