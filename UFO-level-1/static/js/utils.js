// Creating function to create table
var createTable = (data, tableBody) => {
    data.forEach(ufo => {
        let newRow = tableBody.append('tr');

        // Create object for row
        Object.defineProperties(ufo).forEach(([key, value]) => newRow.append('td').text(value.toString()));
    });
};