function check() {
  let height = document.getElementById("height");
  let weight = document.getElementById("weight");
  let displayBMI = document.getElementById("displayBMI");
  let displayStatus = document.getElementById("displayStatus");

  if (!height.checkValidity()) {
    alert("Please fill your height correctly");
  } else if (!weight.checkValidity()) {
    window.alert("Please fill you weight correctly");
  } else {
    let h = Number(height.value) / 100;
    let w = Number(weight.value);

    let bmi = w / (h * h);
    let result = bmi.toFixed(2);

    displayBMI.classList.remove("hidden");
    displayBMI.classList.add("block");

    displayStatus.classList.remove(
      "hidden",
      "under-weight",
      "healthy",
      "over-weight",
      "obese"
    );
    displayStatus.classList.add("block");

    let msg;
    let statusClass;

    switch (true) {
      case result < 18.5:
        msg = "Underweight";
        statusClass = "under-weight";

        break;
      case result >= 18.5 && result <= 24.5:
        msg = "Healthy Weight";
        statusClass = "healthy";

        break;
      case result >= 25 && result <= 29.9:
        msg = "Overweight";
        statusClass = "over-weight";

        break;
      case result >= 30:
        msg = "Obese";
        statusClass = "obese";

        break;
    }

    displayStatus.classList.add(statusClass);

    displayBMI.innerHTML = `Your BMI: <strong>${result}</strong>`;
    displayStatus.innerHTML = msg;
  }
}
