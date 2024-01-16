import { Wrapper } from "./App.styled";
import { GMap } from "./components/GMap/GMap";
import { Search } from "./components/Search";
import { UserInfo } from "./components/UserInfo";
import { useIpInfo } from "./hooks/useIpInfo";
import { useMapLoad } from "./hooks/useMapLoad";

export const App = () => {
  const { data, getIpDetails } = useIpInfo();
  const loadMap = useMapLoad();

  return (
    <>
      <Wrapper>
        <Search ip={data?.ip!} update={getIpDetails} />
        <UserInfo data={data!} />
      </Wrapper>
      {loadMap && <GMap data={data!} />}
    </>
  );
};
