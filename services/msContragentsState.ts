import { ms } from "./moyskald";

const msContragentsState = async (url: string) => {
  try {
    const profitCollection = await ms.GET(url);

    return profitCollection;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default msContragentsState;
