import { useState, useEffect } from "react";
import axios from "axios";

export const useAxios = (url) => {
  if (!url) throw new Error("Missing parameter url");

  const [dataRetrieved, setDataRetrieved] = useState({
    data: null,
    isLoading: true,
  });

  const setProp = (prop, value) =>
    setDataRetrieved((prev) => ({ ...prev, [prop]: value }));

  useEffect(() => {
    (async () => {
      try {
        await axios
        .get(url)
        .then(({ data }) => setProp("data", data));

      } catch (error) {
        console.log(error);
        
      } finally {
        setProp("isLoading", false);
      }
    })();
  }, [url]);

  return dataRetrieved;
};
