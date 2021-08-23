import { useState, useEffect } from "react";

export const useFetch = (url) => {
  if (!url) throw Error("Url is required");

  const [dataStore, setDataStore] = useState({
    data: null,
    isLoading: true,
  });

  useEffect(() => {
    (async () => {
      const res = await fetch(url);
      const data = await res.json();

      setDataStore({
        data: [...data],
        isLoading: false,
      });
    })();
  }, [url]);

  return dataStore;
};

/*
flag

name: "American Samoa

population: 57100
region: "Oceania"
capital: "Pago Pago"


details page :

nativeName: "American Samoa"
subregion: "Polynesia"
topLevelDomain: [".as"]
currencies: Array.code
languages: Array.name
borders: ["IDN"]
*/
