import { useState, useEffect } from "react";
import axios from "axios";

export const useAxios = (url) => {
  if (!url) throw new Error("Missing parameter url");

  const [dataRetrieved, setDataRetrieved] = useState({
    data: null,
    isLoading: true,
  });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(url);

        setDataRetrieved((prev) => ({ ...prev, data: data }));
      } catch (error) {
        throw new Error(`An error has just ocurred ${error} `);
      } finally {
        setDataRetrieved((prev) => ({ ...prev, isLoading: false }));
      }
    })();
  }, [setDataRetrieved, url]);

  return dataRetrieved;
};
