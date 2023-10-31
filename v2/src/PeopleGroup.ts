import { PlayerType, PeopleType } from "./config";

export class PeopleGroup {
  people: PeopleType;

  constructor(people: PeopleType) {
    this.people = people;
  }
}
