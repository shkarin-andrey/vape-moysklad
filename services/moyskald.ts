import "isomorphic-fetch";
import MoyskladCore from "moysklad";
// @ts-ignore
import MoyskladQueue from "moysklad-extension-queue";
import msContragents from "./msContragents";
import msContragentsState from "./msContragentsState";
import msProfit from "./msProfit";

const Moysklad = MoyskladCore.compose(MoyskladQueue);

const ms = Moysklad({
  token: process.env.MOYSKLAD_TOKEN,
  apiVersion: "1.2",
  queue: true,
});

export { ms, msContragents, msProfit, msContragentsState };
