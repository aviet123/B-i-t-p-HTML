function cong() {
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    var result = number1 + number2;
    document.getElementById('result1').innerHTML = result;
}
function tru() {
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    var result = number1 - number2;
    document.getElementById('result1').innerHTML = result;

}
function nhan() {
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    var result = number1 * number2;
    document.getElementById('result1').innerHTML = result;

}
function chia() {
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    var result = number1 / number2;
    document.getElementById('result1').innerHTML = result;

}