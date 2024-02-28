window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  // TODO: Complete the function

  // Register the click event for the "Convert" button
  const btn = document.getElementById("convertButton");
  btn.addEventListener("click", convertButtonClicked);

  // Get the two input text boxes
  const celsInput = document.getElementById("cInput");
  const fahrInput = document.getElementById("fInput");

  // Add appropriate event listeners
  celsInput.addEventListener("input", function () {
    clearTextbox(fahrInput);
  });
  fahrInput.addEventListener("input", function () {
    clearTextbox(celsInput);
  });
}
function clearTextbox(textInput) {
  textInput.value = "";
}

function convertCtoF(degreesCelsius) {
  // TODO: Complete the function
  return (degreesCelsius * 9) / 5 + 32;
}

function convertFtoC(degreesFahrenheit) {
  // TODO: Complete the function
  return ((degreesFahrenheit - 32) * 5) / 9;
}

function convertButtonClicked() {
  // Get the two input text boxes, image, and error DIV
  const celsInput = document.getElementById("cInput");
  const fahrInput = document.getElementById("fInput");
  const weatherImg = document.getElementById("weatherImage");
  const errMsg = document.getElementById("errorMessage");

  // Clear previous error message
  errMsg.innerHTML = "";

  // Convert based on which has text
  if (celsInput.value.length > 0) {
    const celsius = parseFloat(celsInput.value);
    if (!isNaN(celsius)) {
      fahrInput.value = convertCtoF(celsius);
    } else {
      errMsg.innerHTML = celsInput.value + " is not a number";
    }
  } else if (fahrInput.value.length > 0) {
    const fahrenheit = parseFloat(fahrInput.value);
    if (!isNaN(fahrenheit)) {
      celsInput.value = convertFtoC(fahrenheit);
    } else {
      errMsg.innerHTML = fahrInput.value + " is not a number";
    }
  }

  // Set the image based on the F temperature
  const fahr = parseFloat(fahrInput.value);
  if (!isNaN(fahr)) {
    if (fahr < 32.0) {
      weatherImg.src = "cold.png";
      weatherImg.alt = "Cold";
    } else if (fahr > 50.0) {
      weatherImg.src = "warm.png";
      weatherImg.alt = "Warm";
    } else {
      weatherImg.src = "cool.png";
      weatherImg.alt = "Cool";
    }
  }
}
