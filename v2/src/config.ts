export const DEFAULT_IMAGE_URL = "./Default_pfp.svg.png";

export type PlayerType = object;
export type PeopleType = PlayerType[];
export interface ResultType {
  player: PlayerType;
  result: PlayerType;
  note: string;
}
