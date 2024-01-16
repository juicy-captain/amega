import styled from "styled-components";

export const UserInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 230px);
  background: #fff;
  border-radius: 8px;
  padding-bottom: 20px;
  box-shadow: 0 2px 5px 2px #cacaca;
  padding: 0;
  max-width: fit-content;
  padding: 20px 30px;
`;
export const UserInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 20px;

  & span {
    font-weight: 700;
  }
  &:last-child {
    padding-right: 0;
  }
  &:first-child {
    padding-left: 0;
  }

  &:not(:last-child) {
    &::after {
      content: "";
      position: absolute;
      right: 0;
      width: 1px;
      height: 80px;
      background: #b2b2b2;
    }
  }
`;

export const BlockTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #2874a6;
  text-transform: uppercase;
  margin-bottom: 15px;
`;
