//--------------------------------------------------- COUNTRY STATE DROPDOWN ----------------------------------------------------------//

// Define an array of countries with id and value properties
var Country = [
	{ id: 1, value: "India" },
	{ id: 2, value: "Japan" },
	{ id: 3, value: "UAE" }
];
// Loop through the Country array and append an option element to the country dropdown for each country
$.each(Country, function (k, item) {
	var option = '<option id=' + item.id;
	if (item.id === 0) {
	}
	option += ' > ' + item.value + '</option>';
	$("#country").append(option);
});
// Define an array of states with id, value, and country_id properties
var States = [
	{ id: 1, value: "Maharashtra", country_id: 1 },
	{ id: 2, value: "Delhi", country_id: 1 },
	{ id: 3, value: "Kerala", country_id: 1 },
	{ id: 4, value: "Ishikawa", country_id: 2 },
	{ id: 5, value: "Hokaido", country_id: 2 },
	{ id: 6, value: "Kansai", country_id: 2 },
	{ id: 7, value: "Dubai", country_id: 3 },
	{ id: 8, value: "Abu Dhabi", country_id: 3 },
	{ id: 9, value: "Sharjah", country_id: 3 },
];
// Set up an event listener for the country dropdown
$("#country").on("change", function () {
	var countryId = $("#country option:selected").attr("id"); // Get the id of the selected country
	var filterState = States.filter(x => x.country_id == parseInt(countryId)); // Filter the States array for states that match the selected country
	$("#state").empty(); // Clear the state dropdown
	// Loop through the filtered array and append an option element to the state dropdown for each state
	$.each(filterState, function (k, item) {
		$("#state").append('<option id=' + item.id + ' > ' + item.value + '</option>');
	});

});