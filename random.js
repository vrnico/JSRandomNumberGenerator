var inputNumber = prompt('Give me a base number')
var bottomNumber = parseInt(inputNumber);
var userNumber = prompt('Give me a second number');
var parsedNumber = parseInt(userNumber);

var randomNumber = Math.floor(Math.random() * (parsedNumber - bottomNumber + 1)) + bottomNumber;
var message = "<h1><span id='test'>" + randomNumber + "</span></h1><br><h2> <p> is a random number between <h1>"+ bottomNumber +" & " + parsedNumber + "</h1>.</p></h2>";
document.write(message);
