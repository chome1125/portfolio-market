import styled from "@emotion/styled";

const Banner = styled.img`
  height: 400px;
  width: auto;
  object-fit: cover;
  display: block;
`;

export default function LayoutBanner(): JSX.Element {
  return <Banner src="../../../banner.png" />;
}
