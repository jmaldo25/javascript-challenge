// Code for Level 1

// from data.js
var tableData = data;

var table = d3.select('table');
var tableBody = table.select('tbody')
var filterBtn = d3.select('#filter-btn')

// Function to create the table and insert data into the table
createTable(tableData, tableBody)

// Setting up function to hold values
let inputValues = {
    datetime: '',
  };
  
  // Set up keys for the input elements
  const inputKeys = Object.keys(inputValues);
  d3.selectAll('.form-control').each(function(d, i) {
    this.setAttribute('name', inputKeys[i]);
  });
  
  // Creating event listener
  d3.selectAll('.form-control').on('change', event => (inputValues[d3.event.target.name] = d3.event.target.value));
  
  // Setting up event listener for button click
  filterBtn.on('click', () => {
    // Create function to filter values
    const filterValues = Object.values(inputValues);
    const tableRows = tableBody.selectAll('tr');
    tableRows.each(function() {
      let row = this;
      // Display each row
      row.style.display = '';
      // Retrive table data
      let td = row.getElementsByTagName('td');
      // Put information into array for use
      let tdArray = Array.from(td);
      tdArray.forEach(function(td, tdIndex) {
        let cell = row.getElementsByTagName('td')[tdIndex];
        if (cell) {
          if (filterValues[tdIndex]) {
            // Set up for information not filtered to be displayed
            if (row.style.display !== 'none' && cell.innerHTML.toUpperCase().indexOf(filterValues[tdIndex].toUpperCase()) > -1) {
              return;
            }
            row.style.display = 'none';
          }
        }
      });
    });
  });