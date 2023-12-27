import styled from "@emotion/styled";
import { NextRouter } from "next/router";
import { Commons } from "../../../../commons/styles/color";

interface ButtonProps {
  router: NextRouter;
}

export const Wrapper = styled.div`
  height: 64px;
  background: ${Commons.colors.yellow};
`;

export const Inner = styled.div`
  width: 1200px;
  margin: 0 auto;
  height: 100%;
  position: relative;
`;

export const Buttons = styled.ul`
  list-style: none;
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-weight: 700;
`;

export const ButtonFreeBoard = styled.li<ButtonProps>`
  margin-right: 40px;
  cursor: pointer;
  color: ${(props) =>
    props.router.asPath.includes("freeBoard") ? "#514400" : "#AB9000"};
`;

export const ButtonMarket = styled.li<ButtonProps>`
  cursor: pointer;
  margin: 0 40px;
  position: relative;
  color: ${(props) =>
    props.router.asPath.includes("freeMarket") ? "#514400" : "#AB9000"};

  &:before {
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    left: -40px;
    top: 0;
    border: 1px solid white;
  }

  &:after {
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    right: -40px;
    border: 1px solid white;
  }
`;

export const ButtonMyPage = styled.li<ButtonProps>`
  margin-left: 40px;
  cursor: pointer;
  color: ${(props) =>
    props.router.asPath.includes("myPage") ? "#514400" : "#AB9000"};
`;
