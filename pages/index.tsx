import Layout from "../components/Layout";
import TableProfit from "../components/TableProfit";
import { createData } from "../components/TableProfit/TableProfit.services";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function Home() {
  const [data, setData] = useState(null);
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

  console.log(data);

  return (
    <Layout>
      {isLoading && (
        <div className="flex justify-center items-center w-full">
          <CircularProgress />
        </div>
      )}
      {data && <TableProfit rows={data} />}
    </Layout>
  );
}
