"use client";

import getTwitchTokenCookie from "@/api/route";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    getTwitchTokenCookie();
  }, []);
  return <div></div>;
};
export default Home;
