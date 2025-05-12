const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const height = parseFloat(document.querySelector("#height").value);
    const weight = parseFloat(document.querySelector("#weight").value);

    if (isNaN(height) || height <= 0) {
        document.querySelector(".results").innerText = "Please give a valid height";
    }
    else if (isNaN(weight) || weight <= 0) {
        document.querySelector(".results").innerText = "Please give a valid weight";
    }
    else {
        const bmi = (weight / (height * height) * 10000).toFixed(2);

        document.querySelector(".results").innerText = `${bmi}`;
    }
});