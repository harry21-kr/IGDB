import { IGDB_BASE_URL } from "@/constant";
import { getDefaultHeaders } from "..";

export interface Theme {
  id: number;
  checksum: string;
  name: string;
  slug: string;
  url: string;
  created_at: number;
  updated_at: number;
}

export const getTheme = async () => {
  const res = await fetch(`${IGDB_BASE_URL}/themes`, {
    method: "POST",
    headers: getDefaultHeaders(),
    body: "fields checksum,created_at,name,slug,updated_at,url; limit 30;",
  });
  const data = await res.json();
  return data as Theme[];
};
