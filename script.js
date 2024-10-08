
var heading = document.getElementsByTagName("h1");

function move(){
  heading.style.transform= translateY(-5 + px);
  heading.style.opacity=1;
}


function addToDisplay(value) {
  document.getElementById('input').value += value;
}

function clearDisplay() {
  document.getElementById('input').value = '';
}

function calculate() {
  var expression = document.getElementById('input').value;
  var result = eval(expression);
  document.getElementById('input').value = result;
}

