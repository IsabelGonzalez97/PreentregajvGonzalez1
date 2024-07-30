
const ages = [];

document.getElementById('startButton').addEventListener('click', function() {
    let name = prompt("Ingresa tu nombre:");
    if (name) {
        let age = prompt("Ingresa tu edad:");
        age = parseInt(age);
        if (isValidAge(age)) {
            registerAge(name, age);
            displayResult();
        } else {
            displayError();
        }
    } else {
        alert("Por favor, ingresa un nombre.");
    }
});

function isValidAge(age) {
    return age > 0;
}

function registerAge(name, age) {
    ages.push(age);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>${name}, de ${age} años, ha sido registrado.</p>
    `;
}

function calculateAverageAge(ages) {
    let sum = 0;
    for (let i = 0; i < ages.length; i++) {
        sum += ages[i];
    }
    return (sum / ages.length).toFixed(2);
}

function displayResult() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML += `<p>Edad promedio: ${calculateAverageAge(ages)}</p>`;
}

function displayError() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Por favor, ingresa una edad válida.</p>`;
}
