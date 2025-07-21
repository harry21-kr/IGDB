import { IGDB_BASE_URL } from "@/constant";
import { Game } from "@/types/IGDB";
import { getDefaultHeaders } from "..";

export const getSearchResult = async (query: string, page: number) => {
  const offset = (page - 1) * 5;
  const res = await fetch(`${IGDB_BASE_URL}/games/`, {
    method: "POST",
    headers: getDefaultHeaders(),
    body: `search "${query}"; fields *; limit 10; offset ${offset};`,
  });
  const data = (await res.json()) as Game[];
  return data;
};
