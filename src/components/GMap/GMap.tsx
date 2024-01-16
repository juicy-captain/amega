import { FC, useEffect, useRef, useState } from "react";
import { IUserInfo } from "../../types/types";

interface IProps {
  data: IUserInfo;
}

export const GMap: FC<IProps> = ({ data }) => {
  const googleMapRef = useRef<HTMLInputElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    const googleMap = initGoogleMap();
    setMap(googleMap);
  }, [data]);

  useEffect(() => {
    if (!map) return;

    new window.google.maps.Marker({
      position: {
        lat: data.latitude,
        lng: data.longitude,
      },
      map: map,
    });
  }, [map, data]);

  const initGoogleMap = () => {
    if (!data) return;

    return new window.google.maps.Map(googleMapRef.current as HTMLElement, {
      center: {
        lat: data.latitude,
        lng: data.longitude,
      },
      zoom: 12,
    });
  };

  return (
    <div
      ref={googleMapRef}
      style={{ width: "100%", height: "calc(100vh - 280px)" }}
    />
  );
};
