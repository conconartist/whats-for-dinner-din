var startingMenu = document.querySelector("form");
var sideDishOption = document.querySelector("#side");
var mainDishOption = document.querySelector("#main-dish");
var dessertOption = document.querySelector("#dessert");
var mealOption = document.querySelector("#entire-meal");

var cookPotImage = document.querySelector(".cookpot-image");
var suggestions = document.querySelector(".suggestions");
var suggestionsText = document.querySelector(".suggestions-text");

var letsCookButton = document.querySelector(".lets-cook-button");
var clearButton = document.querySelector(".clear-button");
var recipeButton = document.querySelector(".recipe-button");
var clearButton = document.querySelector(".clear-button");

var chosenDish;

//Event Listeners:
letsCookButton.addEventListener("click", letsCookButtonHandler);
clearButton.addEventListener("click", clearButtonHandler);

// addNewButton.addEventListener("click", addNewButtonHandler);

//functions:
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function courseSelector() {
  var foodMenu = document.getElementsByName("select-course");
  for (var i = 0; i < foodMenu.length; i++) {
    if(foodMenu[i].checked) {
      chosenDish = foodMenu[i].value;
    }
  }
  if (chosenDish === "side") {
    suggestionsText.innerText = `${sideDish[getRandomIndex(sideDish)]}!`;
  } else if (chosenDish === "main-dish") {
    suggestionsText.innerText = `${mainDish[getRandomIndex(mainDish)]}!`;
  } else if (chosenDish === "dessert") {
    suggestionsText.innerText = `${dessert[getRandomIndex(dessert)]}!`;
  } else if (chosenDish === "entire-meal") {
    suggestionsText.innerText = `${mainDish[getRandomIndex(mainDish)]} with a side of ${sideDish[getRandomIndex(sideDish)]} and ${dessert[getRandomIndex(dessert)]} for dessert!`;
  }
};

//add + remove:
function hideCookPot() {
  cookPotImage.classList.add("hidden");
};

function showClearButton() {
  clearButton.classList.remove("hidden");
};

function showSuggestions() {
  suggestions.classList.remove("hidden");
};

function hideSuggestions() {
  suggestions.classList.add("hidden");
}

function showCookPot() {
  cookPotImage.classList.remove("hidden");
};

//Event Handlers:
function letsCookButtonHandler() {
  event.preventDefault();
  hideCookPot();
  courseSelector();
  showClearButton();
  showSuggestions();
};

function clearButtonHandler() {
hideSuggestions();
showCookPot();
letsCookButton.disabled = true;
//if(foodMenu[i].checked) {
//  letsCookButton.disabled = false;
//}
//on change selection, letsCookButton enables to allow click
}
