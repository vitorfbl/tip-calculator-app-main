var buttonValue = 0;
var inputValue;
var input = document.getElementById('value');
var inputPerson = document.getElementById('Person');
var inputPvalue;
var custom_btn = document.getElementById("custom-button");

// Adicionando evento de clique no botão customizado
custom_btn.onclick = function () {
    custom_btn.type = "number";
    this.style.width = "75px"
    this.style.height = "44px"
    this.style.textAlign = "end"
    this.style.backgroundColor = "hsl(189, #%, 97%)";
}

// Adicionando evento de input no botão customizado
custom_btn.addEventListener("input", function () {
    buttonValue = this.value;
    console.log(buttonValue);
});

// Adicionando evento de input no input de pessoas
inputPerson.addEventListener("input", function () {
    inputPvalue = inputPerson.value;
    if (inputPvalue) {
        var result = ((inputValue / 100) * buttonValue) / inputPvalue;
        var result2 = (inputValue / 100) * buttonValue;
        let Num1 = result.toFixed(2);
        let Num2 = result2.toFixed(2);
        const tip = document.getElementById("a");
        const total = document.getElementById("b");
        if (!inputPvalue) {
            tip.innerText = "$0.00";
            total.innerText = "$0.00"
        } else {
            tip.innerText = "$" + Num1;
            total.innerText = "$" + Num2;
        }

    }
});

// Adicionando evento de input no input de valor
input.addEventListener("input", function () {
    inputValue = input.value;
});

// Selecionando todos os botões com querySelectorAll
var buttons = document.querySelectorAll('input[type="button"]');
var lastClickedButton;

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
         buttonValue = this.value;
        if (lastClickedButton) {
            lastClickedButton.style.backgroundColor = "";
        }
        this.style.backgroundColor = "hsl(172, 67%, 45%)";
        lastClickedButton = this;
    });
});


document.getElementById("resetButton").addEventListener("click", function(){
    document.getElementById("custom-button").value = null;
    document.getElementById("value").value = 0;
    document.getElementById("Person").value= 0;
    const tip = document.getElementById("a");
    const total = document.getElementById("b");
    tip.innerText = "$0.00";
    total.innerText = "$0.00"
    custom_btn.type = "button"
    custom_btn.style.width = "100px"
    custom_btn.style.height = "50px"
    custom_btn.style.textAlign = "center"
    custom_btn.value = "Custom"
    lastClickedButton.style.backgroundColor ="hsl(183, 100%, 15%)"
});
