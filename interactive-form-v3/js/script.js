// Global Vairables
const designEle = document.getElementById("design");
const colorEle = document.getElementById("color");
const colorEleOption1 = document.getElementsByClassName("js puns");
const colorEleOption2 = document.getElementsByClassName("heart js");
const defaultTheme = document.getElementById("default");
const hidden = document.getElementById("hidden");
const regActivities = document.getElementById("activities");
const activitiesCost = document.getElementById("activities-cost");
const checkboxes = document.querySelectorAll("input[type='checkbox']");
const jobRole = document.getElementById("title");
const otherJobRole = document.getElementById("other-job-role");
const payment = (document.getElementById("payment").value = "credit-card");
const paymentSelection = document.getElementById("payment");
const paypal = document.getElementById("paypal");
const bitcoin = document.getElementById("bitcoin");
const creditCard = document.getElementById("credit-card");
let totalCost = 0;

// Components
// Focus on Input Field onPageLoad
function focusOnInput() {
  document.getElementById("name").focus();
}

// Payment onLoad component
window.onload = function () {
  document.getElementById("bitcoin").style.display = "none";
  document.getElementById("paypal").style.display = "none";
};

// Toggle Hidden Other Job Field Component

jobRole.addEventListener("change", function () {
  if (jobRole.value == "other") {
    otherJobRole.style.display = "block"; // Show other field if jobRole = other
  } else {
    otherJobRole.style.display = "none"; // Hide other field if jobRole != other
  }
});

// Design Theme and Color option component
colorEle.disabled = true; // Disable Color options field until T-Shirt Design option selected

designEle.addEventListener("change", function (color) {
  if (designEle.value === "js puns") {
    hidden.textContent = "Now Select a Shirt Theme"; // Change text content after a T-Shirt Design selection is made
    colorEle.disabled = false; // Enable Color options
    for (let i = 0; i < colorEleOption2.length; i++) {
      colorEleOption2[i].disabled = true;
      colorEleOption1[i].disabled = false;
    }
  } else if (designEle.value === "heart js") {
    colorEle.disabled = false;
    hidden.textContent = "Now Select a Shirt Theme";
    for (let i = 0; i < colorEleOption1.length; i++) {
      colorEleOption1[i].disabled = true;
      colorEleOption2[i].disabled = false;
    }
  } else if (defaultTheme.selected) {
    colorEle.disabled = true; // Disables Color element if "Select Theme" is chosen for design
  }
});

// Register for Activities component

regActivities.addEventListener("change", function (e) {
  const dataCost = e.target;
  const newDataCost = +dataCost.getAttribute("data-cost"); // transforms dataCost STRING to newDataCost number

  if (dataCost.checked === true) {
    // Updating cost of total Activities based on which check box is un/selected
    totalCost += newDataCost;
    activitiesCost.textContent = `Total: $${totalCost}`;
  } else {
    totalCost -= newDataCost;
    activitiesCost.textContent = `Total: $${totalCost}`;
  }

  // Loop throu activities. Disables activities selected with same day and time
  for (let i = 0; i < checkboxes.length; i++) {
    const activity = checkboxes[i].getAttribute("data-day-and-time");
    const eventTime = dataCost.getAttribute("data-day-and-time");
    if (checkboxes[i] !== dataCost && activity === eventTime) {
      dataCost.checked
        ? (checkboxes[i].disabled = true)
        : (checkboxes[i].disabled = false);
    }
  }
});

// Payment Display Component

// Hides certain elements based on payment selection
// Defaults to credit card related elements
paymentSelection.addEventListener("change", function () {
  if (paymentSelection.value == "paypal") {
    paypal.style.display = "block";
    bitcoin.style.display = "none";
    creditCard.style.display = "none";
  } else if (paymentSelection.value == "bitcoin") {
    bitcoin.style.display = "block";
    paypal.style.display = "none";
    creditCard.style.display = "none";
  } else if (paymentSelection.value == "credit-card") {
    bitcoin.style.display = "none";
    paypal.style.display = "none";
    creditCard.style.display = "block";
  }
});

// Method Calls
