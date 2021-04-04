function increaseCounter() {
    const counterOutput = document.getElementById('counterOutput');
    counterOutput.value = Number.parseInt(counterOutput.value) + 1;
}

function lessCounter() {
    const counterOutput = document.getElementById('counterOutput');
    counterOutput.value -= 1;
}