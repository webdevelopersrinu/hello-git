let updateValue = document.getElementById("count");
let incrementBtn = document.getElementById("increment");
let decrementBtn = document.getElementById("decrement");
let inputValue = document.getElementById("value");
let resetBtn = document.getElementById("reset");

incrementBtn.addEventListener("click", incrementValue);
decrementBtn.addEventListener("click", decrementValue);
resetBtn.addEventListener("click", resetValue);

function incrementValue() {
  let countValue = setValue() * 1;
  let cuurentValue = updateValue.innerText * 1;
  updateValue.innerText = cuurentValue + countValue;
}
function decrementValue() {
  let countValue = setValue() * 1;
  let cuurentValue = updateValue.innerText * 1;
  updateValue.innerText = cuurentValue - countValue;
}

function resetValue() {
    updateValue.innerText=0;
}

function setValue() {
  let value = inputValue.value;
  if (value < 1) {
    value = inputValue.value = 1;
  }
  return value;
}
