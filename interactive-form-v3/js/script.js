// Global Variables
const jobRole = document.getElementById("title");
const otherJobRole = document.getElementById("other-job-role");
const designEle = document.getElementById("design");
const colorEle = document.getElementById("color");
const colorEleOption1 = document.getElementsByClassName("js puns");
const colorEleOption2 = document.getElementsByClassName("heart js");
const regActivities = document.getElementById("activities");
const activitiesCost = document.getElementById("activities-cost");
const hidden = document.getElementById("hidden");
const checkboxes = document.querySelectorAll("input[type='checkbox']");
const payment = (document.getElementById("payment").value = "credit-card");
const paymentSelection = document.getElementById("payment");
const paypal = document.getElementById("paypal");
const bitcoin = document.getElementById("bitcoin");
let totalCost = 0;

// Methods
//Focus on Input Field onPageLoad
function focusOnInput() {
  document.getElementById("name").focus();
}

//Toggle Hidden Other Job Field Component
jobRole.addEventListener("change", function () {
  if (jobRole.value == "other") {
    otherJobRole.style.display = "block";
  } else {
    otherJobRole.style.display = "none";
  }
});

//Design Theme and Color option component
colorEle.disabled = true;

designEle.addEventListener("change", function (color) {
  if (designEle.value === "js puns") {
    hidden.textContent = "Now Select a Shirt Theme";
    colorEle.disabled = false;
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
  }
});

//Register for Activities component
regActivities.addEventListener("change", function (e) {
  const dataCost = e.target;
  const newDataCost = +dataCost.getAttribute("data-cost");

  //   let newDataCost = +dataCost; // transforms dataCost STRING to newDataCost number

  if (dataCost.checked === true) {
    totalCost += newDataCost;
    activitiesCost.textContent = `Total: $${totalCost}`;
  } else {
    totalCost -= newDataCost;
    activitiesCost.textContent = `Total: $${totalCost}`;
  }

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

//Payment Display Component
paymentSelection.addEventListener("change", function () {
  if (paymentSelection.value == "paypal") {
    paypal.style.display = "block";
    bitcoin.style.display = "none";
  } else if (paymentSelection.value == "bitcoin") {
    bitcoin.style.display = "block";
    paypal.style.display = "none";
  } else if (paymentSelection.value == "credit-card") {
    bitcoin.style.display = "none";
    paypal.style.display = "none";
  }
});

// Method Calls
