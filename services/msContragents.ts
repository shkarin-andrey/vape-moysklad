import { ms } from "./moyskald";
import msContragentsState from "./msContragentsState";

const msContragents = async () => {
  const contragents = [];

  const productsCollection = await ms.GET("entity/counterparty");

  for await (const item of productsCollection.rows) {
    if (item.state?.meta.href) {
      const contragentsState = await msContragentsState(item.state.meta.href);

      contragents.push({
        id: item.id,
        name: item.name,
        salesAmount: item.salesAmount,
        updated: item.updated,
        created: item.created,
        stateName: contragentsState.name || "",
        marginMonth0: 0,
        marginMonth1: 0,
        marginMonth2: 0,
        marginMonth3: 0,
        marginMonth4: 0,
        marginMonth5: 0,
        sumMonth0: 0,
        sumMonth1: 0,
        sumMonth2: 0,
        sumMonth3: 0,
        sumMonth4: 0,
        sumMonth5: 0,
      });
    }
  }

  return contragents;
};

export default msContragents;
