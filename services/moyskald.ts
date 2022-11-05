import "isomorphic-fetch";
import Moysklad from "moysklad";
import msContragents from "./msContragents";
import msProfit from "./msProfit";

const ms = Moysklad({
  login: process.env.MOYSKLAD_LOGIN,
  password: process.env.MOYSKLAD_PASSWORD,
  apiVersion: "1.2",
});

export { ms, msContragents, msProfit };
