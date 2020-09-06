var mainPageForm = document.querySelector("select-course");

var letsCookButton = document.querySelector(."lets-cook-button");
var clearButton = document.querySelector(."clear-button");
var recipeButton = document.querySelector(."recipe-button");
var foodMenu = document.querySelector(."food");
var cookPotImage = document.querySelector(."cookpot");

//Event Listeners:
letsCookButton.addEventListener("submit", courseSelector);
clearButton.addEventListener("click", clearButtonHandler);
addNewButton.addEventListener("click", addNewButtonHandler);

//Event Handlers:
function courseSelector() {
//when "let's cook button" is clicked,
//it has blue border and lighter color font
//each option triggers another view page randomizer
//"clear" button is visible
//if "side" is chosen, random side is returned
//if "main-dish" is chosen, random main dish is returned
//if "dessert" is chosen, random dessert is returned
//if "entire meal" is chosen, one random value for each category is returned (object)
}

function clearButtonHandler() {
  //when clearButton is clicked, the cookpot image returns
  //main page is visible and input fields are cleared
}

function addNewButtonHandler() {
  //when "addNewButton" is clicked, the main page is reset
}

//functions:
function hideCookPot() {
  //when let's cook button" is clicked, cookpot img disappears
}

function chooseSideDish() {
  //randomizer
}

function chooseMainDish() {
  //randomizer
}

function chooseDessert() {
  //randomizer
}

function chooseEntireMeal() {
  //randomizer
  //chooseSideDish();
  //chooseMainDish();
  //chooseDessert();
}
