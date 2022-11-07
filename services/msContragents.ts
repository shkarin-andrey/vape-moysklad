import { ms } from "./moyskald";

const msContragents = async () => {
  const productsCollection = await ms.GET("entity/counterparty");

  const contragents = await productsCollection.rows.map((item: any) => {
    return {
      name: item.name,
      salesAmount: item.salesAmount,
      updated: item.updated,
      created: item.created,
      sum: 0,
      profit: 0,
      margin: 0,
    };
  });

  return contragents;
};

export default msContragents;
