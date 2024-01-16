import { css } from "styled-components";
const fontsPath = "../fonts/noto/";

export const Fonts = css`
  @font-face {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    src: url("${fontsPath}noto-bold.woff2") format("woff2");
  }
  @font-face {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    src: url("${fontsPath}noto-regular.woff2") format("woff2");
  }
`;
