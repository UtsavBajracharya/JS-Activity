//Question 1

// const removeTextFields = function () {
//     const textFields = document.querySelectorAll('input[type="text"]');
//     textFields.forEach(textField => {
//       textField.remove();
//     });
// }

// removeTextFields();

//Question 2

const addNewParagraph = function () {
  const paragraph = document.createElement("p");
  paragraph.textContent = "New Paragraph Added";

  //Apply styles to the paragraph
  paragraph.style.color = "green";
  paragraph.style.fontSize = "12px";

  //Append the paragraph to the body(or any other container element)
  document.body.appendChild(paragraph);
};

// Add event listener to the button
document.getElementById("addBtn").addEventListener("click", addNewParagraph);

//Question 3

// const removeElement = function(elementId) {

//   const element = document.getElementById('firstname');

//   if (element)  {
//     element.remove();
//     console.log(`Element with the Id ${elementId} has been removed.`);

//   }
//   else {
//     console.log(`Error: Id named ${elementId} was not found in the page!`);
//   }
// }

// removeElement();

//Question 4

const addParagraph = function () {
  const paragraph = document.createElement("p");
  paragraph.textContent = "Paragraph is added to the page.";

  //Append the paragraph to the body(or any other container element)
  document.body.appendChild(paragraph);
};

// Add click event listener to the existing button with the ID "clickMeBtn"
document.getElementById("clickMeBtn").addEventListener("click", addParagraph);

// Question 5


