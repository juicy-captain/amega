import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useState } from "react";

const loader = new Loader({
  apiKey: process.env.REACT_APP_MAPS_API_KEY as string,
  version: "weekly",
  libraries: ["places"],
});

export function useMapLoad() {
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    loader
      .load()
      .then(() => {
        setLoadMap(true);
      })
      .catch((e) => {
        console.error(
          "Sorry, something went wrong: Please try again later. Error:",
          e,
        );
      });
  }, []);

  return loadMap;
}
