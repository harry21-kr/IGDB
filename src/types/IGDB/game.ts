import { AgeRating } from "./ageRating";
import { AlternativeName } from "./alternativeName";

export interface Game {
  age_ratings: AgeRating[] | number[]; // Array of Age Rating IDs
  aggregated_rating: number; // Double
  aggregated_rating_count: number; // Integer
  alternative_names: AlternativeName[] | number[]; // Array of Alternative Name IDs
  artworks: number[]; // Array of Artwork IDs
  bundles: number[]; // Array of Game IDs
  category: number; // Category Enum
  checksum: string; // uuid
  collection: number; // Reference ID for Collection
  collections: number[]; // Array of Collection IDs
  cover: number; // Reference ID for Cover
  created_at: number; // datetime
  dlcs: number[]; // Array of Game IDs
  expanded_games: number[]; // Array of Game IDs
  expansions: number[]; // Array of Game IDs
  external_games: number[]; // Array of External Game IDs
  first_release_date: number; // Unix Time Stamp
  follows: number; // Integer
  forks: number[]; // Array of Game IDs
  franchise: number; // Reference ID for Franchise
  franchises: number[]; // Array of Franchise IDs
  game_engines: number[]; // Array of Game Engine IDs
  game_localizations: number[]; // Array of Game Localization IDs
  game_modes: number[]; // Array of Game Mode IDs
  game_status: number; // Reference ID for Game Status
  game_type: number; // Reference ID for Game Type
  genres: number[]; // Array of Genre IDs
  hypes: number; // Integer
  involved_companies: number[]; // Array of Involved Company IDs
  keywords: number[]; // Array of Keyword IDs
  language_supports: number[]; // Array of Language Support IDs
  multiplayer_modes: number[]; // Array of Multiplayer Mode IDs
  name: string; // String
  parent_game: number; // Reference ID for Game
  platforms: number[]; // Array of Platform IDs
  player_perspectives: number[]; // Array of Player Perspective IDs
  ports: number[]; // Array of Game IDs
  rating: number; // Double
  rating_count: number; // Integer
  release_dates: number[]; // Array of Release Date IDs
  remakes: number[]; // Array of Game IDs
  remasters: number[]; // Array of Game IDs
  screenshots: number[]; // Array of Screenshot IDs
  similar_games: number[]; // Array of Game IDs
  slug: string; // String
  standalone_expansions: number[]; // Array of Game IDs
  status: number; // Status Enum
  storyline: string; // String
  summary: string; // String
  tags: number[]; // Array of Tag Numbers
  themes: number[]; // Array of Theme IDs
  total_rating: number; // Double
  total_rating_count: number; // Integer
  updated_at: number; // datetime
  url: string; // String
  version_parent: number; // Reference ID for Game
  version_title: string; // String
  videos: number[]; // Array of Game Video IDs
  websites: number[]; // Array of Website IDs
}
