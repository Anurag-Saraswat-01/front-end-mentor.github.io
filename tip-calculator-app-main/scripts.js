var tip;

function buttonCheck(current) {
    var activeTip = document.getElementsByClassName("active");
    if(activeTip.length != 0) {
        activeTip[0].classList.remove("active");
    }
    if(current.id == "custom") {
        tip = parseFloat(current.value);
    } else {
        tip = parseFloat(current.id.substring(4));
    }
    current.classList.add("active");
}

function calculate(bill, people) {
    var tipAmount = (tip * bill) / (100 * people);
    var totalAmount = (bill + ((bill * tip) / 100)) / people;
    document.getElementById("tip-value").innerHTML = "$" + tipAmount;
    document.getElementById("total-value").innerHTML = "$" + totalAmount;
    document.getElementsByClassName("reset-button")[0].classList.remove("inactive");
}

function calcCheck() {
    var bill = document.calculator.bill.value;
    var people = document.calculator.people.value;
    if((bill != "") && (people != "0") && (people != "") && (!isNaN(tip))) {
        calculate(parseFloat(bill), parseInt(people));
    }
}

function tipCheck(current) {
    buttonCheck(current);
    calcCheck();
}

function resetCalculator() {
    document.getElementsByClassName("reset-button")[0].classList.add("inactive");
    document.getElementById("tip-value").innerHTML = "$0.00";
    document.getElementById("total-value").innerHTML = "$0.00";
}