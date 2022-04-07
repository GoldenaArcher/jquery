class JQuery {
  #element;

  constructor(selector) {
    this.#element = document.querySelectorAll(selector);
  }

  each(cb) {
    this.#element.forEach((val, idx) => {
      cb(val, idx);
    });

    return this;
  }

  html(data) {
    this.#element.forEach((el) => {
      if (data instanceof Array) return el.replaceChildren(...data);

      el.replaceChildren(data);
    });

    return this;
  }

  click(cb) {
    return this.on("click", cb);
  }

  css(property, value = null) {
    if (value === null) return;

    this.each((el) => {
      el.setAttribute("style", `${property}: ${value}`);
    });

    return this;
  }

  hide() {
    return this.css("display", "none");
  }

  on(type, cb) {
    this.#element.forEach((el) => {
      el.addEventListener(type, cb);
    });

    return this;
  }

  val(value = null) {
    if (value === null) return this.#element[0].innerText;

    this.html(value);

    return this;
  }

  async ajax({ url }) {
    return fetch(url).then((res) => res.json());
  }
}

export default JQuery;
