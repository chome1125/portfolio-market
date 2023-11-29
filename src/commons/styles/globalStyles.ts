import { css } from "@emotion/react";

export const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;200;300;400;500;600;700;800;900&display=swap");

  * {
    margin: 0px;
    box-sizing: border-box;
  }

  body {
    font-family: "Noto Sans KR";
    font-weight: 400;
    // transform: rotate(0.04deg);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: "Noto Sans KR";
    font-weight: 500;
  }

  input {
    font-family: "Noto Sans KR";
    font-weight: 400;
  }
`;
