"use client";

import getTwitchTokenCookie from "@/api/route";
import { useEffect, useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    getTwitchTokenCookie();
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};
export default Test;
