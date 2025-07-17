export const getDefaultHeaders = () => {
  if (typeof window !== "undefined") {
    throw new Error("getDefaultHeaders must be used in server side");
  }

  const headers = new Headers();
  headers.set("Client-ID", process.env.TWITCH_CLIENT_ID!);
  headers.set(
    "Authorization",
    `Bearer ${process.env.TWITCH_CLIENT_ACCESS_TOKEN}`
  );
  return headers;
};
