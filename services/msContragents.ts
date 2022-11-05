import { ms } from "./moyskald";

const msContragents = async () => {
  const productsCollection = await ms.GET("entity/counterparty");

  const contragents = productsCollection.rows.map((item: any) => {
    return {
      name: item.name,
      salesAmount: item.salesAmount,
      updated: item.updated,
      created: item.created,
    };
  });

  return contragents;
};

export default msContragents;
