import { DEFAULT_IMAGE_URL } from "./config";
import { v4 as uuidv4 } from "uuid";
export class Person {
    constructor(firstName, lastName) {
        this.id = uuidv4();
        this._imageURL = DEFAULT_IMAGE_URL;
        this._bio = ``;
        this._addons = [""];
        this.parentEl = document.querySelector("container__right");
        this.firstName = firstName;
        this.lastName = lastName;
    }
    set imageURL(url) {
        this._imageURL = url;
    }
    get imageURL() {
        return this._imageURL;
    }
    set bio(text) {
        this._bio = text;
    }
    get bio() {
        return this._bio;
    }
    set addons(str) {
        this._addons = str;
    }
    get addons() {
        return this._addons;
    }
    renderCard(className = "") {
        var _a;
        const markup = `
    <article id="${this.id}" class="person ${className}">
    <img class="card__img" src="${this.imageURL}" />
    <div class="card__data">
      <h3 class="card__firstname">${this.firstName}</h3>
      <h4 class="card__lastname">${this.lastName}</h4>
      <p class="card__bio"><span>Bio:</span>„${this.bio}”
      </p>
      <p class="card__row"><span>👉</span>${this === null || this === void 0 ? void 0 : this.addons[0]}</p>
      <p class="card__row"><span>👉</span>${this === null || this === void 0 ? void 0 : this.addons[1]}</p>
      <p class="card__row"><span>👉</span>${this === null || this === void 0 ? void 0 : this.addons[2]}</p>
    </div>
  </article>
  `;
        (_a = this.parentEl) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML("beforeend", markup);
        // this?.parentEl?.style.opacity = 1;
    }
}
