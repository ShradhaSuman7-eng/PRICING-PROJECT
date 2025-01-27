const toggleSwitch = document.querySelector(".switch input");
const prices = [
  { annually: "199.99", monthly: "19.99" },
  { annually: "249.99", monthly: "24.99" },
  { annually: "399.99", monthly: "39.99" },
];

toggleSwitch.addEventListener("change", () => {
  const isMonthly = toggleSwitch.checked;

  const priceElements = document.querySelectorAll(".card p span");
  priceElements.forEach((priceElement, index) => {
    if (isMonthly) {
      priceElement.textContent = prices[index].monthly;
    } else {
      priceElement.textContent = prices[index].annually;
    }
  });
});
