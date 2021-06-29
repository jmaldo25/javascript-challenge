// Creating function to create table
const createTable = (data, tableBody) => {
    data.forEach(ufo => {
        let newRow = tableBody.append('tr');

        // Create object for row
        Object.entries(ufo).forEach(([key, value]) => newRow.append('td').text(value.toString()));
    });
};