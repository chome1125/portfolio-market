import { useRouter } from "next/router";
import FreeBoardUI from "./FreeBoard.presenter";
import { useEffect, useState } from "react";

interface IProps {
  freeBoard?: boolean;
}

export default function FreeBoard(props: IProps) {
  const router = useRouter();

  return <FreeBoardUI freeBoard={props.freeBoard} />;
}
