import { types } from "../context/types";

export const getCountries = async (url, dispatch) => {
  try {
    const res = await fetch(url);

    const data = await res.json();

    dispatch({
      type: types.setCountryList,
      payload: data,
    });

    localStorage.setItem("countryList", JSON.stringify(data));
  } catch (error) {
    console.error("Error in fetching", error);
  }
};
