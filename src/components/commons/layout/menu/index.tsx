import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LayOutMenuUI from "./index.presenter";

export default function LayoutMenu(): JSX.Element {
  const router = useRouter();

  return <LayOutMenuUI router={router} />;
}
