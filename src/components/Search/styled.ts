import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
`;
export const SearchInput = styled.input`
  height: 45px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  border: 2px solid #dfdfdf;
  font-size: 16px;
  line-height: 34px;
  outline: none;
  padding: 8px 10px;

  &:focus {
    border-color: #b4b4b4;
  }
`;

export const SearchButton = styled.button`
  width: 160px;
  font-size: 20px;
  font-weight: bold;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  background-color: #f85050;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #e74c4c;
  }

  &.disabled {
    cursor: default;
  }
`;

export const InvalidIP = styled.div`
  color: red;
  font-weight: 700;
  font-size: 16px;
`;
