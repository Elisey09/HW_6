getResult(getNewArray());

function getNewArray() {
  let array = prompt("Enter numbers separated by coma");
  return array.split(",");
}

function getResult(arr) {
  let array = arr;
  doOperations(array);
  nextOperation(array);
}

function doOperations(arr) {
  let result;
  let operation;
  do {
    operation = prompt(
      "Choose the operation: sort, multiples of three, string, max, min"
    );
    switch (operation) {
      case "sort":
        result = sort(arr);
        break;
      case "multiples of three":
        result = getMultiplesOfThree(arr);
        break;
      case "string":
        result = getString(arr);
        break;
      case "max":
        result = max(arr);
        break;
      case "min":
        result = min(arr);
        break;
      default:
        alert("Choose the correct operation!");
        operation = 0;
    }
  } while (!operation);
  alert(result);
}

function nextOperation(previous) {
  if (confirm("Do you want to continue?")) {
    if (confirm("Continue with new array?")) {
      getResult(getNewArray());
    } else {
      getResult(previous);
    }
  }
}

function sort(arr) {
  let sortedAray = arr.concat().sort((a, b) => a - b);
  return "Sorted array: " + sortedAray;
}
function getMultiplesOfThree(arr) {
  return "Multiplies of three: " + arr.filter((e) => e % 3 === 0);
}
function getString(arr) {
  let divider = prompt("Enter the divider");
  return "String: " + arr.join(divider);
}
function max(arr) {
  let max;
  for (let i = 0; i < arr.length - 1; i++) {
    max = Math.max(arr[i], arr[i + 1]);
  }
  return "Max: " + max;
}
function min(arr) {
  let min;
  for (let i = 0; i < arr.length - 1; i++) {
    min = Math.min(arr[i], arr[i + 1]);
  }
  return "Min: " + min;
}
