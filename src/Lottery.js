import { PeopleGroup } from "./PeopleGroup";
export class Lottery extends PeopleGroup {
    constructor(people) {
        super(people);
        this.results = []; //Array of results
        this.resultsContainer = document.querySelector("main");
        this.bets = this.people.sort().slice();
    }
    drawPerson(player) {
        const nr = Math.trunc(Math.random() * this.bets.length);
        const result = this.bets[nr];
        return result;
    }
    init() {
        this.bets = this.people.sort().slice();
        this.results = [];
    }
    renderResult(result, style = "") {
        var _a;
        (_a = this.resultsContainer) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML("afterbegin", `<article class="result" style="${style}">${result}</article>
        `);
    }
    handleBet(player, result) {
        const note = `${player === null || player === void 0 ? void 0 : player.firstName} ${player === null || player === void 0 ? void 0 : player.lastName} wylosował(a): ${result === null || result === void 0 ? void 0 : result.firstName} ${result === null || result === void 0 ? void 0 : result.lastName}`;
        this.bets.splice(this.bets.indexOf(result), 1);
        this.results.push({
            player: player,
            result: result,
            note: note,
        });
        this.renderResult(note);
    }
    drawOne(player) {
        if (this.bets.length === 0)
            return alert("Brak wolnych losów");
        // let result: PlayerType = this.drawPerson(player);
        let result;
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
                this.renderResult("Ostatni gracz wylosował siebie", "background-color: #f591ac");
                return;
            }
        });
        this.renderResult("-------Koniec Losowania-------");
    }
}
