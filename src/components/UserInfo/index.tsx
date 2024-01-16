import { FC } from "react";
import { IUserInfo } from "../../types/types";
import { BlockTitle, UserInfoBlock, UserInfoWrapper } from "./styled";

interface IProps {
  data: IUserInfo;
}

export const UserInfo: FC<IProps> = ({ data }) => {
  return (
    <UserInfoWrapper>
      <UserInfoBlock>
        <BlockTitle>IP Address</BlockTitle>
        <span>{data?.ip}</span>
        <span>{data?.type}</span>
      </UserInfoBlock>
      <UserInfoBlock>
        <BlockTitle>Location</BlockTitle>
        <span>
          {`${data?.continent}, ${data?.country}, ${data?.region}, ${data?.city}, ${data?.postal}`}
        </span>
      </UserInfoBlock>
      <UserInfoBlock>
        <BlockTitle>Timezone</BlockTitle>
        <span>{`UTC ${data?.timezone.utc}`}</span>
      </UserInfoBlock>
      <UserInfoBlock>
        <BlockTitle>ISP</BlockTitle>
        <span>{data?.connection.isp}</span>
        <span>{data?.connection.domain}</span>
      </UserInfoBlock>
    </UserInfoWrapper>
  );
};
