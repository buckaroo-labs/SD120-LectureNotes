// Create a new Date object, which represents the current date and time.
const currentDate = new Date();

// Get the full year (e.g., 2025) from the Date object.
const currentYear = currentDate.getFullYear();
const monthNumber = currentDate.getMonth();
var currentSeason;
switch (monthNumber) {
	case 1:
	case 2:
	case 3:
		currentSeason='Winter ';
		break;
	case 4:
	case 5:
	case 6:
		currentSeason='Spring ';
		break;
	default:
		currentSeason='Fall ';
}

function init() {
	console.log("Current month: " + monthNumber);
	document.getElementById("CurrentTerm").textContent = currentSeason + currentYear;
}