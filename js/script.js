"use strict"

// Calculate what museum admission fee you will need to pay depending on day and age
function enterClicked () {
  	// initialize variables
	let Output = ""
  
	// get user input
	let age = parseInt(document.getElementById('age').value)

  // get day of the week (different from day)
  let select = document.getElementById("day");
  let day = select.options[select.selectedIndex].value;
  
    // if the user inputs their age as 5 or below or 95 or higher
	if (age <= 5 || age >= 95) {
		Output = "Free admission"
	} 

  	// else if user input for day is Tuesday or Thursday OR age is 12 - 21
	else if ((day == "Tuesday" || day == "Thursday") || (age >= 12 && age <= 21)) {
		Output = "Student discount"
	} 

    //else if none of the conditions are met
	else {
		Output = "Full admission"
	}
	
  // display the results
  document.getElementById('user-info').innerHTML = Output                                                                                                                                                                               
}
