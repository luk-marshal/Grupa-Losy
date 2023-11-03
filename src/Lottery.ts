import { PlayerType, PeopleType, ResultType } from "./config";
import { PeopleGroup } from "./PeopleGroup";

export class Lottery extends PeopleGroup {
  bets: PeopleType; //People available to be selected as someone result
  results: ResultType[] = []; //Array of results
  resultsContainer: HTMLElement | null = document.querySelector("main");

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

  private renderResult(result: string, style: string = "") {
    this.resultsContainer?.insertAdjacentHTML(
      "afterbegin",
      `<article class="result" style="${style}">${result}</article>
        `
    );
  }

  private handleBet(player: PlayerType, result: PlayerType) {
    const note = `${player?.firstName} ${player?.lastName} wylosował(a): ${result?.firstName} ${result?.lastName}`;

    this.bets.splice(this.bets.indexOf(result), 1);
    this.results.push({
      player: player,
      result: result,
      note: note,
    });
    this.renderResult(note);
  }

  drawOne(player: PlayerType) {
    if (this.bets.length === 0) return alert("Brak wolnych losów");

    // let result: PlayerType = this.drawPerson(player);
    let result: PlayerType;
    do {
      result = this.drawPerson(player);
    } while (player === result && this.bets.length > 1);

    // while (player === result) {
    //   result = this.drawPerson(player);
    // }

    this.handleBet(player, result);
    return result;
  }

  printResults() {
    this.results.forEach((result) => console.log(result.note));
  }

  doLottery() {
    this.init();

    this.people.forEach((player, i) => {
      let result = this.drawOne(player);

      //Logic if last player bet himself
      if (i + 1 === this.people.length && player === result) {
        console.warn("Last player bets himself!");
        this.renderResult(
          "Ostatni gracz wylosował siebie",
          "background-color: #f591ac"
        );

        return;
      }
    });

    this.renderResult("-------Koniec Losowania-------");
  }
}
