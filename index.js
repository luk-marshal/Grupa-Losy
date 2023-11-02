import { Person } from "./src/Person";
import { Lottery } from "./src/Lottery";
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
const Osoby = [];
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
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    gr1.doLottery();
    gr1.printResults();
});
