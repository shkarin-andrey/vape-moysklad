import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { FC } from "react";
import Layout from "../components/Layout";
import TableProfit from "../components/TableProfit";
import { IMoySkladProps } from "../util/interfaces/moysklad.interface";

const Home: FC<IMoySkladProps> = ({ data, totalSum }) => {
  return (
    <Layout>
      <div className="font-bold text-2xl mb-5">Прибыльность</div>

      {data && totalSum ? (
        <>
          <div className="mb-5 flex item-center gap-3">
            <div className="text-xl text-gray-600 text-medium">
              В этом месяце продано на:
            </div>
            <div className="font-bold text-2xl">{totalSum}₽</div>
          </div>
          <TableProfit rows={data} />
        </>
      ) : (
        <div className="flex justify-center items-center w-full">
          <CircularProgress />
        </div>
      )}
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.BASE_URL}/api/moysklad`);
  const data = await res.data;

  return {
    props: { data: data.data, totalSum: data.totalSum },
  };
};

export default Home;
