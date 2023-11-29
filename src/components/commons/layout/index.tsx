import LayoutBanner from "./banner/index";
import LayoutMenu from "./menu/index";
import styled from "@emotion/styled";
import LayoutHeader from "./header/index.container";

export const LayoutBody = styled.section`
  width: 1200px;
  margin: 0 auto;
`;

interface Iprops {
  children: JSX.Element;
}

export default function Layout(props: Iprops) {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutMenu />
      <LayoutBody>{props.children}</LayoutBody>
    </>
  );
}
