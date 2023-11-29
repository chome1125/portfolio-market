import { useRouter } from "next/router";
import FreeBoardPostUI from "./FreeBoard.post.presenter";
import { useState } from "react";

export default function FreeBoardPost(): JSX.Element {
  const router = useRouter();
  const [address, setaddress] = useState(router.asPath);

  return <FreeBoardPostUI address={address} />;
}
