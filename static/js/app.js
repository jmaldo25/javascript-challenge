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


