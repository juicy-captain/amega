import axios from "axios";
import { useEffect, useState } from "react";
import { IUserInfo } from "../types/types";

export function useIpInfo() {
  const [data, setData] = useState<IUserInfo>();

  async function getUserData(url: string = "") {
    try {
      const response = await axios.get<IUserInfo>(
        `http://ipwho.is/${url}?output=json`,
      );
      setData(response.data);
    } catch (e) {
      console.error(
        "Sorry, something went wrong: Please try again later. Error:",
        e,
      );
    }
  }

  function getIpDetails(url: string) {
    getUserData(url);
  }

  useEffect(() => {
    getUserData();
  }, []);

  return { data, getIpDetails };
}
