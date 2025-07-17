"use client";

import { getTwitchTokenCookie } from "@/api/route";
import { useEffect } from "react";

const AppInitializer = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    getTwitchTokenCookie();
  }, []);
  return <>{children}</>;
};
export default AppInitializer;
