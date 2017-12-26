// Hands On Project 1
// Functions

/* var fullString = addStrings ("I am ", "a full string!");

function addStrings (string1, string2 ) {
    return string1 + string2;
}

console.log(fullString); */

/* Remember that variables that live within a function cannot be executed till the function is invoked. 
You have to call the function outside the function like at the bottom. */

/* function numberCalculation (number1, number2) {
    var number1 = 45; 
    var number2 = 78;
    var multiplyNumbers = number1 * number2;

    if (multiplyNumbers < 2000) {
        alert( "I wish it was a bigger number");
    } else {
        alert( "That's more like it!");
    }
}

numberCalculation(); */

function nameInfo() {
    var firstName, middleName, lastName;
    firstName = document.getElementById("firstName").value;
    middleName = document.getElementById("middleName").value;
    lastName = document.getElementById("lastName").value;
    document.getElementById("fullName").innerHTML = firstName + " " + middleName + " " + lastName;
}
