const doc = document;
const $button1 = doc.getElementById("button1");
const $button2 = doc.getElementById("button2");
const $button3 = doc.getElementById("button3");
const $button4 = doc.getElementById("button4");
const $button5 = doc.getElementById("button5");
const $button6 = doc.getElementById("button6");
const $button7 = doc.getElementById("button7");
const $button8 = doc.getElementById("button8");
const $button9 = doc.getElementById("button9");
const $button0 = doc.getElementById("button0");

const $operator_suma = doc.getElementById("operator_suma");
const $operator_resta = doc.getElementById("operator_resta");
const $operator_multiplicacion = doc.getElementById("operator_multiplicacion");
const $operator_divicion = doc.getElementById("operator_divicion");
const $operator_eliminador = doc.getElementById("operator_eliminador");
const $operator_resultado = doc.getElementById("operator_resultado");
const $operator_modulo = doc.getElementById("operator_modulo");
const $operator_punto = doc.getElementById("operator_punto");
const $operator_backspace = doc.getElementById("operator_backspace");
const $input = doc.getElementById("input");

const suma = (item = "") => {
  const microItem = item.split(" ");
  return parseFloat(microItem[0]) + parseFloat(microItem[2]);
};

const resta = (item = "") => {
  const microItem = item.split(" ");
  return parseFloat(microItem[0]) - parseFloat(microItem[2]);
};

const multiplicacion = (item = "") => {
  const microItem = item.split(" ");
  return parseFloat(microItem[0]) * parseFloat(microItem[2]);
};

const division = (item = "") => {
  const microItem = item.split(" ");
  return parseFloat(microItem[0]) / parseFloat(microItem[2]);
};

const modulo = (item = "") => {
  const microItem = item.split(" ");
  return parseFloat(microItem[0]) % parseFloat(microItem[2]);
};

$button1.addEventListener("click", () => {
  $input.value += 1;
});

$button2.addEventListener("click", () => {
  $input.value += 2;
});

$button3.addEventListener("click", () => {
  $input.value += 3;
});

$button4.addEventListener("click", () => {
  $input.value += 4;
});

$button5.addEventListener("click", () => {
  $input.value += 5;
});

$button6.addEventListener("click", () => {
  $input.value += 6;
});

$button7.addEventListener("click", () => {
  $input.value += 7;
});

$button8.addEventListener("click", () => {
  $input.value += 8;
});

$button9.addEventListener("click", () => {
  $input.value += 9;
});

$button0.addEventListener("click", () => {
  $input.value += 0;
});

$operator_punto.addEventListener("click", () => {
  $input.value += ".";
});

$operator_suma.addEventListener("click", () => {
  $input.value += " + ";
});

$operator_resta.addEventListener("click", () => {
  $input.value += " - ";
});

$operator_multiplicacion.addEventListener("click", () => {
  $input.value += " x ";
});

$operator_divicion.addEventListener("click", () => {
  $input.value += " / ";
});

$operator_modulo.addEventListener("click", () => {
  $input.value += " % ";
});

$operator_backspace.addEventListener("click", () => {
  $input.value = $input.value.slice(0, -1);
});

$operator_eliminador.addEventListener("click", () => {
  $input.value = "";
});

$operator_resultado.addEventListener("click", () => {
  let microValue = $input.value;

  if (microValue.includes("+")) {
    $input.value = suma(microValue);
  } else if (microValue.includes("-")) {
    $input.value = resta(microValue);
  } else if (microValue.includes("x")) {
    $input.value = multiplicacion(microValue);
  } else if (microValue.includes("/")) {
    $input.value = division(microValue);
  } else if (microValue.includes("%")) {
    $input.value = modulo(microValue);
  }
});
