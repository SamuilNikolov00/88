import EventEmitter from "eventemitter3";
import anime from "animejs";
export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.init();
    this.emit(Application.events.READY);
  }
  init() {
    let x = -1;
    const article = document.getElementsByClassName("article")[0];
    article.addEventListener("click", () => {
      x*=-1;
      anime({
        targets: article,
        translateX: x*250,
        direction: "alternate",
        loop: false,
        easing: "spring(1, 80, 10, 0)",
      });
    });
  }
}
