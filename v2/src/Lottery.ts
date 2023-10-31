import { PlayerType, PeopleType, ResultType } from "./config";
import { PeopleGroup } from "./PeopleGroup";

export class Lottery extends PeopleGroup {
  bets: PeopleType; //People available to be selected as someone result
  results: ResultType[] = []; //Array of results

  constructor(people: PeopleType) {
    super(people);

    this.bets = this.people.sort().slice();
  }

  private drawPerson(player: PlayerType) {
    const nr = Math.trunc(Math.random() * this.bets.length);
    const result = this.bets[nr];

    return result;
  }

  private init() {
    this.bets = this.people.sort().slice();
    this.results = [];
  }

  private handleBet(player: PlayerType, result: PlayerType) {
    this.bets.splice(this.bets.indexOf(result), 1);
    this.results.push({
      player: player,
      result: result,
      note: `${player} wylosował(a): ${result}`,
    });
  }

  drawOne(player: PlayerType) {
    if (this.bets.length === 0) return alert("Brak wolnych losów");

    let result: PlayerType = this.drawPerson(player);
    while (player === result) {
      result = this.drawPerson(player);
    }
    this.handleBet(player, result);

    return result;
  }

  doLottery() {
    this.init();

    this.people.forEach((player, i) => {
      let result = this.drawOne(player);

      console.log(this.results);

      //Logic if last player bet himself
      if (i === this.people.length && player === result) {
        console.warn("Last player bets himself!");
        return;
      }
    });
  }
}
