var startingMenu = document.querySelector("form");
// var chosenDish = document.querySelector("#result");
 var sideDishOption = document.querySelector("#side");
 var mainDishOption = document.querySelector("#main-dish");
 var dessertOption = document.querySelector("#dessert");
// var mealOption = document.querySelector("#entire-meal");

var cookPotImage = document.querySelector(".cookpot-image");
var suggestions = document.querySelector(".suggestions");

var letsCookButton = document.querySelector(".lets-cook-button");
var clearButton = document.querySelector(".clear-button");
var recipeButton = document.querySelector(".recipe-button");
var clearButton = document.querySelector(".clear-button");

var chosenDish;

//Event Listeners:
letsCookButton.addEventListener("submit", letsCookButtonHandler);
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
      // console.log(`You should make ${chosenDish} !`);
      // ${chosenDish.getRandomIndex}
    }
  }
  if (chosenDish === "side") {
    return `You should make ${sideDish[getRandomIndex(sideDish)]} `
  } else if (chosenDish === "main-dish") {
    return `You should make ${mainDish[getRandomIndex(mainDish)]}`
  } else if (chosenDish === "dessert") {
    return `You should make ${dessert[getRandomIndex(dessert)]}`
  }
};
//if "side" is chosen, random side is returned
//if "main-dish" is chosen, random main dish is returned
//if "dessert" is chosen, random dessert is returned
//if "entire meal" is chosen, one random value for each category is returned (object)

function addNewButtonHandler() {
  //when "addNewButton" is clicked, the main page is reset
}

function chooseSideDish() {
  //randomizer
  return getRandomIndex(sideDish[i]);
}

function chooseMainDish() {
  //randomizer
  return getRandomIndex(mainDish[i]);
}

function chooseDessert() {
  //randomizer
  return getRandomIndex(dessert[i]);
}

function chooseEntireMeal() {
  //randomizer
  //chooseSideDish();
  //chooseMainDish();
  //chooseDessert();
}

function hideCookPot() {
  //when let's cook button" is clicked, cookpot img disappears
  cookPotImage.classList.add("hidden");
};

function showCookPot() {
  cookPotImage.classList.remove("hidden");
}

function showClearButton() {
  clearButton.classList.remove("hidden");
}

function showSuggestions() {
  clearButton.classList.remove("hidden");
}
//Event Handlers:
function letsCookButtonHandler() {
  // event.preventDefault();
  hideCookpot();
  courseSelector();
  showSuggestions();
  showClearButton();
  //when "let's cook button" is clicked,
  //it has blue border and lighter color font
  //each option triggers another view page randomizer
  //"clear" button is visible
};
function clearButtonHandler() {

}
