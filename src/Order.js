let currentState = welcoming;

export function handleInput(sInput) {
  return currentState(sInput);
}

export function clearInput() {
  currentState = welcoming;
}

function welcoming() {
  let aReturn = [];
  currentState = choosingService;

  aReturn.push("Welcome to Glow Nail Salon");
  aReturn.push("Would you like a manicure, pedicure, acrylic, or gel?");
  return aReturn;
}

function choosingService(sInput) {
  let aReturn = [];
  sInput = sInput.toLowerCase();

  if (sInput.startsWith("n")) {
    currentState = welcoming;
    aReturn.push("No problem! See you next time");
    return aReturn;
  }

  currentState = choosingTime;

  if (
    sInput.includes("manicure") ||
    sInput.includes("pedicure") ||
    sInput.includes("acrylic") ||
    sInput.includes("gel")
  ) {
    aReturn.push("What time would you like? (10, 12, 2, 4)");
  } else {
    currentState = choosingService;
    aReturn.push("Please choose manicure, pedicure, acrylic, or gel.");
  }

  return aReturn;
}

function choosingTime(sInput) {
  let aReturn = [];
  currentState = upsellAddon;

  aReturn.push("Would you like nail art or French tips?");
  return aReturn;
}

function upsellAddon(sInput) {
  let aReturn = [];
  sInput = sInput.toLowerCase();

  currentState = welcoming;

  if (sInput.includes("nail art") || sInput.includes("french")) {
    aReturn.push("Add-on added");
  } else {
    aReturn.push("No add-ons.");
  }

  aReturn.push("Your appointment is booked! See you soon!");

  return aReturn;
}