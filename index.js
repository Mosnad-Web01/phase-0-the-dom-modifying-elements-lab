// Remove the <main> element with id "main"
const main = document.getElementById("main");
if (main) {
  main.remove();
}

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Set the id of newHeader to "victory"
newHeader.id = "victory";

// Set the text content of newHeader
newHeader.textContent = "Your-Name is the champion"; // Replace "Your-Name" with your actual name

// Append the newHeader to the body
document.body.appendChild(newHeader);
