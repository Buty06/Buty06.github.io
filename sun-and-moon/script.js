const $touch = document.getElementById("touch");
const $sun__paragraph = document.getElementById("sun__paragraph");
const $moon__paragraph = document.getElementById("moon__paragraph");
const $sun = document.getElementById("sun");
const $moon = document.getElementById("moon");
const $body = document.getElementById("body");
const htmlElement = [$moon, $moon__paragraph, $sun, $sun__paragraph];

$touch.addEventListener("click", () => {
  htmlElement.forEach((value) => value.classList.toggle("noone"));
  $body.classList.toggle("bg_dark_body");
});
