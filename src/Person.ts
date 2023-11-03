import { DEFAULT_IMAGE_URL } from "./config";
import { v4 as uuidv4 } from "uuid";

export class Person {
  readonly id = uuidv4();
  firstName: string;
  lastName: string;
  _imageURL: string = DEFAULT_IMAGE_URL;
  _bio: string = ``;
  _addons: string[] = [""];

  private parentEl = document.querySelector("container__right");

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  set imageURL(url: string) {
    this._imageURL = url;
  }
  get imageURL() {
    return this._imageURL;
  }

  set bio(text: string) {
    this._bio = text;
  }
  get bio() {
    return this._bio;
  }

  set addons(str: string[]) {
    this._addons = str;
  }
  get addons() {
    return this._addons;
  }

  renderCard(className = "") {
    const markup = `
    <article id="${this.id}" class="person ${className}">
    <img class="card__img" src="${this.imageURL}" />
    <div class="card__data">
      <h3 class="card__firstname">${this.firstName}</h3>
      <h4 class="card__lastname">${this.lastName}</h4>
      <p class="card__bio"><span>Bio:</span>„${this.bio}”
      </p>
      <p class="card__row"><span>👉</span>${this?.addons[0]}</p>
      <p class="card__row"><span>👉</span>${this?.addons[1]}</p>
      <p class="card__row"><span>👉</span>${this?.addons[2]}</p>
    </div>
  </article>
  `;

    this.parentEl?.insertAdjacentHTML("beforeend", markup);
    // this?.parentEl?.style.opacity = 1;
  }
}
