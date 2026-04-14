function calculator(num) {
 const display = document.getElementById("field");
 display.value += num.value;
}


function calculateExpression() {
 const display = document.getElementById("field");

 let expression = display.value;
 let ans = eval(expression);

 display.value = expression + "=" + ans;

}

