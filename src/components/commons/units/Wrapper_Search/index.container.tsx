import SearchWrapperUI from "./index.presenter";

interface IProps {
  subTabMenu?: number;
  myPageTapMenu?: number;
}

export default function SearchWrapper(props: IProps) {
  return (
    <SearchWrapperUI
      subTabMenu={props.subTabMenu}
      myPageTapMenu={props.myPageTapMenu}
    />
  );
}
