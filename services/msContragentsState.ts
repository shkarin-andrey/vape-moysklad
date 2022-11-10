import { ms } from "./moyskald";

const msContragentsState = async (url: string) => {
  try {
    const profitCollection = await ms.GET(url);

    return profitCollection;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export default msContragentsState;
