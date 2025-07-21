import { getSearchResult } from "@/api/IGDB/getSearchResult";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  const page = searchParams.get("page");

  if (!query) {
    return NextResponse.json({ error: "Query is required" }, { status: 400 });
  }

  const searchResult = await getSearchResult(query, Number(page));
  return NextResponse.json(searchResult);
}
