import getTwitchOauthToken from "@/api/IGDB/getTwitchOauthToken";
import { cookies } from "next/headers";

export const GET = async () => {
  const { access_token, expires_in } = await getTwitchOauthToken();

  const cookieStore = await cookies();

  const legacyCookie = cookieStore.get("twitchToken");

  if (legacyCookie?.value) {
    return Response.json({ message: "Cookie already set" });
  }

  cookieStore.set("twitchToken", access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: expires_in,
  });

  return Response.json({ message: "Cookie set" });
};
