let height = document.getElementById("height");
let Weight = document.getElementById("Weight");
let output = document.getElementById("output");
let calculateBtn = document.getElementById("btn");
output.innerText=""
calculateBtn.addEventListener("click", () => {
  if (Weight.value === "" || height.value === "") {
    output.style.color = "red";
    output.innerText = "Enter Height And Weight";
  } else {
    let result = +Weight.value / (+height.value * +height.value);

    output.style.color = "black";
    output.innerText = result.toFixed(2);
  }
});
