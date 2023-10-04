import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resid) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resid);
    const json = await data.json();

    setResInfo(json.data);
    // console.log(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
