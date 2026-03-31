function toCase(text) {
  // If empty string
  if (text === "") {
    return "-";
  }

  let lower = text.toLowerCase();
  let upper = text.toUpperCase();

  return lower + "-" + upper;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));