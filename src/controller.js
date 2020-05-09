import calc from "./kadai";

export default class Controller {
  constructor() {
    const equal = document.getElementById("equal");
    equal.addEventListener(
      "click",
      (event) => {
        const seconds = parseInt(document.getElementById("seconds").value);
        const answer = calc(seconds);
        document.getElementById("ans_hours").value = answer.hours;
        document.getElementById("ans_minutes").value = answer.minutes;
        document.getElementById("ans_seconds").value = answer.seconds;
        event.preventDefault();
      },
      false
    );
  }
}
