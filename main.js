var startingMenu = document.querySelector("form");
 var sideDishOption = document.querySelector("#side");
 var mainDishOption = document.querySelector("#main-dish");
 var dessertOption = document.querySelector("#dessert");
// var mealOption = document.querySelector("#entire-meal");

var cookPotImage = document.querySelector(".cookpot-image");
var suggestions = document.querySelector(".suggestions");
var suggestionsText = document.querySelector(".suggestions-text");

var letsCookButton = document.querySelector(".lets-cook-button");
var clearButton = document.querySelector(".clear-button");
var recipeButton = document.querySelector(".recipe-button");
var clearButton = document.querySelector(".clear-button");

var chosenDish;

//Event Listeners:
// letsCookButton.addEventListener("click", letsCookButtonHandler);
window.addEventListener("load", showCookPot);
letsCookButton.addEventListener("click", courseSelector);
clearButton.addEventListener("click", clearButtonHandler);
// addNewButton.addEventListener("click", addNewButtonHandler);

//functions:
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function courseSelector() {
  event.preventDefault();
  hideCookPot();
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
  }
  showClearButton();
  showSuggestions();
};
//if "entire meal" is chosen, one random value for each category is returned (object)

function addNewButtonHandler() {
  //when "addNewButton" is clicked, the main page is reset
}

function chooseEntireMeal() {
  //randomizer
  //chooseSideDish();
  //chooseMainDish();
  //chooseDessert();
}

function hideCookPot() {
  // event.preventDefault();
  //when let's cook button" is clicked, cookpot img disappears
  cookPotImage.classList.add("hidden");
};



function showClearButton() {
  clearButton.classList.remove("hidden");
}

function showSuggestions() {
  suggestions.classList.remove("hidden");
}

//Event Handlers:

function showCookPot() {
  cookPotImage.classList.remove("hidden");
}

function letsCookButtonHandler() {
  event.preventDefault();
  courseSelector();
  hideCookpot();
  showSuggestions();
  showClearButton();
  //when "let's cook button" is clicked,
  //each option triggers another view page randomizer
  //"clear" button is visible
};
function clearButtonHandler() {

}
