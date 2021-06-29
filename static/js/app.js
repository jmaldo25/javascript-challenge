// Level 1 & Level 2 - combined for multiple search criteria to filter table

// from data.js
var tableData = data;

// Reference to the table body in html
var tbody = d3.select("tbody");

// console.log(data);

// Create loop for data and create table update w/ data js file
tableData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Create input for button and reset
var button = d3.select("#filter-btn")

var resetButton = d3.select("#reset-filter-btn")

// Set up event handlers
button.on("click", function() {

    // Set up for refresh by removing any previous table
    d3.select("tbody").html("");

    // Prevent page refresh
    d3.event.preventDefault();

    // Set up the select for the table and set to lowercase
    var date = d3.select("#datetime").property("value");
    var city = d3.select("#city").property("value").toLowerCase();
    var state = d3.select("#state").property("value").toLowerCase();
    var country = d3.select("#country").property("value").toLowerCase();
    var shape = d3.select("#shape").property("value").toLowerCase();
})