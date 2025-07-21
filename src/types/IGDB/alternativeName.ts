import { Game } from "./game";

export interface AlternativeName {
  id: number;
  checksum: string;
  comment: string;
  game: number | Game;
  name: string;
}
