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

    // Set up new varible for saved data
    filterData = tableData;

    // Set up filter by search input
    if (date) {
        filterData = filterData.filter(record => record.datetime === date);
    }
    if (city) {
        filterData = filterData.filter(record => record.city === city);
    }
    if (state) {
        filterData = filterData.filter(record => record.state === state);
    }
    if (country) {
        filterData = filterData.filter(record => record.country === country);
    }
    if (shape) {
        filterData = filterData.filter(record => record.shape === shape);
    }

    // Display the filtered table
    filterData.forEach((report) => {
        var row = tbody.append('tr');
        Object.entries(report).forEach(([key, value]) => {
            //console.log(key, value);
            var cell = row.append('td');
            cell.text(value);
        });
    });
});