// Question 1

const removeTextFields = function () {
    const textFields = document.querySelectorAll('input[type="text"]');
    textFields.forEach(textField => {

    const fieldId = textField.id; // To get ID of the text field
      textField.remove();


        // Show the message below when field is removed
        const messageSpan = document.getElementById(`message-${fieldId}`);
        if (messageSpan) {
            messageSpan.textContent = `The ${fieldId} text field has been removed.`;
        }
    });
}

// Add event listener to Remove Text Fields button
document.getElementById('removeFieldBtn').addEventListener('click', removeTextFields);


//Question 2

const addNewParagraph = function () { 
  const paragraph = document.createElement("p");
  paragraph.textContent = "New Paragraph Added";

  //Apply styles to the paragraph
  paragraph.style.color = "green";
  paragraph.style.fontSize = "12px";

  //Append the paragraph to the page 
  document.body.appendChild(paragraph);
};

// Add event listener to the button
document.getElementById("addBtn").addEventListener("click", addNewParagraph);



// Question 3

const removeElement = function(elementId) {

  const element = document.getElementById(elementId);

  if (element)  {
    element.remove();
    console.log(`Element with the Id ${elementId} has been removed.`);

  }
  else {
    console.log(`Error: Id named ${elementId} was not found in the page!`);
  }
}

removeElement('testId');



//Question 4

const addParagraph = function () {
  const paragraph = document.createElement("p");
  paragraph.textContent = "Paragraph is added to the page.";

  //Append the paragraph to the page 
  document.body.appendChild(paragraph);
};

// Add click event listener to the existing button with the ID (clickMeBtn)
document.getElementById("clickMeBtn").addEventListener("click", addParagraph);



// Question 5

// Function to add hover and click events to a button
const duplicateBtn = function(button) {
  
  // Change background to red on hover
  button.addEventListener('mouseover', function() {
      button.style.backgroundColor = 'red';
  });

  // Revert to default background on hover out
  button.addEventListener('mouseout', function() {
      button.style.backgroundColor = 'cadetblue'; // Default color
  });

  // Duplicate the button on click
  button.addEventListener('click', function() {
      const newButton = button.cloneNode(true); // Clone the button
      document.body.appendChild(newButton); // Append the cloned button to the page
      duplicateBtn(newButton); // Add the same events to the new button (hover and clone)
  });
}

// Add events to the initial button
const mainButton = document.querySelector('.hoverBtn');
duplicateBtn(mainButton);



// Question 6

// Get the div element to display the coordinates
const coordinatesDiv = document.getElementById('coordinates');

// Event listener for mouse movement
document.addEventListener('mousemove', function(event) {
    const x = event.clientX;
    const y = event.clientY;
    coordinatesDiv.textContent = `X: ${x}, Y: ${y}`; // Update the div with the coordinates
});



// Question 7

// Function to generate a random number between 1 and 100
const getRandomNumber = ()  => Math.floor(Math.random() * 100) + 1;

// Function to create the table
const createTable = function(rows, cols) {
  // Create the table element
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  // Create the table header row
  const headerRow = document.createElement('tr');
  for (let i = 1; i <= cols; i++) {
      const th = document.createElement('th');
      th.textContent = `Header ${i}`;
      headerRow.appendChild(th);
  }
  thead.appendChild(headerRow);

  // Create the table body rows with random numbers
  for (let i = 0; i < rows; i++) {
      const tr = document.createElement('tr');
      for (let j = 0; j < cols; j++) {
          const td = document.createElement('td');
          td.textContent = getRandomNumber();
          tr.appendChild(td);
      }
      tbody.appendChild(tr);
  }

  // Append thead and tbody to the table
  table.appendChild(thead);
  table.appendChild(tbody);

  // Clear any existing table and add the new table to the page
  const tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = ''; // Clear previous content
  tableContainer.appendChild(table);
}

// Handle the button click event
document.getElementById('createTableBtn').addEventListener('click', function() {
  const rows = document.getElementById('rows').value;
  const columns = document.getElementById('columns').value;

  // Input validation
  if (rows <= 0 || columns <= 0) {
      alert('Please enter valid numbers for rows and columns.');
  } else {
      createTable(parseInt(rows), parseInt(columns));
  }
});
