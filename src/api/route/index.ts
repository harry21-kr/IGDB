export const getTwitchTokenCookie = async () => {
  if (typeof window === "undefined")
    throw new Error("getTwitchTokenCookie must be used in client side");

  const res = await fetch("http://localhost:3000/api/cookies", {
    method: "GET",
  });

  return res;
};
