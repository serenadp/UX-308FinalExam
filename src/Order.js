let currentState = welcoming;

export function handleInput(sInput) {
  return currentState(sInput);
}

export function clearInput() {
  currentState = welcoming;
}

function welcoming() {
  let aReturn = [];
  currentState = choosingItem;

  aReturn.push("Welcome to Señor Salsa!");
  aReturn.push("Would you like tacos or burritos?");
  return aReturn;
}

function choosingItem(sInput) {
  let aReturn = [];
  sInput = sInput.toLowerCase();

  if (sInput.startsWith("n")) {
    currentState = welcoming;
    aReturn.push("No problem! Come back anytime.");
    return aReturn;
  }

  currentState = choosingSize;

  if (sInput.includes("taco") || sInput.startsWith("y")) {
    aReturn.push("Please choose size taco (small or large)");
  } 
  else if (sInput.includes("burrito")) {
    aReturn.push("Please choose size burrito (small or large)");
  } 
  else {
    aReturn.push("Please choose tacos or burritos.");
  }

  return aReturn;
}

function choosingSize(sInput) {
  let aReturn = [];
  currentState = choosingFilling;

  aReturn.push("What filling would you like? (chicken, beef, veggie, steak)");
  return aReturn;
}

function choosingFilling(sInput) {
  let aReturn = [];
  currentState = upsellDrink;

  aReturn.push("Would you like a drink? (coke, sprite)");
  return aReturn;
}

function upsellDrink(sInput) {
  let aReturn = [];
  sInput = sInput.toLowerCase();

  currentState = welcoming;

  if (sInput.startsWith("y") || sInput.includes("coke") || sInput.includes("sprite")) {
    aReturn.push("Drink added.");
  } 
  else {
    aReturn.push("No drink added.");
  }

  aReturn.push("Order confirmed! Please pick up your food in 20 minutes.");

  return aReturn;
}