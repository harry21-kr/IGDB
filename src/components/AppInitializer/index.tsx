"use client";

import { getTwitchTokenCookie } from "@/api/route";
import { useEffect, useState } from "react";

const AppInitializer = ({ children }: { children: React.ReactNode }) => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    (async () => {
      await getTwitchTokenCookie();
      setIsInitialized(true);
    })();
  }, []);

  if (!isInitialized) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};
export default AppInitializer;
