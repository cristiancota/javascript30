let pressed = [];
const secretCode = "cota";

window.addEventListener("keyup", function (e) {
  pressed.push(e.key);

  if (pressed.length > secretCode.length) {
    pressed = pressed.splice(1, secretCode.length);
  }

  if (pressed.join("") === secretCode) {
    cornify_add();
  }
});
