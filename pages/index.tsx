import { FC } from "react";
import Layout from "../components/Layout";
import TableProfit from "../components/TableProfit";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Home: FC = () => {
  const [data = [], setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/moysklad")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      {isLoading && (
        <div className="flex justify-center items-center w-full">
          <CircularProgress />
        </div>
      )}
      {data && data.totalSum && (
        <div className="mb-5 flex item-center gap-3">
          <div className="text-xl text-gray-600 text-medium">
            В этом месяце продано на:
          </div>
          <div className="font-bold text-2xl">{data.totalSum}₽</div>
        </div>
      )}
      {data && data.data && <TableProfit rows={data.data} />}
    </Layout>
  );
};

export default Home;
