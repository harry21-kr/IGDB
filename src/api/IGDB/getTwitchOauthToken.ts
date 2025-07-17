import { TwitchOauthToken } from "@/types";

const getTwitchOauthToken = async () => {
  const res = await fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials`,
    {
      method: "POST",
    }
  );
  const data = await res.json();
  return data as TwitchOauthToken;
};

export default getTwitchOauthToken;
