import CircularProgress from "@mui/material/CircularProgress";
import { FC, useEffect, useState } from "react";
import Layout from "../components/Layout";
import TableProfit from "../components/TableProfit";
import { IMoySkladProps } from "../util/interfaces/moysklad.interface";

const Home: FC = () => {
  const [msData, setMsData] = useState<IMoySkladProps>({
    data: [],
    totalSum: 0,
  });
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch("/api/moysklad")
      .then((res) => res.json())
      .then((data) => {
        setMsData(data);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <div className="font-bold text-2xl mb-5">Прибыльность</div>
      {msData.totalSum && !isLoading && (
        <div className="mb-5 flex item-center gap-3">
          <div className="text-xl text-gray-600 text-medium">
            В этом месяце продано на:
          </div>
          <div className="font-bold text-2xl">{msData.totalSum}₽</div>
        </div>
      )}
      {msData.data && !isLoading ? (
        <TableProfit rows={msData.data} />
      ) : (
        <div className="flex justify-center items-center w-full">
          <CircularProgress />
        </div>
      )}
    </Layout>
  );
};

export default Home;
