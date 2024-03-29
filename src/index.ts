import { Person } from "./Person";
import { PeopleGroup } from "./PeopleGroup";
import { Lottery } from "./Lottery";
import { PlayerType, PeopleType, ResultType } from "./config";

const osoby = [
  "Aniela Sikorska",
  "Zosia Radwańska",
  "Ania Michalik",
  "Antek Kurdziel",
  "Bogusz Boliński",
  "Emilka Siuda",
  "Kuba Kuta",
  "Julian Masłowski",
  "Kasia Kitzberger",
  "Przemek Ciepiał",
  "Łukasz Marszałek",
];

const Osoby: PeopleType = [];

osoby.forEach((el) => {
  const [imie, nazwisko] = el.split(" ");
  const osoba = new Person(imie, nazwisko);
  Osoby.push(osoba);
  // console.log(osoba);
});

const gr1 = new Lottery(Osoby);
// console.log(gr1);

const btn = document.querySelector(".btn-draw");
// console.log(btn);

btn?.addEventListener("click", () => {
  gr1.doLottery();
  gr1.printResults();
});
