const countriesContainer = document.querySelector('.countries');

osoby = [
  'Aniela Sikorska',
  'Zosia Radwańska',
  'Ania Michalik',
  'Antek Kurdziel',
  'Bogusz Boliński',
  'Emilka Siuda',
  'Kuba Kuta',
  'Julian Masłowski',
  'Kasia Kitzberger',
  'Przemek Ciepiał',
  'Łukasz Marszałek',
];

class GrupaLosowanie {
  constructor(people) {
    this.people = people;

    this.bets = this.people.sort().slice();
    this.results = [];

    // this.doLottery();
  }
  renderCountry(data, className = '') {
    const html = `
      <article class="person ${className}">
        <img class="person__img" src="${data.img}" />
        <div class="person__data">
          <h3 class="person__firstname">${data.firstName}</h3>
          <h4 class="person__lastname">${data.lastName}</h4>
          <p class="person__row"><span>${data.ico1}</span>${data.fact1}</p>
          <p class="person__row"><span>${data.ico2}</span>${data.fact2}</p>
          <p class="person__row"><span>${data.ico3}</span>${data.fact3}</p>
        </div>
      </article>`;

    // const html = ``;

    countriesContainer.insertAdjacentHTML('beforeEnd', html);
    countriesContainer.style.opacity = 1;
  }

  drawPerson(player) {
    const nr = Math.trunc(Math.random() * this.bets.length);
    const result = this.bets[nr];

    // if (result === player) {
    //   console.warn(`Gracz ${player} wylosował siebie`);
    // }
    return result;
  }

  doLottery() {
    this.bets = this.people.sort().slice();
    this.results = [];

    let i = 0;
    while (this.bets.length > 0) {
      const losujący = this.people[i];
      let wylosowany = this.drawPerson(losujący);

      if (losujący === wylosowany && i + 1 === this.people.length) {
        this.results.push(`${i + 1}. ${losujący} wylosował(a): ${wylosowany}`);
        console.warn(
          'Ostatni gracz wylosował siebie. Trzeba powtórzyć loterię :/ '
        );
        return;
      }

      //   let i2 = 0;
      //   while (losujący === wylosowany && i2 < this.people.length) {
      //     wylosowany = this.drawPerson(losujący);
      //     i2++;
      //   }

      while (losujący === wylosowany) {
        wylosowany = this.drawPerson(losujący);
      }

      this.bets.splice(this.bets.indexOf(wylosowany), 1);

      this.results.push(`${i + 1}. ${losujący} wylosował(a): ${wylosowany}`);
      i++;
    }
    console.log(this.results);
  }
  handleBet(bet, player) {
    this.bets.splice(this.bets.indexOf(bet), 1);
    this.results.push(`${player} wylosował(a): ${bet}`);
  }

  btnDraw(player) {
    let wylosowany = this.drawPerson(player);
    if (this.bets.length === 0) return alert('Brak wolnych losów');

    while (player === wylosowany) {
      if (this.bets.length === 1) {
        console.warn(
          'Ostatni gracz wylosował siebie. Trzeba powtórzyć loterię :/ '
        );
        return this.handleBet(wylosowany, player);
      }
      wylosowany = this.drawPerson(player);
    }
    this.handleBet(wylosowany, player);
    alert(`${player} wylosował(a): ${wylosowany}`);
  }
}

const grFormacyjna = new GrupaLosowanie(osoby);
console.log(grFormacyjna);

const btn = document.querySelector('.btn-country');

btn.addEventListener('click', function () {
  //   const player = prompt('podaj swoje imię');
  const player = 'Gracz';
  grFormacyjna.btnDraw(player);
  console.log(grFormacyjna.results);
  grFormacyjna.renderCountry();
});
