const peopleContainer = document.querySelector('.people');
const btn = document.querySelector('.btn-draw');
const form = document.querySelector('#createProfile');

const defaultIMG =
  // 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png';
  './Default_pfp.svg.png';

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

const zdjecia = [
  'https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/384392205_340980441709688_8423688966748580357_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=NFV7FEDqc6cAX-r2VDl&_nc_ht=scontent-waw1-1.xx&oh=00_AfAHWR1RfjTXk3ES3VQ93sRDku4esQ_G1tQsyW_aRekdjw&oe=6524C1C2',
  'https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/336890888_682764930268476_7125231579479195224_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=xQnDjIwpMdgAX8SjfQH&_nc_ht=scontent-waw1-1.xx&oh=00_AfAY0X5xExTD82LkW3StiBEm_ZoBmxFZKhu4uUfXLN1qwQ&oe=6524BE41',
  'https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/344730539_569316518618908_7780118470231361556_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=9bTO5P7pTUMAX_U_y88&_nc_ht=scontent-waw1-1.xx&oh=00_AfDWn2lJaJ7fRoSOc1dihSW7Xwp91ERF07pm9i54LjxAzw&oe=6524F5FC',
  'https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/296189300_413016097468461_8292321695997211337_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=DFbGAqZGZ_EAX84mXCJ&_nc_ht=scontent-waw1-1.xx&oh=00_AfDkISl3S1RTSWkYSPBS16f9TTnYs0c5p2m4p7Zzhj_5mQ&oe=6524F0CC',
];

class Osoba {
  constructor(
    firstName,
    lastName,
    imageURL = defaultIMG,
    bio = `${undefined}`,
    facts = []
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.imageURL = imageURL;
    this.bio = bio;
    this.facts = facts;
    this.id = Math.random().toString(36);
  }

  renderCard(className = '') {
    const html = `<article id="${this.id}" class="person ${className}">
    <img class="card__img" src="${this.imageURL}" />
    <div class="card__data">
      <h3 class="card__firstname">${this.firstName}</h3>
      <h4 class="card__lastname">${this.lastName}</h4>
      <p class="card__bio"><span>Bio:</span>„${this.bio}”
      </p>
      <p class="card__row"><span>👉</span>${this.facts[0]}</p>
      <p class="card__row"><span>👉</span>${this.facts[1]}</p>
      <p class="card__row"><span>👉</span>${this.facts[2]}</p>
    </div>
  </article>`;

    peopleContainer.insertAdjacentHTML('beforeend', html);
    peopleContainer.style.opacity = 1;
  }
}

class Grupa {
  constructor(people) {
    this.people = people;

    people.forEach(person => {
      person.renderCard();
      // console.log(person.id);
    });
  }

  addPerson(person) {
    this.people.push(person);
    person.renderCard();
  }
}

class Losowanie {
  group;

  _activePlayer = {};

  constructor(group) {
    this.group = group.people;

    this.bets = [];
    this.group.forEach(person => {
      this.bets.push({ id: person.id, name: person.firstName });
    });
  }

  setActivePlayer(player) {
    this._activePlayer = player;
    const card = document.getElementById(`${player.id}`);
    card.classList.add('player--active');
  }

  clearActivePlayer(player) {
    this._activePlayer = {};
    const card = document.getElementById(`${player.id}`);
    card.classList.remove('player--active');
  }

  disablePlayer(player) {
    player.disabled = true;
    const card = document.getElementById(`${player.id}`);
    card.classList.remove('player--active');
    card.classList.add('player--disabled');
  }

  renderResult(resultPerson, className = 'guess') {
    const html = `
      <article id="${resultPerson.id}" class="person ${className}">
        <img class="card__img" src="${resultPerson.imageURL}" />
        <div class="card__data">
          <h3 class="card__firstname">${resultPerson.firstName}</h3>
          <h4 class="card__lastname">${resultPerson.lastName}</h4>
          <p class="card__row"><span>👉</span>${resultPerson.facts[0]}</p>
          <p class="card__row"><span>👉</span>${resultPerson.facts[1]}</p>
          <p class="card__row"><span>👉</span>${resultPerson.facts[2]}</p>
        </div>
      </article>`;

    peopleContainer.insertAdjacentHTML('beforeEnd', html);
    peopleContainer.style.opacity = 1;
  }

  drawPerson() {
    const nr = Math.trunc(Math.random() * this.bets.length);
    const result = this.bets[nr];

    if (result.id === _activePlayer.id) {
      console.warn(`Gracz ${_activePlayer.name} wylosował siebie`);
    }
    return result;
  }

  /*
  doLottery() {
    this.bets = this.group.sort().slice();
    this.results = [];

    let i = 0;
    while (this.bets.length > 0) {
      const losujący = this.group[i];
      let wylosowany = this.drawPerson(losujący);

      if (losujący === wylosowany && i + 1 === this.group.length) {
        this.results.push(`${i + 1}. ${losujący} wylosował(a): ${wylosowany}`);
        console.warn(
          'Ostatni gracz wylosował siebie. Trzeba powtórzyć loterię :/ '
        );
        return;
      }

      //   let i2 = 0;
      //   while (losujący === wylosowany && i2 < this.group.length) {
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
  */
}

const aniela = new Osoba('Aniela', 'Sikorska', zdjecia[0], 'Kocham ludzi', [
  'bierzmowanie',
  'muzyczna',
  'rodzina',
]);
const zosia = new Osoba('Zosia', 'Radwańska', zdjecia[1]);
const ania = new Osoba('Ania', 'Michalik', zdjecia[2]);
const antek = new Osoba('Antek', 'Kurdziel', zdjecia[3]);
const bogusz = new Osoba('Bogusz', 'Boliński', defaultIMG);
const emilka = new Osoba('Emilka', 'Siuda', defaultIMG);
const kuba = new Osoba('Kuba', 'Kuta', defaultIMG);
const julian = new Osoba('Julian', 'Masłowski', defaultIMG);
const kasia = new Osoba('Kasia', 'Kitzberger', defaultIMG);
const przemek = new Osoba('Przemek', 'Ciepiał', defaultIMG);
const lukasz = new Osoba('Łukasz', 'Marszałek', defaultIMG);

const grFormacyjna = new Grupa([
  aniela,
  zosia,
  ania,
  antek,
  bogusz,
  emilka,
  kuba,
  julian,
  kasia,
  przemek,
  lukasz,
]);
console.log(grFormacyjna);

const losowanie = new Losowanie(grFormacyjna);
console.log(losowanie);

// btn.addEventListener('click', function () {
//   //   const player = prompt('podaj swoje imię');
//   const player = 'Gracz';
//   // grFormacyjna.btnDraw(player);
//   // console.log(grFormacyjna.results);
//   // grFormacyjna.renderResult();
// });
console.log(form);

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(e);

  // Pobierz wartości z formularza
  const imie = document.getElementById('imie').value;
  const nazwisko = document.getElementById('nazwisko').value;
  const bio = document.getElementById('bio').value;
  const inne = document.getElementById('inne').value;

  const person = new Osoba(imie, nazwisko, defaultIMG, bio, inne);
  grFormacyjna.addPerson(person);
  // // Utwórz element na podstawie danych
  // const element = document.createElement('li');
  // element.innerHTML =
  //   '<strong>Imię:</strong> ' +
  //   imie +
  //   '<br><strong>Nazwisko:</strong> ' +
  //   nazwisko +
  //   '<br><strong>Bio:</strong> ' +
  //   bio +
  //   '<br><strong>Inne:</strong> ' +
  //   inne;

  // // Dodaj element do listy
  // document.querySelector('.people').appendChild(element);

  // // Wyświetl element po prawej stronie
  // document.getElementById('displayElement').innerHTML = element.innerHTML;

  // Wyczyść formularz
  form.reset();
});
