//handle when the number is pressed. It renders the number into #input element
function number(number) {
    // TODO: answer here
<<<<<<< HEAD
    document.getElementById("input").value += number;
    document.getElementById("input").value = document
      .getElementById("input")
      .value.replace(/\s/g, "");
  }
  
  //handle when the Del button, AC button and other operators (+, /, -, x) are pressed. It renders the operator into #input element
  function operator(operator) {
    // TODO: answer here
    var input_var = document.getElementById("input");
    switch (operator) {
      case "+":
        input_var.value += "+";
        break;
      case "-":
        input_var.value += "-";
        break;
      case "*":
        input_var.value += "*";
        break;
      case "/":
        input_var.value += "/";
        break;
      case "AC":
        input_var.value = "";
        break;
      case "Del":
        input_var.value = input_var.value.substring(
          0,
          input_var.value.length - 1
        );
        break;
      case ".":
        input_var.value += ".";
        break;
    }
  }
  
  //handle when = button is pressed. It renders the result into #input element
  function calculate() {
=======
}

//handle when the Del button, AC button and other operators (+, /, -, x) are pressed. It renders the operator into #input element
function operator(operator) {
    let input = document.getElementById('input');
    if (operator == 'Del') {
        // TODO: answer here
    } else if (operator == "AC") {
        // TODO: answer here
    } else {
        // TODO: answer here
    }
}

//handle when = button is pressed. It renders the result into #input element
function calculate() {
>>>>>>> 4e30471d8f9af3dbab07200ffeab3f65edeef021
    // TODO: answer here
    document.getElementById("input").value = eval(
      document.getElementById("input").value
    );
  }
  //handle when the number is pressed. It renders the number into #input element
  function number(number) {
    // TODO: answer here
    document.getElementById("input").value += number;
    document.getElementById("input").value = document
      .getElementById("input")
      .value.replace(/\s/g, "");
  }
  
  //handle when the Del button, AC button and other operators (+, /, -, x) are pressed. It renders the operator into #input element
  function operator(operator) {
    // TODO: answer here
    var input_var = document.getElementById("input");
    switch (operator) {
      case "+":
        input_var.value += "+";
        break;
      case "-":
        input_var.value += "-";
        break;
      case "*":
        input_var.value += "*";
        break;
      case "/":
        input_var.value += "/";
        break;
      case "AC":
        input_var.value = "";
        break;
      case "Del":
        input_var.value = input_var.value.substring(
          0,
          input_var.value.length - 1
        );
        break;
      case ".":
        input_var.value += ".";
        break;
    }
  }
  
  //handle when = button is pressed. It renders the result into #input element
  function calculate() {
    // TODO: answer here
    document.getElementById("input").value = eval(
      document.getElementById("input").value
    );
  }