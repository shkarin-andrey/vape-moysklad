import "isomorphic-fetch";
import Moysklad from "moysklad";
import msContragents from "./msContragents";
import msProfit from "./msProfit";

const ms = Moysklad({
  token: process.env.MOYSKLAD_TOKEN,
  apiVersion: "1.2",
});

export { ms, msContragents, msProfit };
